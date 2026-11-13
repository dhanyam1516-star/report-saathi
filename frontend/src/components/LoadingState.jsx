import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2, 
  Activity,
  Heart
} from 'lucide-react';

export default function LoadingState({ fileMeta, onComplete, onCancel }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { title: 'Ingesting document', detail: 'Validating format and scanning layout...' },
    { title: 'Optical Character Recognition (OCR)', detail: 'Extracting biomarker names, numbers, and units...' },
    { title: 'Reference Range Normalization', detail: 'Parsing laboratory reference thresholds...' },
    { title: 'Generating Educational Explanation', detail: 'Translating clinical terminology into plain language...' }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStepIndex(1), 1000);
    const timer2 = setTimeout(() => setCurrentStepIndex(2), 2200);
    const timer3 = setTimeout(() => setCurrentStepIndex(3), 3400);
    const timer4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
        
        {/* Animated Scanner Preview */}
        <div className="relative w-28 h-36 mx-auto bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 flex flex-col justify-between shadow-inner overflow-hidden">
          {/* Animated Green Scanning Line */}
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saathi-500 to-transparent shadow-lg shadow-saathi-500/50 animate-scanline" />
          
          <div className="space-y-1.5 opacity-60">
            <div className="h-2 w-12 bg-slate-300 rounded" />
            <div className="h-1.5 w-16 bg-slate-200 rounded" />
            <div className="h-1.5 w-20 bg-slate-200 rounded" />
          </div>

          <div className="flex items-center justify-center text-saathi-600 my-auto">
            <Activity className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-1 opacity-60">
            <div className="h-1.5 w-14 bg-slate-200 rounded" />
            <div className="h-1.5 w-10 bg-slate-200 rounded" />
          </div>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saathi-50 text-saathi-700 text-xs font-semibold">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-saathi-600" />
            <span>Educational Analysis in Progress</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Simplifying Your Report
          </h2>
          
          <p className="text-xs text-slate-500">
            {fileMeta?.name || 'Lab Report Document'} {fileMeta?.size ? `(${fileMeta.size})` : ''}
          </p>
        </div>

        {/* Step-by-Step Progress Pipeline */}
        <div className="space-y-3 text-left max-w-sm mx-auto">
          {steps.map((step, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div 
                key={step.title}
                className={`p-3 rounded-xl border transition-all flex items-start gap-3 ${
                  isCurrent 
                    ? 'border-saathi-400 bg-saathi-50/70 shadow-sm' 
                    : isDone 
                    ? 'border-slate-200 bg-slate-50 opacity-80' 
                    : 'border-slate-100 bg-white opacity-40'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-saathi-600 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300" />
                  )}
                </div>
                <div>
                  <p className={`text-xs font-bold ${isCurrent ? 'text-saathi-900' : 'text-slate-700'}`}>
                    {step.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance & Cancel */}
        <div className="pt-2">
          <button
            onClick={onCancel}
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            Cancel and return to dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
