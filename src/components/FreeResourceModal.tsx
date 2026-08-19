import React, { useState } from 'react';
import { FreeResource } from '../types';
import { 
  Download, 
  X, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface FreeResourceModalProps {
  resource: FreeResource | null;
  onClose: () => void;
}

export const FreeResourceModal: React.FC<FreeResourceModalProps> = ({
  resource,
  onClose
}) => {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!resource) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloaded(true);
  };

  const handleReset = () => {
    setDownloaded(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#14171E] border border-[#C99A3E]/40 rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative space-y-5">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#9B9B9B] hover:text-white hover:bg-[#202530] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#1E232B] border border-[#C99A3E]/30 flex items-center justify-center text-[#E5C36A] shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#E5C36A] uppercase tracking-wider bg-[#C99A3E]/15 px-2 py-0.5 rounded border border-[#C99A3E]/30">
                  {resource.tag}
                </span>
                <h3 className="text-base font-bold text-white font-serif mt-1 leading-snug">
                  {resource.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#9B9B9B] leading-relaxed">
              {resource.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#101216] border border-[#C99A3E]/20 text-xs text-[#D1D5DB] space-y-1">
              <div className="flex justify-between">
                <span className="text-[#9B9B9B]">Format:</span>
                <span className="font-semibold text-white">{resource.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9B9B9B]">Size/Count:</span>
                <span className="font-semibold text-[#E5C36A]">{resource.pagesOrCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9B9B9B]">Edition:</span>
                <span className="font-semibold text-white">{resource.updatedDate}</span>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#E0E0E0] mb-1">
                  Enter your email to receive PDF download link:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9B9B9B] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="aspirant@judicialprep.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#161920] border border-[#C99A3E]/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-[#707070] focus:outline-none focus:border-[#C99A3E]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C99A3E] via-[#E5C36A] to-[#C99A3E] text-[#101214] font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Instant PDF Download (Free)</span>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white font-serif">
                Download Initialized!
              </h4>
              <p className="text-xs text-[#9B9B9B] mt-1">
                Your PDF copy of <span className="text-white font-medium">{resource.title}</span> has been dispatched to <span className="text-[#E5C36A] font-mono">{email}</span>.
              </p>
            </div>

            <div className="p-3 bg-[#101216] rounded-xl border border-[#C99A3E]/30 text-xs text-[#E5C36A] font-medium">
              Check your inbox & spam folder for the instant download link.
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl bg-[#C99A3E] text-[#101214] font-bold text-xs cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
