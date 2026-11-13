import React from 'react';
import { ShieldAlert, X, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function DisclaimerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-amber-500/10 border-b border-amber-200/60 p-5 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">Educational Notice & Medical Disclaimer</h3>
            <p className="text-xs text-amber-800 mt-0.5">Please read before using ReportSaathi</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 rounded-lg p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-slate-600 leading-relaxed max-h-[70vh] overflow-y-auto">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <HeartHandshake className="w-4 h-4 text-saathi-600" />
              <span>Not a Medical Diagnosis</span>
            </div>
            <p className="text-xs text-slate-600">
              ReportSaathi is designed solely for <strong>informational and educational purposes</strong>. It does not provide medical advice, diagnosis, treatment, or clinical prescriptions.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider">Key Principles:</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Always Consult Your Doctor:</strong> Only your licensed healthcare professional can interpret your lab tests in the context of your physical exam, history, and current symptoms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Lab Variations:</strong> Different laboratories use different calibration methods, equipment, and demographic reference ranges. Printed report ranges always take precedence.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>OCR & AI Accuracy:</strong> Blurry scans or poor lighting can introduce text errors. Always double-check digital numbers against your original printed report.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-red-50 text-red-900 rounded-xl border border-red-200 text-xs">
            <strong>Emergency Situation?</strong> If you are experiencing chest pain, difficulty breathing, acute trauma, or severe symptoms, call your local emergency services (e.g. 112/911) or visit an emergency room immediately.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-saathi-600 hover:bg-saathi-700 text-white font-medium text-sm rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-saathi-500/20"
          >
            I Understand & Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
