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
    return local ? JSON.parse(local) : null;
  },

  getUserByEmail: async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email.toLowerCase().trim())
        .maybeSingle();
      if (!error && data) return data;
    } catch (err) {
      // fallback
    }
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    return registry[email.toLowerCase().trim()] || null;
  },

  registerNewUser: async (email: string, userProfile: any) => {
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

    // Save to local registry to strictly prevent duplicate registration
    const registry = JSON.parse(localStorage.getItem('scheme_sathi_users_registry') || '{}');
    registry[cleanEmail] = userProfile;
    localStorage.setItem('scheme_sathi_users_registry', JSON.stringify(registry));
    localStorage.setItem(`scheme_sathi_profile_${userProfile.id}`, JSON.stringify(userProfile));
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
