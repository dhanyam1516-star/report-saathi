import React from 'react';
import { Activity, ShieldAlert, Sparkles, BookOpen, User, LogOut } from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setView, 
  onOpenDisclaimer, 
  onOpenAuth, 
  currentUser, 
  onLogout 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setView('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-saathi-600 to-saathi-400 flex items-center justify-center text-white shadow-md shadow-saathi-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-saathi-600 transition-colors">
                  ReportSaathi
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-saathi-100 text-saathi-700 px-2 py-0.5 rounded-full border border-saathi-200">
                  Demo
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Plain-language medical report explainer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setView('landing')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                currentView === 'landing'
                  ? 'text-saathi-700 bg-saathi-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setView('dashboard')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                currentView === 'dashboard' || currentView === 'results'
                  ? 'text-saathi-700 bg-saathi-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Dashboard
            </button>
            
            {/* Educational Disclaimer Badge */}
            <button
              onClick={onOpenDisclaimer}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors"
              title="Click to view educational disclaimer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Educational Only</span>
            </button>

            {/* Auth Button or User Profile */}
            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-purple-50 border border-purple-200 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                    {currentUser.name ? currentUser.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="text-xs font-semibold text-purple-900 hidden md:block">
                    {currentUser.name}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-sm shadow-purple-500/20 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </nav>

        </div>
      </div>
    </header>
  );
}
