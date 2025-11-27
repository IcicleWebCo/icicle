import React, { useState, useEffect, lazy, Suspense } from 'react';
import { supabase } from './lib/supabase';
import { User } from '@supabase/supabase-js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/shared/LoadingSpinner';
import { FEATURE_FLAGS } from './config/features';

const Dashboard = lazy(() => import('./components/Dashboard'));
const AuthModal = lazy(() => import('./components/AuthModal'));

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes (using async block pattern)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        (async () => {
          setUser(session?.user ?? null);
          setLoading(false);
        })();
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowDashboard(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <LoadingSpinner size="md" />
      </div>
    );
  }

  if (showDashboard && user) {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <LoadingSpinner size="md" />
        </div>
      }>
        <Dashboard user={user} onSignOut={handleSignOut} onBack={() => setShowDashboard(false)} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar
        user={user}
        onAuthClick={() => setShowAuth(true)}
        onDashboardClick={() => setShowDashboard(true)}
        onSignOut={handleSignOut}
      />
      <Hero />
      {FEATURE_FLAGS.enableSpecials && <Specials />}
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Contact />
      <Footer />
      
      {showAuth && (
        <Suspense fallback={null}>
          <AuthModal onClose={() => setShowAuth(false)} />
        </Suspense>
      )}
    </div>
  );
}

export default App;