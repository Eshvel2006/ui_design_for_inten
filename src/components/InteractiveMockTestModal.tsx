import React, { useState, useEffect } from 'react';
import { SAMPLE_MOCK_QUESTIONS } from '../data/judiciaryData';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Timer, 
  Award, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Scale, 
  X,
  FileCheck2
} from 'lucide-react';

interface InteractiveMockTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCounselling: () => void;
}

export const InteractiveMockTestModal: React.FC<InteractiveMockTestModalProps> = ({
  isOpen,
  onClose,
  onOpenCounselling
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins in seconds

  useEffect(() => {
    if (!isOpen) {
      // Reset state on close
      setCurrentQIndex(0);
      setSelectedAnswers({});
      setSubmitted(false);
      setTimeLeft(300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, submitted]);

  if (!isOpen) return null;

  const currentQ = SAMPLE_MOCK_QUESTIONS[currentQIndex];

  const handleSelectOption = (optIndex: number) => {
    if (submitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optIndex,
    });
  };

  const handleNext = () => {
    if (currentQIndex < SAMPLE_MOCK_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    SAMPLE_MOCK_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return {
      correct,
      total: SAMPLE_MOCK_QUESTIONS.length,
      percentage: Math.round((correct / SAMPLE_MOCK_QUESTIONS.length) * 100),
    };
  };

  const scoreResult = calculateScore();
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#14171E] border border-[#C99A3E]/40 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col justify-between">
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[#C99A3E]/20 flex items-center justify-between bg-[#101216] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D222A] border border-[#C99A3E]/30 flex items-center justify-center text-[#E5C36A]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">
                All-India Judiciary Diagnostic Mock Test
              </h3>
              <p className="text-xs text-[#9B9B9B]">
                High-Yield Questions • BNS, CPC, Constitution & Evidence Law
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!submitted && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1D222A] border border-[#C99A3E]/30 text-xs font-mono text-[#E5C36A]">
                <Timer className="w-4 h-4 text-[#C99A3E]" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#9B9B9B] hover:text-white hover:bg-[#202530] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {!submitted ? (
            <>
              {/* Question Index Navigator */}
              <div className="flex items-center justify-between gap-2 border-b border-[#C99A3E]/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#E5C36A] uppercase tracking-wider">
                    Question {currentQIndex + 1} of {SAMPLE_MOCK_QUESTIONS.length}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1D222A] text-[#9B9B9B] border border-[#C99A3E]/15">
                    {currentQ.subject}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {SAMPLE_MOCK_QUESTIONS.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        currentQIndex === idx
                          ? 'bg-[#C99A3E] text-[#101214] ring-2 ring-[#E5C36A]'
                          : selectedAnswers[q.id] !== undefined
                          ? 'bg-[#1D2430] text-[#E5C36A] border border-[#C99A3E]/30'
                          : 'bg-[#181B22] text-[#808080]'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed font-sans">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, optIndex) => {
                  const isSelected = selectedAnswers[currentQ.id] === optIndex;
                  const optionLetters = ['(A)', '(B)', '(C)', '(D)'];

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleSelectOption(optIndex)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1F2633] border-[#C99A3E] text-white shadow-lg shadow-[#C99A3E]/10 ring-1 ring-[#C99A3E]'
                          : 'bg-[#161920] border-[#C99A3E]/20 text-[#D1D5DB] hover:bg-[#1A1E27] hover:border-[#C99A3E]/40'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-[#C99A3E] text-[#101214]' : 'bg-[#101214] text-[#A0A0A0] border border-[#C99A3E]/20'
                      }`}>
                        {optionLetters[optIndex]}
                      </span>
                      <span className="text-sm font-medium leading-relaxed pt-0.5">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Nav Buttons */}
              <div className="pt-6 border-t border-[#C99A3E]/20 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentQIndex === 0}
                  className="px-4 py-2 rounded-lg bg-[#1A1E26] text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222834]"
                >
                  ← Previous
                </button>

                {currentQIndex < SAMPLE_MOCK_QUESTIONS.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-lg bg-[#1F2430] hover:bg-[#262D3C] text-[#E5C36A] border border-[#C99A3E]/40 text-xs font-bold transition-all"
                  >
                    Next Question →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitTest}
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#C99A3E] to-[#E5C36A] text-[#101214] text-xs font-bold shadow-lg hover:brightness-110"
                  >
                    Submit Test & View Rationale
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results & Answer Explanations View */
            <div className="space-y-6 animate-fadeIn">
              {/* Score card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1E27] to-[#12151B] border border-[#C99A3E] text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#C99A3E]/20 border border-[#C99A3E] text-[#E5C36A] mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white font-serif">
                  Diagnostic Performance Summary
                </h4>
                <div className="flex justify-center items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-gold-gradient">
                    {scoreResult.correct} / {scoreResult.total}
                  </span>
                  <span className="text-sm text-[#9B9B9B]">
                    ({scoreResult.percentage}% Accuracy)
                  </span>
                </div>
                <p className="text-xs text-[#B0B3BC] max-w-md mx-auto">
                  {scoreResult.percentage >= 80 
                    ? 'Excellent judicial foundation! You are on track for top-tier State PCS (J) ranks.' 
                    : scoreResult.percentage >= 50 
                    ? 'Good foundational grasp. Strengthening Bare Act Section citations and exceptions will boost your score.'
                    : 'Recommended: Revisit core procedural laws (CPC & BNSS) with our structured Foundation course.'}
                </p>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedAnswers({});
                      setCurrentQIndex(0);
                    }}
                    className="px-4 py-2 rounded-lg bg-[#121418] border border-[#C99A3E]/30 text-xs font-semibold text-[#E5C36A] flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake Test
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCounselling();
                    }}
                    className="px-5 py-2 rounded-lg bg-[#C99A3E] text-[#101214] text-xs font-bold shadow-md hover:bg-[#E5C36A]"
                  >
                    Discuss Score with Faculty
                  </button>
                </div>
              </div>

              {/* Detailed Question Review */}
              <div className="space-y-4 pt-2">
                <h5 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E5C36A]" />
                  <span>Statutory Rationale & Bare Act References</span>
                </h5>

                {SAMPLE_MOCK_QUESTIONS.map((q, idx) => {
                  const userAns = selectedAnswers[q.id];
                  const isCorrect = userAns === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl bg-[#161920] border border-[#C99A3E]/20 space-y-2 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-white">
                          Q{idx + 1}. {q.question}
                        </span>
                        {isCorrect ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 shrink-0 font-bold">
                            +1 Correct
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-500/30 shrink-0 font-bold">
                            Incorrect
                          </span>
                        )}
                      </div>

                      <div className="text-[#9B9B9B]">
                        <span className="text-emerald-400 font-semibold">Correct Answer: </span>
                        {q.options[q.correctIndex]}
                      </div>

                      <div className="p-3 rounded-lg bg-[#101216] border border-[#C99A3E]/15 text-[#D1D5DB] space-y-1">
                        <div className="text-[11px] font-bold text-[#E5C36A]">Legal Rationale:</div>
                        <p>{q.explanation}</p>
                        <div className="text-[10px] text-[#A0A0A0] font-mono pt-1">
                          Citation: {q.bareActReference}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
