import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  X, 
  FileText, 
  Image, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Camera, 
  Info,
  Loader2
} from 'lucide-react';
import { SAMPLE_REPORTS } from '../data/sampleReports';

export default function UploadModal({ 
  isOpen, 
  onClose, 
  onStartAnalysis, 
  onSelectSampleReport 
}) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [validationError, setValidationError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
  const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

  const handleValidateAndSelect = (file) => {
    setValidationError('');
    
    // Type validation
    const fileType = file.type.toLowerCase();
    const fileName = file.name.toLowerCase();
    const isPdf = fileType === 'application/pdf' || fileName.endsWith('.pdf');
    const isJpg = fileType === 'image/jpeg' || fileName.endsWith('.jpg') || fileName.endsWith('.jpeg');
    const isPng = fileType === 'image/png' || fileName.endsWith('.png');

    if (!isPdf && !isJpg && !isPng) {
      setValidationError('Unsupported format. Please upload a PDF document or a clear JPG / PNG image.');
      setSelectedFile(null);
      return false;
    }

    // Size validation
    if (file.size > MAX_FILE_SIZE_BYTES) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setValidationError(`File is too large (${sizeMb} MB). Maximum allowed size is 10 MB.`);
      setSelectedFile(null);
      return false;
    }

    setSelectedFile(file);
    return true;
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleValidateAndSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleValidateAndSelect(e.target.files[0]);
    }
  };

  const handleSubmitUpload = () => {
    if (!selectedFile) {
      setValidationError('Please select or drop a valid report file first.');
      return;
    }
    
    // Trigger analysis flow (simulated in demo mode, maps to CBC or matched report)
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      // Pass file metadata and start the simulation
      onStartAnalysis({
        name: selectedFile.name,
        size: `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`,
        type: selectedFile.type
      });
    }, 400);
  };

  const handleSamplePick = (sampleId) => {
    onClose();
    onSelectSampleReport(sampleId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-saathi-100 text-saathi-700 flex items-center justify-center">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Upload Medical Report</h3>
              <p className="text-xs text-slate-500">Supports PDF, JPG, and PNG files up to 10MB</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 rounded-lg p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Drag & Drop Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
              dragActive 
                ? 'border-saathi-500 bg-saathi-50/70 scale-[0.99]' 
                : 'border-slate-300 hover:border-saathi-400 bg-slate-50/50 hover:bg-slate-50'
            }`}
          >
            <input 
              ref={fileInputRef}
              type="file" 
              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              onChange={handleFileChange}
              className="hidden" 
            />

            <div className="w-12 h-12 rounded-full bg-saathi-100/80 text-saathi-600 flex items-center justify-center mx-auto mb-3">
              <UploadCloud className="w-6 h-6" />
            </div>

            <p className="text-sm font-semibold text-slate-800">
              Drag and drop your report here, or <span className="text-saathi-600 underline">browse</span>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Clear scanned PDFs or smartphone photos of printed results
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> PDF</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Image className="w-3.5 h-3.5" /> JPG / JPEG</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Image className="w-3.5 h-3.5" /> PNG</span>
              <span>•</span>
              <span>Max 10MB</span>
            </div>
          </div>

          {/* Selected File Card */}
          {selectedFile && (
            <div className="p-3.5 bg-saathi-50 border border-saathi-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-saathi-600 text-white flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{selectedFile.name}</p>
                  <p className="text-xs text-slate-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for analysis</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(null);
                }}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Validation Error Message */}
          {validationError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Quick Demo Previews */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-saathi-600" />
              <span>Or choose a realistic demo report immediately</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SAMPLE_REPORTS.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleSamplePick(sample.id)}
                  className="p-2.5 text-left rounded-xl border border-slate-200 hover:border-saathi-400 hover:bg-saathi-50/60 transition-all group"
                >
                  <div className="text-xs font-semibold text-slate-800 group-hover:text-saathi-700 truncate">
                    {sample.title.split('(')[0]}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                    {sample.metrics.length} biomarkers • {sample.patient.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Educational notice */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2 text-[11px] text-slate-500 leading-normal">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>Files are processed confidentially in your browser demo session and analyzed strictly for personal education.</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={handleSubmitUpload}
            disabled={!selectedFile || isProcessing}
            className={`px-5 py-2 text-sm font-semibold rounded-xl flex items-center gap-2 transition-all ${
              selectedFile && !isProcessing
                ? 'bg-saathi-600 hover:bg-saathi-700 text-white shadow-md shadow-saathi-600/20'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Preparing...</span>
              </>
            ) : (
              <>
                <span>Explain Report</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
