import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface NavbarProps {
  user: SupabaseUser | null;
  onAuthClick: () => void;
  onDashboardClick: () => void;
  onSignOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onAuthClick, onDashboardClick, onSignOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo
          <img id="logo" src="./images/IcicleLogoTransparent.svg" alt="Icicle Logo" class="w-auto h-16"/>
          */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">icicle web co.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors px-3 py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-300 hover:text-white transition-colors px-3 py-2">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors px-3 py-2">
                Process
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors px-3 py-2">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors px-3 py-2">
                Contact
              </button>
            </div>
          </div>

          {/* Auth/User Menu */}
          {/* <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onDashboardClick}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Sign In
              </button>
            )}
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-md">
            <button onClick={() => scrollToSection('services')} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('process')} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
              Contact
            </button>
            {/*{user ? (
              <>
                <button onClick={onDashboardClick} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
                  Dashboard
                </button>
                <button onClick={onSignOut} className="block text-slate-300 hover:text-white px-3 py-2 w-full text-left">
                  Sign Out
                </button>
              </>
            ) : (
              <button onClick={onAuthClick} className="block w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-medium mx-3 mt-2">
                Sign In
              </button>
            )} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;