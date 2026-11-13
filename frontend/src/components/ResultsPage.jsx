import React, { useState } from 'react';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowLeft, 
  Printer, 
  Share2, 
  HelpCircle, 
  Stethoscope, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Calendar,
  Building,
  User,
  CheckSquare,
  Square,
  ShieldCheck,
  Eye,
  FileCode
} from 'lucide-react';

export default function ResultsPage({ report, onBack, onOpenDisclaimer }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'flagged' | 'normal'
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const [showRawText, setShowRawText] = useState(false);
  const [expandedMetricId, setExpandedMetricId] = useState(null);

  if (!report) return null;

  const toggleQuestion = (idx) => {
    setCheckedQuestions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredMetrics = report.metrics.filter(m => {
    if (activeFilter === 'flagged') return m.status === 'low' || m.status === 'high';
    if (activeFilter === 'normal') return m.status === 'normal';
    return true;
  });

  const flaggedCount = report.metrics.filter(m => m.status === 'low' || m.status === 'high').length;
  const normalCount = report.metrics.filter(m => m.status === 'normal').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'normal':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Normal</span>
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Below Range</span>
          </span>
        );
      case 'high':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Above Range</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print:p-0 print:space-y-4">
      
      {/* Top Bar Actions (Hidden in Print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print for Doctor Visit</span>
          </button>

          <button
            onClick={() => setShowRawText(!showRawText)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-saathi-700 bg-saathi-50 hover:bg-saathi-100 border border-saathi-200 rounded-xl transition-colors"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>{showRawText ? 'Hide Raw OCR Text' : 'View Extracted Text'}</span>
          </button>
        </div>
      </div>

      {/* Mandatory Medical Disclaimer Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-4 sm:p-5 shadow-sm space-y-1">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Medical Education Disclaimer</span>
        </div>
        <p className="text-xs text-amber-800 leading-relaxed">
          This explanation is generated for <strong>educational reference only</strong>. It does not constitute medical advice or a diagnosis. Reference ranges vary across laboratories. Please consult your physician with these results.
        </p>
      </div>

      {/* Report Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-saathi-600 bg-saathi-50 px-2.5 py-1 rounded-md border border-saathi-200">
              Diagnostic Report Overview
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              {report.title}
            </h1>
            <p className="text-xs text-slate-500 flex items-center gap-2 mt-1">
              <Building className="w-3.5 h-3.5" />
              <span>{report.labName}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>Conducted: {report.testDate}</span>
            </p>
          </div>

          {/* Patient Badge */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:text-right shrink-0">
            <div className="flex items-center sm:justify-end gap-2 text-xs font-bold text-slate-800">
              <User className="w-4 h-4 text-slate-500" />
              <span>{report.patient.name}</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {report.patient.age} yrs • {report.patient.gender} • ID: {report.patient.patientId}
            </p>
          </div>
        </div>

        {/* Plain Language Summary Box */}
        <div className="bg-gradient-to-br from-saathi-50/70 to-slate-50 rounded-2xl p-5 sm:p-6 border border-saathi-100 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saathi-800">
            <Sparkles className="w-4 h-4 text-saathi-600" />
            <span>Plain-Language Summary</span>
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            {report.summary.headline}
          </h2>

          <p className="text-sm text-slate-700 leading-relaxed">
            {report.summary.plainLanguageOverview}
          </p>

          {/* Biomarker Stats Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 bg-white font-medium text-slate-700 rounded-lg border border-slate-200 shadow-2xs">
              Total Parameters: <strong>{report.metrics.length}</strong>
            </span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-medium rounded-lg border border-emerald-200">
              Within Normal Range: <strong>{normalCount}</strong>
            </span>
            {flaggedCount > 0 && (
              <span className="px-3 py-1 bg-amber-50 text-amber-800 font-medium rounded-lg border border-amber-200">
                Outside Reference Range: <strong>{flaggedCount}</strong>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Raw OCR Text Drawer (Optional View) */}
      {showRawText && (
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-lg border border-slate-800 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <FileCode className="w-4 h-4 text-saathi-400" />
              <span>Simulated OCR Extraction Output (For Verification)</span>
            </div>
            <span className="text-[10px] text-slate-400">Phase 2 Backend Extraction Preview</span>
          </div>
          <pre className="text-xs text-slate-300 overflow-x-auto p-2 bg-slate-950 rounded-lg font-mono leading-relaxed max-h-56">
{`--- RAW EXTRACTED TEXT FROM ${report.fileName || 'SAMPLE'} ---
LAB: ${report.labName}
DATE: ${report.testDate}
PATIENT: ${report.patient.name} | AGE: ${report.patient.age} | GENDER: ${report.patient.gender}
${report.metrics.map(m => `${m.name.padEnd(35)} : ${String(m.value).padEnd(8)} ${m.unit.padEnd(14)} [Ref: ${m.referenceRange}]`).join('\n')}
--- END OF EXTRACTION ---`}
          </pre>
        </div>
      )}

      {/* Biomarker Breakdown Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Biomarker Analysis & Plain Meanings</h2>
            <p className="text-xs text-slate-500 mt-0.5">Click any biomarker to expand in-depth educational guidance</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({report.metrics.length})
            </button>
            <button
              onClick={() => setActiveFilter('flagged')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'flagged'
                  ? 'bg-white text-amber-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Outside Range ({flaggedCount})
            </button>
            <button
              onClick={() => setActiveFilter('normal')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'normal'
                  ? 'bg-white text-emerald-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Normal ({normalCount})
            </button>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredMetrics.map((metric) => {
            const isExpanded = expandedMetricId === metric.id;

            return (
              <div
                key={metric.id}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  metric.status !== 'normal' 
                    ? 'border-amber-200/90 shadow-sm' 
                    : 'border-slate-200'
                }`}
              >
                {/* Main Card Header Row */}
                <div 
                  onClick={() => setExpandedMetricId(isExpanded ? null : metric.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-base font-bold text-slate-900">
                        {metric.name}
                      </h3>
                      {getStatusBadge(metric.status)}
                      <span className="text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                        {metric.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal line-clamp-1">
                      {metric.plainMeaning}
                    </p>
                  </div>

                  {/* Value and Reference Range Pill */}
                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <div className="text-right">
                      <div className="flex items-baseline gap-1 justify-end">
                        <span className={`text-xl font-extrabold ${
                          metric.status === 'normal' ? 'text-slate-900' : 'text-amber-700'
                        }`}>
                          {metric.value}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{metric.unit}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Normal: {metric.referenceRange}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Educational Insight */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3.5 text-xs text-slate-700 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* What this test means */}
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                        <p className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Info className="w-4 h-4 text-saathi-600" />
                          <span>What this measures:</span>
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {metric.plainMeaning}
                        </p>
                      </div>

                      {/* Why it matters */}
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                        <p className="font-bold text-slate-900 flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-teal-600" />
                          <span>Why this matters:</span>
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {metric.whyItMatters}
                        </p>
                      </div>
                    </div>

                    {/* Discussion Question */}
                    {metric.recommendationQuestion && (
                      <div className="p-3 bg-saathi-50 border border-saathi-200/80 rounded-xl flex items-start gap-2.5">
                        <Stethoscope className="w-4 h-4 text-saathi-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-saathi-900 block font-semibold">Doctor Discussion Prompt:</strong>
                          <span className="text-saathi-800">{metric.recommendationQuestion}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Questions for Your Doctor Checklist */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
              <Stethoscope className="w-3.5 h-3.5 text-indigo-600" />
              <span>Doctor Consultation Guide</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Recommended Questions to Ask Your Physician
            </h2>
            <p className="text-xs text-slate-500">
              Check off questions as you prepare for your consultation. You can print or carry these to your visit.
            </p>
          </div>
        </div>

        <div className="space-y-2.5 pt-1">
          {report.doctorQuestions.map((question, idx) => {
            const isChecked = !!checkedQuestions[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleQuestion(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked 
                    ? 'border-indigo-300 bg-indigo-50/50 line-through opacity-75' 
                    : 'border-slate-200 hover:border-indigo-200 hover:bg-slate-50/60 bg-white'
                }`}
              >
                <div className="mt-0.5 shrink-0 text-indigo-600">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${isChecked ? 'text-slate-500' : 'text-slate-800 font-medium'}`}>
                  {question}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation Back */}
      <div className="pt-4 flex items-center justify-between text-xs text-slate-500 print:hidden">
        <span>ReportSaathi Educational Lab Companion</span>
        <button
          onClick={onBack}
          className="text-saathi-600 hover:text-saathi-700 font-semibold"
        >
          Return to Dashboard
        </button>
      </div>

    </div>
  );
}
