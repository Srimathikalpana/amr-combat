"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ArrowDown,
} from "lucide-react";
import confetti from "canvas-confetti";
import { QUIZ_QUESTIONS, QuizOption } from "@/data/quizData";

export default function AMRQuiz() {
  // State: Record user's chosen option for each question id: { 1: "B", 2: "C", ... }
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, QuizOption["key"]>
  >({});

  const handleSelectOption = (questionId: number, optionKey: QuizOption["key"]) => {
    // If already answered this question, don't re-select
    if (selectedAnswers[questionId]) return;

    const newAnswers = { ...selectedAnswers, [questionId]: optionKey };
    setSelectedAnswers(newAnswers);

    // If all questions are answered, trigger celebratory confetti
    if (Object.keys(newAnswers).length === QUIZ_QUESTIONS.length) {
      const correctCount = QUIZ_QUESTIONS.filter(
        (q) => newAnswers[q.id] === q.correctKey
      ).length;

      if (correctCount >= 3) {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.7 },
            colors: ["#06b6d4", "#10b981", "#f59e0b", "#3b82f6"],
          });
        } catch {
          // Fallback
        }
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
  };

  // Score calculations
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = QUIZ_QUESTIONS.filter(
    (q) => selectedAnswers[q.id] === q.correctKey
  ).length;

  return (
    <section id="quiz" className="relative py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-glow-cyan/20">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Public Health Challenge
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Join the Combat!{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
              Test Your Knowledge.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Can you distinguish scientific facts from common antibiotic myths?
            Answer these 5 essential questions to gauge your stewardship literacy.
          </p>

          {/* Top Call-to-Action Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                const el = document.getElementById("quiz-card-1");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-amber-400 to-cyan-500 hover:from-cyan-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>[Answer the Challenge] Click here to answer interesting Qs</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Dynamic Score Tracker Bar */}
        <div className="mb-10 p-5 rounded-2xl glass-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3.5">
            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Challenge Progress
              </span>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <span>
                  Score: <strong className="text-cyan-400">{correctCount}</strong> /{" "}
                  {QUIZ_QUESTIONS.length} correct
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ({answeredCount} of {QUIZ_QUESTIONS.length} answered)
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar & Reset */}
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="flex-1 sm:w-48 bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(answeredCount / QUIZ_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>

            {answeredCount > 0 && (
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* 5 Live Interactive Question Cards */}
        <div className="space-y-8">
          {QUIZ_QUESTIONS.map((q, qIndex) => {
            const userAnswer = selectedAnswers[q.id];
            const isAnswered = Boolean(userAnswer);
            const isUserCorrect = userAnswer === q.correctKey;

            return (
              <motion.div
                id={`quiz-card-${q.id}`}
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: qIndex * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl glass-card border transition-all duration-300 relative overflow-hidden ${
                  isAnswered
                    ? isUserCorrect
                      ? "border-emerald-500/40 shadow-glow-emerald/20"
                      : "border-rose-500/40 shadow-glow-rose/20"
                    : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Header: Question Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
                      0{q.id}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {q.category}
                    </span>
                  </div>

                  {/* Immediate Status Badge */}
                  {isAnswered && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                        isUserCorrect
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/50"
                          : "bg-rose-950/80 text-rose-300 border border-rose-500/50"
                      }`}
                    >
                      {isUserCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>RIGHT! ✓</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-400" />
                          <span>INCORRECT ✗</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Question Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                  {q.question}
                </h3>

                {/* Multiple Choice Selection Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {q.options.map((opt) => {
                    const isSelected = userAnswer === opt.key;
                    const isTheCorrectOption = opt.key === q.correctKey;

                    let btnStyle =
                      "bg-slate-900/60 border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-850";

                    if (isAnswered) {
                      if (isSelected) {
                        btnStyle = isTheCorrectOption
                          ? "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-glow-emerald/30 font-semibold"
                          : "bg-rose-950/80 border-rose-500 text-rose-200 shadow-glow-rose/30 font-semibold";
                      } else if (isTheCorrectOption) {
                        // Highlight the actual correct option in green if user got it wrong
                        btnStyle =
                          "bg-emerald-950/50 border-emerald-500/60 text-emerald-300 font-semibold ring-1 ring-emerald-500/40";
                      } else {
                        btnStyle =
                          "bg-slate-950/40 border-slate-850 text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(q.id, opt.key)}
                        className={`p-4 rounded-2xl border text-left flex items-start space-x-3 transition-all duration-200 disabled:cursor-default ${btnStyle}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                            isSelected
                              ? isTheCorrectOption
                                ? "bg-emerald-500 text-slate-950"
                                : "bg-rose-500 text-slate-950"
                              : isAnswered && isTheCorrectOption
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed flex-1">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Reveal Box */}
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-800/80"
                    >
                      <div
                        className={`p-4 rounded-2xl ${
                          isUserCorrect
                            ? "bg-emerald-950/30 border border-emerald-500/20"
                            : "bg-slate-950/60 border border-slate-800"
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1.5">
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              isUserCorrect ? "text-emerald-400" : "text-cyan-400"
                            }`}
                          />
                          <span
                            className={`text-xs font-mono font-bold uppercase ${
                              isUserCorrect
                                ? "text-emerald-400"
                                : "text-cyan-300"
                            }`}
                          >
                            Scientific Explanation
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Completion Milestone Card */}
        {answeredCount === QUIZ_QUESTIONS.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-cyan-950/30 to-slate-900/90 border border-cyan-500/40 shadow-2xl text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Challenge Complete! You Scored {correctCount} / {QUIZ_QUESTIONS.length}
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
              {correctCount === 5
                ? "Flawless score! You are fully equipped as an Antibiotic Stewardship Champion."
                : correctCount >= 3
                ? "Solid performance! Every piece of knowledge helps curb the silent superbug pandemic."
                : "Great learning opportunity! Review the scientific explanations above to reinforce your antibiotic literacy."}
            </p>
            <a
              href="#pledge"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan transition-all hover:opacity-95"
            >
              <span>Seal Your Knowledge with the AMR Pledge</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
