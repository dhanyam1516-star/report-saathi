import React from 'react';
import { 
  UploadCloud, 
  FileText, 
  Sparkles, 
  Calendar, 
  ArrowUpRight, 
  Trash2, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  FolderPlus, 
  ShieldCheck, 
  ChevronRight,
  User,
  CloudCheck,
  Lock
} from 'lucide-react';
import { SAMPLE_REPORTS } from '../data/sampleReports';

export default function Dashboard({ 
  onOpenUpload, 
  reports, 
  onSelectReport, 
  onDeleteReport,
  onOpenDisclaimer,
  currentUser,
  onOpenAuth
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Educational Notice Banner */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-900">Educational Health Literacy Companion</h4>
            <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed">
              ReportSaathi helps you understand medical terminology. It is <strong>never</strong> a substitute for professional diagnosis or clinical consultation with a qualified doctor.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenDisclaimer}
          className="text-xs font-semibold text-amber-900 hover:text-amber-950 underline shrink-0"
        >
          Read Policy
        </button>
      </div>

      {/* User Greeting / Auth Banner */}
      {currentUser ? (
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 border border-purple-200/60 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 to-purple-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
              {currentUser.name ? currentUser.name[0].toUpperCase() : 'U'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900">
                  Welcome back, {currentUser.name}!
                </h3>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  History Synced
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{currentUser.email}</p>
            </div>
          </div>
          <span className="text-xs text-purple-700 font-medium hidden sm:block">
            {reports.length} Reports in your health record
          </span>
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />
            <span>Currently using <strong>Guest Mode</strong>. Sign in to save your lab history across sessions.</span>
          </div>
          <button
            onClick={onOpenAuth}
            className="text-xs font-bold text-purple-600 hover:text-purple-800 underline shrink-0"
          >
            Sign In / Register
          </button>
        </div>
      )}

      {/* Top Header & Main Upload CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Medical Reports Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review simplified lab summaries, biomarker indicators, and questions for your doctor.
          </p>
        </div>

        <button
          onClick={onOpenUpload}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-saathi-600 hover:bg-saathi-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-saathi-600/20 transition-all hover:-translate-y-0.5"
        >
          <UploadCloud className="w-4 h-4" />
          <span>Upload New Report</span>
        </button>
      </div>

      {/* Interactive Demo Cards (Quick Start) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-saathi-600" />
            <span>Interactive Demo Reports</span>
          </h2>
          <span className="text-xs text-slate-400">Instant realistic sample data</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_REPORTS.map((sample) => (
            <div
              key={sample.id}
              onClick={() => onSelectReport(sample)}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-saathi-400 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-saathi-700 bg-saathi-50 border border-saathi-200 px-2.5 py-0.5 rounded-full">
                    {sample.patient.name} ({sample.patient.age}y, {sample.patient.gender})
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {sample.testDate}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-saathi-600 transition-colors">
                  {sample.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{sample.labName}</p>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {sample.summary.headline}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-saathi-600 group-hover:text-saathi-700">
                <span>{sample.metrics.length} Biomarkers Analyzed</span>
                <div className="flex items-center gap-1">
                  <span>View Explanation</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Uploaded Reports Section */}
      <div className="space-y-4 pt-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-slate-500" />
          <span>Active Session Reports</span>
        </h2>

        {reports.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-saathi-50 text-saathi-600 flex items-center justify-center mx-auto shadow-inner">
              <FolderPlus className="w-8 h-8" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-slate-800">No Custom Reports Added Yet</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Upload your blood test, lipid panel, or thyroid report (PDF, JPG, PNG) to see an educational plain-language breakdown.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenUpload}
                className="w-full sm:w-auto px-5 py-2.5 bg-saathi-600 hover:bg-saathi-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
              >
                Upload First Report
              </button>
              <button
                onClick={() => onSelectReport(SAMPLE_REPORTS[0])}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all"
              >
                Load Sample CBC
              </button>
            </div>
          </div>
        ) : (
          /* Report List */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
            {reports.map((report) => (
              <div 
                key={report.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
              >
                <div 
                  className="flex items-start gap-4 cursor-pointer flex-1"
                  onClick={() => onSelectReport(report)}
                >
                  <div className="w-10 h-10 rounded-xl bg-saathi-100 text-saathi-700 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-slate-900 hover:text-saathi-600 transition-colors">
                        {report.title}
                      </h4>
                      {report.summary?.overallStatus === 'normal' && (
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          All Normal
                        </span>
                      )}
                      {report.summary?.overallStatus === 'borderline' && (
                        <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                          Review Needed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span>{report.labName}</span>
                      <span>•</span>
                      <span>{report.testDate}</span>
                      <span>•</span>
                      <span>{report.metrics?.length || 0} biomarkers</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => onSelectReport(report)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-saathi-700 bg-saathi-50 hover:bg-saathi-100 border border-saathi-200 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Open Results</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onDeleteReport(report.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove from session"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
