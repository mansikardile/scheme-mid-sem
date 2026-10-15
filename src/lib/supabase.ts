import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://llxqxrccnsxhqnsqixra.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pcvvu8yIACfG09V_-Eg20g_6rGR3Lq9';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Helper storage functions with fallback to localStorage
export const storageService = {
  saveUserProfile: async (userId: string, data: any) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({ id: userId, ...data, updated_at: new Date().toISOString() });
      
      if (error) {
        console.warn('Supabase note:', error.message);
      }
    } catch (err) {
      console.warn('Supabase network note:', err);
    }
    
    // Always persist locally for instant UI responsiveness
    localStorage.setItem(`scheme_sathi_profile_${userId}`, JSON.stringify(data));

    // CRITICAL FIX: Keep email registry synchronized with latest profile and answers
    if (data?.email) {
      const cleanEmail = data.email.toLowerCase().trim();
      const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
      registry[cleanEmail] = {
        ...registry[cleanEmail],
        ...data,
        id: userId,
        email: cleanEmail,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem('scheme_sathi_users_registry', JSON.stringify(registry));
    }
  },

  getUserProfile: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (!error && data) return data;
    } catch (err) {
      // Fallback
    }

    const local = localStorage.getItem(`scheme_sathi_profile_${userId}`);
    if (local) {
      try {
        return JSON.parse(local);
      } catch {
        // ignore
      }
    }

    // Check registry by ID
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    for (const email in registry) {
      if (registry[email]?.id === userId) {
        return registry[email];
      }
    }
    return null;
  },

  getUserByEmail: async (email: string) => {
    const cleanEmail = email.toLowerCase().trim();
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', cleanEmail)
        .maybeSingle();
      if (!error && data) return data;
    } catch (err) {
      // fallback
    }

    // Check local registry
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    const regUser = registry[cleanEmail];

    // Always prefer the freshest profile saved under the user's ID
    if (regUser?.id) {
      const direct = localStorage.getItem(`scheme_sathi_profile_${regUser.id}`);
      if (direct) {
        try {
          const parsed = JSON.parse(direct);
          if (parsed) return parsed;
        } catch {
          // fallback
        }
      }
      return regUser;
    }

    // Fallback to deterministic user ID
    const fallbackUserId = `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`;
    const directFallback = localStorage.getItem(`scheme_sathi_profile_${fallbackUserId}`);
    if (directFallback) {
      try {
        return JSON.parse(directFallback);
      } catch {
        // fallback
      }
    }

    return null;
  },

  registerNewUser: async (email: string, userProfile: any, password?: string) => {
    const cleanEmail = email.toLowerCase().trim();
    // Save to Supabase
    try {
      await supabase.from('profiles').upsert({
        id: userProfile.id,
        email: cleanEmail,
        ...userProfile,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.warn('Supabase sync:', err);
    }

    // Save to local registry and profile key
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    registry[cleanEmail] = userProfile;
    localStorage.setItem('scheme_sathi_users_registry', JSON.stringify(registry));
    localStorage.setItem(`scheme_sathi_profile_${userProfile.id}`, JSON.stringify(userProfile));

    // Store credentials for robust offline authentication
    if (password) {
      const accounts = JSON.parse(localStorage.getItem('scheme_sathi_accounts') || '{}');
      accounts[cleanEmail] = {
        password,
        userId: userProfile.id,
        registeredAt: new Date().toISOString()
      };
      localStorage.setItem('scheme_sathi_accounts', JSON.stringify(accounts));
    }
  },

  verifyCredentials: async (email: string, passwordAttempt: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.toLowerCase().trim();
    if (!passwordAttempt || !passwordAttempt.trim()) {
      return { success: false, error: 'Password is required to sign in.' };
    }

    // Attempt Supabase authentication if available
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: passwordAttempt.trim()
      });
      if (!error && data?.user) {
        return { success: true };
      }
    } catch {
      // offline fallback
    }

    // Local authentication check
    const accounts = JSON.parse(localStorage.getItem('scheme_sathi_accounts') || '{}');
    const account = accounts[cleanEmail];
    if (account && account.password) {
      if (account.password !== passwordAttempt.trim()) {
        return { success: false, error: 'Incorrect password. Please verify your credentials and try again.' };
      }
      return { success: true };
    }

    // Legacy fallback: check registry
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    if (registry[cleanEmail]) {
      if (registry[cleanEmail].password && registry[cleanEmail].password !== passwordAttempt.trim()) {
        return { success: false, error: 'Incorrect password. Please verify your credentials and try again.' };
      }
      // Register password now so subsequent logins are strictly verified
      accounts[cleanEmail] = {
        password: passwordAttempt.trim(),
        userId: registry[cleanEmail].id || `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`,
        registeredAt: new Date().toISOString()
      };
      localStorage.setItem('scheme_sathi_accounts', JSON.stringify(accounts));
      return { success: true };
    }

    return { success: false, error: 'No account found with this email. Please sign up to create your citizen profile.' };
  },

  resetUserPassword: async (email: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.toLowerCase().trim();
    if (!newPassword || newPassword.trim().length < 4) {
      return { success: false, error: 'Password must be at least 4 characters long.' };
    }

    // Try Supabase if online
    try {
      await supabase.auth.updateUser({ password: newPassword.trim() });
    } catch {
      // offline fallback
    }

    const accounts = JSON.parse(localStorage.getItem('scheme_sathi_accounts') || '{}');
    const existingAccount = accounts[cleanEmail];
    
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    const userReg = registry[cleanEmail];

    if (!existingAccount && !userReg) {
      return { success: false, error: 'No registered account found with this email address. Please sign up first.' };
    }

    const userId = existingAccount?.userId || userReg?.id || `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`;

    accounts[cleanEmail] = {
      password: newPassword.trim(),
      userId,
      registeredAt: existingAccount?.registeredAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('scheme_sathi_accounts', JSON.stringify(accounts));

    if (userReg) {
      registry[cleanEmail] = {
        ...userReg,
        password: newPassword.trim(),
        passwordHash: newPassword.trim(),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem('scheme_sathi_users_registry', JSON.stringify(registry));
    }

    return { success: true };
  },

  saveSavedSchemes: async (userId: string, schemeIds: string[]) => {
    try {
      await supabase
        .from('saved_schemes')
        .upsert({ user_id: userId, scheme_ids: schemeIds, updated_at: new Date().toISOString() });
    } catch (err) {
      // sync
    }
    localStorage.setItem(`scheme_sathi_saved_${userId}`, JSON.stringify(schemeIds));
  },

  getSavedSchemes: async (userId: string): Promise<string[]> => {
    try {
      const { data, error } = await supabase
        .from('saved_schemes')
        .select('scheme_ids')
        .eq('user_id', userId)
        .single();
      if (!error && data?.scheme_ids) return data.scheme_ids;
    } catch (err) {
      // sync
    }
    const local = localStorage.getItem(`scheme_sathi_saved_${userId}`);
    return local ? JSON.parse(local) : [];
  }
};
