
import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { explainAnswer } from '../services/geminiService';
import { Brain, CheckCircle2, XCircle, Info } from 'lucide-react';

interface QuestionItemProps {
  question: Question;
  userValue: string;
  onChange: (val: string) => void;
  isSubmitted: boolean;
  transcript: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, userValue, onChange, isSubmitted, transcript }) => {
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isCorrect = userValue.toLowerCase().trim() === question.answer.toLowerCase().trim() ||
                    (question.answer.includes('/') && question.answer.toLowerCase().split('/').some(a => a.trim() === userValue.toLowerCase().trim()));

  const handleExplain = async () => {
    setIsLoading(true);
    const explanation = await explainAnswer(question.text, transcript, question.answer);
    setAiExplanation(explanation);
    setIsLoading(false);
  };

  return (
    <div className={`p-4 rounded-xl border-2 transition-all mb-4 ${isSubmitted ? (isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200') : 'bg-white border-slate-100 hover:border-yellow-200'}`}>
      <div className="flex justify-between items-start mb-2">
        <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          ({question.id})
        </span>
        {isSubmitted && (
          <div className="flex items-center gap-1">
            {isCorrect ? (
              <span className="text-green-600 font-bold text-xs">Correct</span>
            ) : (
              <span className="text-red-600 font-bold text-xs">Incorrect</span>
            )}
          </div>
        )}
      </div>

      <p className="text-slate-800 font-medium mb-3 text-sm leading-relaxed">{question.text}</p>

      <div className="flex flex-col gap-3">
        {question.type === QuestionType.FILL_BLANK && (
          <input
            type="text"
            value={userValue}
            onChange={(e) => onChange(e.target.value)}
            disabled={isSubmitted}
            placeholder="..."
            className={`w-full p-2 text-sm rounded-lg border focus:ring-2 outline-none transition-all ${isSubmitted ? 'bg-slate-100 border-slate-200' : 'focus:ring-yellow-400 border-slate-200 hover:border-yellow-300'}`}
          />
        )}

        {(question.type === QuestionType.MULTIPLE_CHOICE || question.type === QuestionType.MATCHING) && question.options && (
          <div className="flex flex-wrap gap-1.5">
            {question.options.map((opt) => (
              <button
                key={opt}
                onClick={() => onChange(opt)}
                disabled={isSubmitted}
                className={`px-3 py-1 text-xs rounded-md border-2 font-black transition-all ${userValue === opt ? 'bg-yellow-400 border-yellow-500 text-yellow-900 shadow-sm' : 'bg-white border-slate-200 text-slate-500 hover:border-yellow-300'} ${isSubmitted && opt === question.answer ? 'ring-2 ring-green-500 ring-offset-1' : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {isSubmitted && (
          <div className="mt-2 pt-2 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-slate-500">Answer:</span>
              <span className="text-xs font-black text-slate-800 px-1.5 py-0.5 bg-slate-200 rounded">{question.answer}</span>
            </div>
            
            {!aiExplanation ? (
              <button
                onClick={handleExplain}
                disabled={isLoading}
                className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-bold text-[10px] transition-colors disabled:opacity-50"
              >
                {isLoading ? <div className="animate-spin h-3 w-3 border-b-2 border-yellow-600 rounded-full" /> : <Brain className="w-3 h-3" />}
                Explain
              </button>
            ) : (
              <div className="p-3 bg-yellow-100 rounded text-[11px] text-yellow-900 border-l-2 border-yellow-400">
                {aiExplanation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionItem;
