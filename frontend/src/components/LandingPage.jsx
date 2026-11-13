import React from 'react';
import { 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  HelpCircle,
  FileSearch,
  BookOpenCheck,
  Stethoscope
} from 'lucide-react';

export default function LandingPage({ onGetStarted, onSelectDemoReport }) {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-16 text-center max-w-4xl mx-auto px-4">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saathi-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Educational Purpose Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saathi-100/80 border border-saathi-200 text-saathi-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <BookOpenCheck className="w-4 h-4 text-saathi-600" />
          <span>Patient Education & Health Literacy Assistant</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Understand your lab reports in <span className="bg-gradient-to-r from-saathi-600 to-teal-600 bg-clip-text text-transparent">simple, clear language</span>.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Medical reports are filled with intimidating numbers and acronyms. <strong>ReportSaathi</strong> translates complex diagnostic data into plain explanations, empowering you to have confident, well-informed conversations with your doctor.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-7 py-3.5 bg-saathi-600 hover:bg-saathi-700 text-white font-semibold text-base rounded-xl shadow-lg shadow-saathi-600/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
          >
            <span>Upload Your Report</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onSelectDemoReport('cbc-01')}
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base rounded-xl border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-saathi-600" />
            <span>Explore Demo CBC Report</span>
          </button>
        </div>

        {/* Quick Highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>PDF & Photo OCR Support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Plain English Interpretations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Doctor Discussion Checklist</span>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How ReportSaathi Works</h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Designed to bridge the communication gap between pathology printouts and patient understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-saathi-100 text-saathi-700 flex items-center justify-center font-bold text-lg mb-6 shadow-inner">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Upload Your Lab Sheet</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Upload a digital PDF from your pathology provider or snap a clear photo (JPG, PNG) of your printed lab test results.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg mb-6 shadow-inner">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Extraction & Simplification</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Text extraction and AI identify values, compare them with your lab's exact reference ranges, and translate jargon into plain English.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-6 shadow-inner">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Ask Informed Questions</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Get an organized summary and a personalized list of thoughtful questions to bring to your next medical appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Pillar & Ethics Notice */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-saathi-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-saathi-300 text-xs font-semibold">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Doctor-Centered Collaboration</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              An Educational Companion, Not a Clinical Substitute
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Numbers out of range often look terrifying on paper, even when they represent harmless everyday fluctuations or easily treatable deficiencies. ReportSaathi eliminates needless panic by explaining what each biomarker actually does, helping you arrive at the clinic informed and at ease.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onSelectDemoReport('lipid-02')}
                className="px-5 py-2.5 bg-saathi-500 hover:bg-saathi-400 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Try Lipid Profile Demo
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
