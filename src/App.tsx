import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { ProfileSection } from './components/ProfileSection';
import { AuthModal } from './components/AuthModal';
import { QuestionnaireModal } from './components/QuestionnaireModal';
import { Footer } from './components/Footer';
import type { CategoryType, UserProfile } from './types';
import { supabase, storageService } from './lib/supabase';

export function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'saved' | 'profile'>('landing');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('signup');
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  // Initialize Lenis Smooth Scrolling across the entire website
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  // Sync scroll position on view change
  useEffect(() => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
      (window as any).lenis.resize();
    }
  }, [currentView]);

  // Restore saved session on mount
  useEffect(() => {
    const lastUserId = localStorage.getItem('scheme_sathi_last_user');
    if (lastUserId) {
      storageService.getUserProfile(lastUserId).then((profile) => {
        if (profile) {
          setCurrentUser(profile);
          setCurrentView('dashboard');
        }
      });
    }
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (user: UserProfile, shouldOpenQuestionnaire: boolean) => {
    setCurrentUser(user);
    localStorage.setItem('scheme_sathi_last_user', user.id);
    setIsAuthModalOpen(false);
    setCurrentView('dashboard');

    if (shouldOpenQuestionnaire) {
      setIsQuestionnaireOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      // ignore
    }
    localStorage.removeItem('scheme_sathi_last_user');
    setCurrentUser(null);
    setCurrentView('landing');
  };

  const handleQuestionnaireCompleted = (updatedUser: UserProfile) => {
    setCurrentUser(updatedUser);
    storageService.saveUserProfile(updatedUser.id, updatedUser);
    setIsQuestionnaireOpen(false);
    setCurrentView('dashboard');
  };

  const handleExploreCategory = (category: CategoryType) => {
    if (currentUser) {
      const updated = {
        ...currentUser,
        selectedCategory: category,
        answers: {
          ...currentUser.answers,
          category,
        }
      };
      setCurrentUser(updated);
      storageService.saveUserProfile(currentUser.id, updated);
      setCurrentView('dashboard');
    } else {
      setAuthModalMode('signup');
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-brand-accent selection:text-white transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar
        user={currentUser}
        onOpenAuth={handleOpenAuth}
        onOpenQuestionnaire={() => setCurrentView('profile')}
        onNavigate={(view) => setCurrentView(view)}
        onLogout={handleLogout}
        currentView={currentView}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'landing' || !currentUser ? (
          <LandingPage
            onOpenAuth={handleOpenAuth}
            onExploreCategory={handleExploreCategory}
          />
        ) : currentView === 'profile' ? (
          <ProfileSection
            user={currentUser}
            onUpdateUser={(updated) => setCurrentUser(updated)}
            onNavigate={(view) => setCurrentView(view)}
          />
        ) : (
          <Dashboard
            user={currentUser}
            onOpenQuestionnaire={() => setCurrentView('profile')}
            onUpdateUser={(updated) => setCurrentUser(updated)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        initialMode={authModalMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Comprehensive 25+ Question Wizard */}
      {currentUser && (
        <QuestionnaireModal
          isOpen={isQuestionnaireOpen}
          user={currentUser}
          onClose={() => setIsQuestionnaireOpen(false)}
          onCompleted={handleQuestionnaireCompleted}
        />
      )}
    </div>
  );
}

export default App;
