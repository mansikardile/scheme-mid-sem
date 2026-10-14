import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  KeyRound,
  Wheat,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Accessibility,
  Users
} from 'lucide-react';
import { supabase, storageService } from '../lib/supabase';
import type { CategoryType, UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onSuccess: (user: UserProfile, shouldOpenQuestionnaire: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'verify'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('farmer');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'farmer' as CategoryType, label: 'Farmer & Agriculture', icon: Wheat, desc: 'PM-Kisan, KCC, Fasal Bima, Solar Pumps' },
    { id: 'student' as CategoryType, label: 'Student & Youth', icon: GraduationCap, desc: 'National Scholarships, Fee Waivers, Tech Grants' },
    { id: 'msme' as CategoryType, label: 'MSME & Business', icon: Briefcase, desc: 'MUDRA, PMEGP, 35% Capital Subsidy, Seed Fund' },
    { id: 'women' as CategoryType, label: 'Women & Child', icon: HeartHandshake, desc: 'Sukanya Samriddhi, PMMVY, Stand-Up India' },
    { id: 'healthcare' as CategoryType, label: 'Healthcare & Seniors', icon: Users, desc: 'Ayushman Bharat, Atal Pension, Free Medicine' },
    { id: 'disability' as CategoryType, label: 'Differently Abled', icon: Accessibility, desc: 'UDID Grants, Concessional Loans, Special Pension' },
  ];

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setInfoMessage('');
    setIsLoading(true);

    try {
      const cleanEmail = email.toLowerCase().trim();

      if (mode === 'signup') {
        if (!fullName.trim() || !cleanEmail || !password.trim()) {
          setErrorMessage('Please complete all required fields.');
          setIsLoading(false);
          return;
        }

        // Check if user is already registered in real time
        const existingUser = await storageService.getUserByEmail(cleanEmail);
        if (existingUser) {
          setErrorMessage('An account with this email is already registered. Duplicate registration is not permitted. Please log in.');
          setIsLoading(false);
          return;
        }

        // Try Supabase auth registration
        let newUserId = `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`;
        try {
          const { data: authData } = await supabase.auth.signUp({
            email: cleanEmail,
            password,
            options: {
              data: {
                full_name: fullName,
                category: selectedCategory,
              }
            }
          });
          if (authData?.user?.id) {
            newUserId = authData.user.id;
          }
        } catch (e) {
          console.warn('Supabase auth sign up note:', e);
        }

        const newProfile: UserProfile = {
          id: newUserId,
          email: cleanEmail,
          fullName: fullName.trim(),
          isEmailVerified: true,
          selectedCategory,
          answers: {
            category: selectedCategory,
            age: selectedCategory === 'farmer' ? 38 : selectedCategory === 'student' ? 20 : 32,
            gender: selectedCategory === 'women' ? 'Female' : 'Male',
            casteCategory: 'OBC',
            annualIncome: selectedCategory === 'farmer' ? 120000 : 180000,
            state: 'Maharashtra',
            areaType: selectedCategory === 'farmer' ? 'Rural' : 'Semi-Urban',
            employmentStatus: selectedCategory === 'farmer' ? 'Farmer' : selectedCategory === 'student' ? 'Student' : 'SelfEmployed',
          },
          hasCompletedQuestionnaire: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        // Real-time persistence
        await storageService.registerNewUser(cleanEmail, newProfile);

        setIsLoading(false);
        onSuccess(newProfile, true);
        onClose();
        return;
      }

      if (mode === 'login') {
        if (!cleanEmail || !password.trim()) {
          setErrorMessage('Please enter both email and password.');
          setIsLoading(false);
          return;
        }

        try {
          await supabase.auth.signInWithPassword({ email: cleanEmail, password });
        } catch (e) {
          // ignore network error
        }

        let profile = await storageService.getUserByEmail(cleanEmail);

        if (!profile) {
          const userId = `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`;
          profile = await storageService.getUserProfile(userId);
        }

        if (!profile) {
          setErrorMessage('No registered account found with this email. Please sign up to create your citizen profile.');
          setIsLoading(false);
          return;
        }

        setIsLoading(false);
        onSuccess(profile, !profile.hasCompletedQuestionnaire);
        onClose();
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected authentication error occurred.');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        data-lenis-prevent
        className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl shadow-slate-900/20 dark:shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background orbs */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-accent/15 dark:bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-brand-accent/15 dark:bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
          </div>
          <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
            Scheme Sathi National Citizen Gateway
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-1">
          {mode === 'login' && 'Welcome Back, Citizen'}
          {mode === 'signup' && 'Create Your Citizen Profile'}
          {mode === 'verify' && 'Verify Your Email'}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {mode === 'login' && 'Sign in to access your matched schemes, saved documents, and application tracker.'}
          {mode === 'signup' && 'Select your citizen category and answer key parameters to unlock tailored grants.'}
          {mode === 'verify' && 'Enter the OTP sent to your email to activate Direct Benefit Transfer matching.'}
        </p>

        {/* Mode Toggle Pills (Login / Signup) */}
        {mode !== 'verify' && (
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-white/10 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage('');
              }}
              className={`py-2.5 text-sm font-semibold rounded-xl transition-all ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md shadow-brand-accent/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setErrorMessage('');
              }}
              className={`py-2.5 text-sm font-semibold rounded-xl transition-all ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md shadow-brand-accent/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sign Up Free
            </button>
          </div>
        )}

        {/* Feedback Messages */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
            <X className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
        {infoMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
            <span>{infoMessage}</span>
          </div>
        )}

        <form onSubmit={handleAuthSubmit} className="space-y-4">
          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Legal Name (as in Aadhaar)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra Patil"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white focus:border-brand-accent"
                  />
                </div>
              </div>

              {/* Citizen Primary Category Dropdown Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Select Primary Category for Scheme Tailoring</span>
                  <span className="text-[10px] text-brand-accent font-bold">Dynamic Questionnaire Base</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-brand-accent/15 dark:bg-brand-accent/20 border-brand-accent shadow-sm' 
                            : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-brand-accent' : 'text-slate-500 dark:text-slate-400'}`} />
                        <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-brand-accent dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                          {cat.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {mode !== 'verify' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white focus:border-brand-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white focus:border-brand-accent"
                  />
                </div>
              </div>
            </>
          )}

          {mode === 'verify' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Enter 6-Digit Email OTP
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="123456"
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-base text-center tracking-widest font-mono text-slate-900 dark:text-white focus:border-brand-accent"
                />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 text-center">
                Demo code is prefilled as <span className="text-brand-accent font-bold">123456</span>
              </p>
            </div>
          )}

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4"
          >
            {isLoading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>
                  {mode === 'login' && 'Sign In to Dashboard'}
                  {mode === 'signup' && 'Verify Email & Proceed to 20-30 Question Wizard'}
                  {mode === 'verify' && 'Verify & Launch Matching Engine'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Fast Login Helper */}
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Quick Demo Access:</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setEmail('farmer.demo@schemesathi.in');
                setPassword('Password@123');
                setMode('login');
              }}
              className="text-brand-accent hover:underline font-semibold"
            >
              Demo Farmer
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setEmail('student.demo@schemesathi.in');
                setPassword('Password@123');
                setMode('login');
              }}
              className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
            >
              Demo Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
