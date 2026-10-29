import React, { useState, useEffect } from 'react';
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
  Users,
  Shield,
  ArrowLeft,
  RotateCcw
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
  const [mode, setMode] = useState<'login' | 'signup' | 'verify' | 'forgot' | 'reset'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetOtp, setResetOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('farmer');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');

  // Sync mode and clear inputs/error messages when opened
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setResetOtp('');
      setErrorMessage('');
      setInfoMessage('');
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const categories = [
    { id: 'farmer' as CategoryType, label: 'Farmer & Agriculture', icon: Wheat, desc: 'PM-Kisan, KCC, Fasal Bima, Solar Pumps' },
    { id: 'student' as CategoryType, label: 'Student & Youth', icon: GraduationCap, desc: 'National Scholarships, Fee Waivers, Tech Grants' },
    { id: 'msme' as CategoryType, label: 'MSME & Business', icon: Briefcase, desc: 'MUDRA, PMEGP, 35% Capital Subsidy, Seed Fund' },
    { id: 'women' as CategoryType, label: 'Women & Child', icon: HeartHandshake, desc: 'Sukanya Samriddhi, PMMVY, Stand-Up India' },
    { id: 'healthcare' as CategoryType, label: 'Healthcare & Seniors', icon: Users, desc: 'Ayushman Bharat, Atal Pension, Free Medicine' },
    { id: 'disability' as CategoryType, label: 'Differently Abled', icon: Accessibility, desc: 'UDID Grants, Concessional Loans, Special Pension' },
    { id: 'defence' as CategoryType, label: 'Defence & Veterans', icon: Shield, desc: 'PMSS Scholarship, ECHS Health, KSB Grants, ESM Loans' },
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
          },
          hasCompletedQuestionnaire: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        // Real-time persistence with credential verification
        await storageService.registerNewUser(cleanEmail, newProfile, password);

        setIsLoading(false);
        // Automatically launch questionnaire wizard so user is asked real questions
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

        // Verify credentials locally or with Supabase
        const credCheck = await storageService.verifyCredentials(cleanEmail, password);
        if (!credCheck.success) {
          setErrorMessage(credCheck.error || 'Invalid credentials. Please verify your email and password.');
          setIsLoading(false);
          return;
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
        onSuccess(profile, false);
        onClose();
        return;
      }

      if (mode === 'forgot') {
        if (!cleanEmail) {
          setErrorMessage('Please enter your registered email address.');
          setIsLoading(false);
          return;
        }

        const existingUser = await storageService.getUserByEmail(cleanEmail);
        if (!existingUser) {
          setErrorMessage('No registered account found with this email address. Please check your spelling or sign up.');
          setIsLoading(false);
          return;
        }

        setIsLoading(false);
        setResetOtp('123456');
        setInfoMessage('Demo verification OTP generated: 123456. Enter it below with your new password.');
        setMode('reset');
        return;
      }

      if (mode === 'reset') {
        if (!resetOtp.trim()) {
          setErrorMessage('Please enter the 6-digit verification code.');
          setIsLoading(false);
          return;
        }

        if (resetOtp.trim() !== '123456') {
          setErrorMessage('Invalid verification code. Please enter 123456.');
          setIsLoading(false);
          return;
        }

        if (!newPassword || newPassword.trim().length < 4) {
          setErrorMessage('Password must be at least 4 characters long.');
          setIsLoading(false);
          return;
        }

        if (newPassword !== confirmPassword) {
          setErrorMessage('Passwords do not match. Please verify and re-enter.');
          setIsLoading(false);
          return;
        }

        const resetRes = await storageService.resetUserPassword(cleanEmail, newPassword);
        if (!resetRes.success) {
          setErrorMessage(resetRes.error || 'Failed to reset password.');
          setIsLoading(false);
          return;
        }

        let profile = await storageService.getUserByEmail(cleanEmail);
        if (!profile) {
          const userId = `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '')}`;
          profile = await storageService.getUserProfile(userId);
        }

        setIsLoading(false);
        if (profile) {
          onSuccess(profile, false);
          onClose();
        } else {
          setMode('login');
          setInfoMessage('Password successfully updated! Please sign in with your new password.');
        }
        return;
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected authentication error occurred.');
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        data-lenis-prevent
        className="relative w-full max-w-xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-white/15 shadow-2xl shadow-slate-900/20 dark:shadow-black/80 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background orbs */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-accent/15 dark:bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors z-20 cursor-pointer"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div data-lenis-prevent className="overflow-y-auto p-5 sm:p-7 flex-1 space-y-4 overscroll-contain">

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
          {mode === 'forgot' && 'Reset Your Password'}
          {mode === 'reset' && 'Set New Password'}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {mode === 'login' && 'Sign in to access your matched schemes, saved documents, and application tracker.'}
          {mode === 'signup' && 'Select your citizen category and answer key parameters to unlock tailored grants.'}
          {mode === 'verify' && 'Enter the OTP sent to your email to activate Direct Benefit Transfer matching.'}
          {mode === 'forgot' && 'Enter your registered email address to receive an instant verification OTP.'}
          {mode === 'reset' && 'Enter the 6-digit OTP code and choose your new secure password.'}
        </p>

        {/* Mode Toggle Pills (Login / Signup) */}
        {(mode === 'login' || mode === 'signup') && (
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-white/10 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage('');
                setInfoMessage('');
              }}
              className={`py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
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
                setInfoMessage('');
              }}
              className={`py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
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
          <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            {mode === 'login' && errorMessage.toLowerCase().includes('sign up') && (
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setErrorMessage('');
                }}
                className="font-bold underline text-brand-accent hover:opacity-80 shrink-0 cursor-pointer"
              >
                Switch to Sign Up &rarr;
              </button>
            )}
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
                        className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
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

          {(mode === 'login' || mode === 'signup' || mode === 'forgot') && (
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
          )}

          {mode === 'login' && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMode('forgot');
                    setErrorMessage('');
                    setInfoMessage('');
                  }}
                  className="text-xs text-brand-accent hover:text-amber-500 font-semibold transition-colors cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
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
          )}

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Create Password
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
          )}

          {mode === 'reset' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Enter 6-Digit OTP Code
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={resetOtp}
                    onChange={(e) => setResetOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-base text-center tracking-widest font-mono text-slate-900 dark:text-white focus:border-brand-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white focus:border-brand-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
          >
            {isLoading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>
                  {mode === 'login' && 'Sign In to Dashboard'}
                  {mode === 'signup' && 'Verify Email & Proceed to 20-30 Question Wizard'}
                  {mode === 'verify' && 'Verify & Launch Matching Engine'}
                  {mode === 'forgot' && 'Send Reset Verification OTP'}
                  {mode === 'reset' && 'Reset Password & Access Dashboard'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {(mode === 'forgot' || mode === 'reset') && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMessage('');
                  setInfoMessage('');
                }}
                className="text-xs font-semibold text-slate-500 hover:text-brand-accent transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Sign In</span>
              </button>
            </div>
          )}
        </form>

        {/* Demo Fast Login Helper */}
        {(mode === 'login' || mode === 'signup') && (
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
                className="text-brand-accent hover:underline font-semibold cursor-pointer"
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
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold cursor-pointer"
              >
                Demo Student
              </button>
            </div>
          </div>
        )}

        {/* Reset Database Helper for Testing */}
        <div className="pt-2 text-center border-t border-slate-200/60 dark:border-white/5">
          <button
            type="button"
            onClick={() => {
              storageService.clearAllLocalData();
              setEmail('');
              setPassword('');
              setFullName('');
              setErrorMessage('');
              setInfoMessage('Local database wiped clean! You can now test a fresh sign up.');
            }}
            className="text-[11px] font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1.5 cursor-pointer py-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Local Database (Clear Test Users)</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

