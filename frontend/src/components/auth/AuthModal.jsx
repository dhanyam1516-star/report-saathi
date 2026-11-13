import React, { useState } from 'react';
import { 
  X, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Sparkles,
  TreePine,
  Palette
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  // Theme toggle: 'glass' (forest glassmorphic - latest reference) | 'pastel' (claymorphic 3D)
  const [theme, setTheme] = useState('glass');
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup' | 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (authMode === 'login') {
      if (!formData.username || !formData.password) {
        setErrorMessage('Please enter your email or username and password.');
        return;
      }
    } else if (authMode === 'signup') {
      if (!formData.email || !formData.password) {
        setErrorMessage('Please fill in all required fields.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }
    }

    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      const userObj = {
        name: formData.username || (formData.email ? formData.email.split('@')[0] : 'Rohan Sharma'),
        email: formData.email || (formData.username.includes('@') ? formData.username : 'rohan@example.com'),
        theme: theme
      };
      if (onLoginSuccess) {
        onLoginSuccess(userObj);
      }
      onClose();
    }, 700);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const userObj = {
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`,
        provider: provider
      };
      if (onLoginSuccess) {
        onLoginSuccess(userObj);
      }
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      {/* Background Forest Image (for Glassmorphism Theme) */}
      {theme === 'glass' && (
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 mix-blend-overlay filter blur-xs"
          style={{ backgroundImage: `url('/forest-bg.jpg')` }}
        />
      )}

      {/* Floating Theme Switcher Pill */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white shadow-lg">
        <button
          onClick={() => setTheme('glass')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
            theme === 'glass' 
              ? 'bg-emerald-600/90 text-white shadow-sm' 
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <TreePine className="w-3.5 h-3.5" />
          <span>Frosted Glass</span>
        </button>
        <button
          onClick={() => setTheme('pastel')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
            theme === 'pastel' 
              ? 'bg-purple-500/90 text-white shadow-sm' 
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Pastel 3D</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* THEME 1: FROSTED GLASS / FOREST GLASSMORPHISM (Pinterest Ref) */}
      {/* ============================================================== */}
      {theme === 'glass' && (
        <div 
          className="relative w-full max-w-[420px] my-auto bg-gradient-to-b from-white/25 via-white/15 to-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-8 sm:p-10 space-y-6 text-slate-900 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-slate-800 flex items-center justify-center transition-all border border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header: Bold uppercase "LOGIN" */}
          <div className="pt-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 uppercase">
              {authMode === 'login' ? 'LOGIN' : authMode === 'signup' ? 'SIGN UP' : 'RESET'}
            </h2>
            <p className="text-xs text-slate-700/80 font-medium mt-1">
              ReportSaathi • Health History & Accounts
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-950 text-xs rounded-2xl text-center font-semibold backdrop-blur-xs">
              {errorMessage}
            </div>
          )}

          {/* Glass Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            
            {/* Username / Email Field */}
            <div>
              <input
                type={authMode === 'signup' ? 'email' : 'text'}
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Email or username"
                className="w-full px-5 py-4 bg-white/20 hover:bg-white/25 focus:bg-white/30 border border-white/30 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-all"
              />
            </div>

            {/* Password Field */}
            {authMode !== 'forgot' && (
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-5 pr-11 py-4 bg-white/20 hover:bg-white/25 focus:bg-white/30 border border-white/30 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-600 hover:text-slate-900"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            )}

            {/* Confirm Password (Signup only) */}
            {authMode === 'signup' && (
              <div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full px-5 py-4 bg-white/20 hover:bg-white/25 focus:bg-white/30 border border-white/30 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-all"
                />
              </div>
            )}

            {/* Forgot password link */}
            {authMode === 'login' && (
              <div className="flex justify-end pt-0.5">
                <button
                  type="button"
                  onClick={() => setAuthMode('forgot')}
                  className="text-xs font-medium text-slate-700 hover:text-slate-950 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Action Pill Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 active:scale-[0.98] text-white font-bold text-sm shadow-[0_10px_20px_rgba(0,0,0,0.25)] border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? 'Authenticating...' : authMode === 'login' ? 'Continue' : 'Sign Up'}
            </button>
          </form>

          {/* Centered OR Divider */}
          {authMode !== 'forgot' && (
            <div className="space-y-4 pt-1">
              <div className="text-center text-xs font-bold text-slate-600 tracking-wider">
                OR
              </div>

              {/* Social Login Circles (Google, Facebook, Twitter) */}
              <div className="flex items-center justify-center gap-4">
                {/* Google */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="w-11 h-11 rounded-full bg-white/80 hover:bg-white border border-white/40 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="Sign in with Google"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="w-11 h-11 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="Sign in with Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                {/* Twitter / X */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Twitter')}
                  className="w-11 h-11 rounded-full bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
                  title="Sign in with Twitter"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>

              {/* Bottom toggle */}
              <div className="text-center pt-2 text-xs text-slate-700">
                {authMode === 'login' ? (
                  <span>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('signup')}
                      className="font-bold text-slate-900 underline"
                    >
                      Sign Up
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('login')}
                      className="font-bold text-slate-900 underline"
                    >
                      Login
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* THEME 2: 3D PASTEL CLAYMORPHIC (Previous Reference)            */}
      {/* ============================================================== */}
      {theme === 'pastel' && (
        <div 
          className="relative w-full max-w-[420px] my-auto bg-gradient-to-b from-[#f3e8ff]/90 via-white to-[#fdf4ff] rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(168,85,247,0.3)] border-2 border-white/90 overflow-hidden text-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-400 hover:text-slate-700 flex items-center justify-center shadow-sm transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative pt-6 pb-2 px-6 flex flex-col items-center justify-center">
            <div className="w-28 h-28 rounded-3xl p-1 bg-white/90 shadow-[0_12px_28px_rgba(192,132,252,0.35)] overflow-hidden border-2 border-white">
              <img 
                src="/login-art.jpg" 
                alt="Welcome character" 
                className="w-full h-full object-cover object-top rounded-[1.25rem]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-extrabold rounded-[1.25rem]">RS</div>';
                }}
              />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mt-3">Welcome Back!</h2>
            <p className="text-xs text-purple-700/80 font-medium">Login to continue</p>
          </div>

          <div className="px-8 pb-8 pt-2 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username / Email"
                className="w-full px-4 py-3.5 bg-white border border-purple-100 rounded-2xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3.5 bg-white border border-purple-100 rounded-2xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold text-sm shadow-md"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
