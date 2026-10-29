// ==============================================================================
// LOCAL DATABASE MODE (Supabase commented out for now - can be re-enabled later)
// ==============================================================================

/*
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://llxqxrccnsxhqnsqixra.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pcvvu8yIACfG09V_-Eg20g_6rGR3Lq9';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
*/

// Lightweight offline mock to prevent breaks when Supabase is commented out
export const supabase = {
  auth: {
    signUp: async (_opts?: any): Promise<{ data: any; error: any }> => ({ data: null, error: null }),
    signInWithPassword: async (_opts?: any): Promise<{ data: any; error: any }> => ({ data: null, error: null }),
    signOut: async (): Promise<{ error: any }> => ({ error: null }),
    updateUser: async (_opts?: any): Promise<{ data: any; error: any }> => ({ data: null, error: null }),
  },
  from: (_table: string) => ({
    select: (_cols?: string) => ({
      eq: (_col: string, _val: any) => ({
        single: async (): Promise<{ data: any; error: any }> => ({ data: null, error: null }),
        maybeSingle: async (): Promise<{ data: any; error: any }> => ({ data: null, error: null }),
      }),
    }),
    upsert: async (_record: any): Promise<{ error: any }> => ({ error: null }),
  }),
};

// ==============================================================================
// 100% LOCAL DATABASE STORAGE ENGINE (localStorage / client-side)
// ==============================================================================

export const storageService = {
  saveUserProfile: async (userId: string, data: any) => {
    // Persist locally for instant UI responsiveness
    localStorage.setItem(`scheme_sathi_profile_${userId}`, JSON.stringify(data));

    // Keep email registry synchronized with latest profile and answers
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
    // 1. Direct profile storage
    const local = localStorage.getItem(`scheme_sathi_profile_${userId}`);
    if (local) {
      try {
        return JSON.parse(local);
      } catch {
        // ignore
      }
    }

    // 2. Check registry by ID
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

    // Check local registry
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    const regUser = registry[cleanEmail];

    // Prefer freshest profile saved under user's ID
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

    // Direct profile fallback if profile was created prior
    const fallbackUserId = `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`;
    const directFallback = localStorage.getItem(`scheme_sathi_profile_${fallbackUserId}`);
    if (directFallback) {
      accounts[cleanEmail] = {
        password: passwordAttempt.trim(),
        userId: fallbackUserId,
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
    localStorage.setItem(`scheme_sathi_saved_${userId}`, JSON.stringify(schemeIds));
  },

  getSavedSchemes: async (userId: string): Promise<string[]> => {
    const local = localStorage.getItem(`scheme_sathi_saved_${userId}`);
    return local ? JSON.parse(local) : [];
  },

  clearAllLocalData: () => {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('scheme_sathi_') || key.startsWith('ready_docs_') || key.startsWith('usr_'))) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    localStorage.removeItem('scheme_sathi_last_user');
    localStorage.removeItem('scheme_sathi_users_registry');
    localStorage.removeItem('scheme_sathi_accounts');
  }
};

