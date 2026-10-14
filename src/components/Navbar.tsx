import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  LogOut, 
  BookmarkCheck, 
  FileEdit, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronDown,
  Sun,
  Moon,
  User
} from 'lucide-react';
import type { UserProfile } from '../types';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  user: UserProfile | null;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenQuestionnaire: () => void;
  onNavigate: (view: 'landing' | 'dashboard' | 'saved' | 'profile') => void;
  onLogout: () => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenAuth,
  onOpenQuestionnaire,
  onNavigate,
  onLogout,
  currentView
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 dark:bg-[#0B0F17]/85 border-b border-slate-200/80 dark:border-white/[0.08] transition-colors">
      {/* Top Notification / Live Ticker Bar */}
      <div className="bg-gradient-to-r from-brand-accent/15 via-emerald-500/10 to-indigo-500/15 dark:from-brand-accent/20 dark:via-emerald-500/15 dark:to-indigo-500/20 border-b border-slate-200/60 dark:border-white/[0.05] py-1.5 px-4 text-center overflow-hidden">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
          <span className="text-brand-accent font-semibold">Live Updates:</span>
          <span className="hidden sm:inline">Union Budget 2026-27 allocations active. Over 350+ Central & State welfare initiatives verified.</span>
          <span className="sm:hidden">350+ Verified Welfare Schemes Active</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => onNavigate(user ? 'dashboard' : 'landing')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-accent via-amber-500 to-emerald-400 p-[2px] shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-accent group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight font-display bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Scheme<span className="text-brand-accent">Sathi</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  INDIA
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Universal Welfare & Grant Engine
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => {
                if (currentView !== 'landing') {
                  onNavigate('landing');
                } else if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(0, { duration: 1.2 });
                }
              }}
              className={`text-sm font-medium transition-colors hover:text-brand-accent cursor-pointer ${
                currentView === 'landing' ? 'text-brand-accent font-semibold' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Overview
            </button>
            
            {user && (
              <>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className={`text-sm font-medium transition-colors hover:text-brand-accent flex items-center gap-1.5 ${
                    currentView === 'dashboard' ? 'text-brand-accent font-semibold' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  Dashboard
                </button>

                <button
                  onClick={() => onNavigate('saved')}
                  className={`text-sm font-medium transition-colors hover:text-brand-accent flex items-center gap-1.5 ${
                    currentView === 'saved' ? 'text-brand-accent font-semibold' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <BookmarkCheck className="w-4 h-4" />
                  Saved Schemes
                </button>
              </>
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-accent dark:hover:text-brand-accent hover:border-brand-accent/40 transition-all shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-45 transition-transform duration-300" />
              )}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand-accent/40 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-accent to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-white max-w-[120px] truncate">
                      {user.fullName || user.email.split('@')[0]}
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 capitalize font-medium">
                      {user.selectedCategory} Category
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl glass-panel border border-slate-200 dark:border-white/15 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95">
                    <div className="px-4 py-2 border-b border-slate-200 dark:border-white/10">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Signed in as</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.email}</p>
                    </div>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        onNavigate('profile');
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 flex items-center gap-2.5"
                    >
                      <User className="w-4 h-4 text-brand-accent" />
                      My Profile & Questions
                    </button>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        onNavigate('dashboard');
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 flex items-center gap-2.5"
                    >
                      <Layers className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      Matched Schemes
                    </button>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        onNavigate('saved');
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 flex items-center gap-2.5"
                    >
                      <BookmarkCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      Bookmarked Schemes
                    </button>

                    <div className="border-t border-slate-200 dark:border-white/10 my-1"></div>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 flex items-center gap-2.5 font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent via-amber-500 to-brand-accent bg-[length:200%_auto] hover:bg-right transition-all text-white text-sm font-bold shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Sign Up Free
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            {user && (
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-9 h-9 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent border border-brand-accent/30"
              >
                <Layers className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0B0F17]/95 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => {
              onNavigate('landing');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 dark:text-slate-200"
          >
            Overview
          </button>
          {user ? (
            <>
              <button
                onClick={() => {
                  onNavigate('dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-brand-accent flex items-center gap-2"
              >
                <Layers className="w-5 h-5" /> Dashboard & Schemes
              </button>
              <button
                onClick={() => {
                  onNavigate('profile');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-cyan-600 dark:text-cyan-400 flex items-center gap-2"
              >
                <User className="w-5 h-5" /> Profile & Eligibility Questions
              </button>
              <button
                onClick={() => {
                  onNavigate('saved');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2"
              >
                <BookmarkCheck className="w-5 h-5" /> Saved Schemes
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-rose-500 flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" /> Log Out
              </button>
            </>
          ) : (
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenAuth('login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-center"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  onOpenAuth('signup');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-accent to-emerald-500 text-white font-bold text-center"
              >
                Sign Up & Check Schemes
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
