import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import UploadModal from './components/UploadModal';
import LoadingState from './components/LoadingState';
import ResultsPage from './components/ResultsPage';
import DisclaimerModal from './components/DisclaimerModal';
import AuthModal from './components/auth/AuthModal';
import { SAMPLE_REPORTS } from './data/sampleReports';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'dashboard' | 'loading' | 'results'
  const [reports, setReports] = useState(SAMPLE_REPORTS);
  const [activeReport, setActiveReport] = useState(SAMPLE_REPORTS[0]);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [uploadingMeta, setUploadingMeta] = useState(null);

  // User state (persisted in localStorage)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('reportsaathi_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLoginSuccess = (userObj) => {
    setCurrentUser(userObj);
    try {
      localStorage.setItem('reportsaathi_user', JSON.stringify(userObj));
    } catch {}
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('reportsaathi_user');
    } catch {}
  };

  // Navigation handlers
  const handleGetStarted = () => {
    setCurrentView('dashboard');
    setIsUploadOpen(true);
  };

  const handleSelectSampleById = (sampleId) => {
    const found = SAMPLE_REPORTS.find(r => r.id === sampleId) || SAMPLE_REPORTS[0];
    setActiveReport(found);
    setCurrentView('results');
  };

  const handleSelectReport = (report) => {
    setActiveReport(report);
    setCurrentView('results');
  };

  const handleDeleteReport = (reportId) => {
    setReports(prev => prev.filter(r => r.id !== reportId));
    if (activeReport?.id === reportId) {
      setActiveReport(SAMPLE_REPORTS[0]);
    }
  };

  // Upload simulation flow
  const handleStartAnalysis = (fileMeta) => {
    setUploadingMeta(fileMeta);
    setCurrentView('loading');
  };

  const handleAnalysisComplete = () => {
    const newReport = {
      ...SAMPLE_REPORTS[0],
      id: `upload-${Date.now()}`,
      title: `Uploaded Lab Analysis (${uploadingMeta?.name || 'Document'})`,
      fileName: uploadingMeta?.name || 'Uploaded_Report.pdf',
      fileSize: uploadingMeta?.size || '1.8 MB',
      testDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    setReports(prev => [newReport, ...prev]);
    setActiveReport(newReport);
    setCurrentView('results');
  };

  const handleCancelLoading = () => {
    setUploadingMeta(null);
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-saathi-100 selection:text-saathi-900">
      
      {/* Persistent Navigation */}
      <Navbar 
        currentView={currentView}
        setView={setCurrentView}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'landing' && (
          <LandingPage 
            onGetStarted={handleGetStarted}
            onSelectDemoReport={handleSelectSampleById}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard 
            onOpenUpload={() => setIsUploadOpen(true)}
            reports={reports}
            onSelectReport={handleSelectReport}
            onDeleteReport={handleDeleteReport}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
            currentUser={currentUser}
            onOpenAuth={() => setIsAuthOpen(true)}
          />
        )}

        {currentView === 'loading' && (
          <LoadingState 
            fileMeta={uploadingMeta}
            onComplete={handleAnalysisComplete}
            onCancel={handleCancelLoading}
          />
        )}

        {currentView === 'results' && (
          <ResultsPage 
            report={activeReport}
            onBack={() => setCurrentView('dashboard')}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <p className="font-semibold text-slate-700">
          ReportSaathi • Educational Medical Report Explainer
        </p>
        <p className="max-w-2xl mx-auto text-slate-400">
          Built for patient education and health literacy. Not intended for clinical diagnosis. Always consult with a certified healthcare provider.
        </p>
      </footer>

      {/* Upload Modal */}
      <UploadModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onStartAnalysis={handleStartAnalysis}
        onSelectSampleReport={handleSelectSampleById}
      />

      {/* Educational Disclaimer Modal */}
      <DisclaimerModal 
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* 3D Pastel Auth Modal (From User UI Design) */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
