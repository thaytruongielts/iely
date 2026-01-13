
import React from 'react';
import { Trophy, RefreshCcw, ArrowLeft } from 'lucide-react';

interface SummaryProps {
  score: number;
  total: number;
  onReset: () => void;
}

const Summary: React.FC<SummaryProps> = ({ score, total, onReset }) => {
  const percentage = Math.round((score / total) * 100);
  
  let feedback = "Keep practicing!";
  if (percentage >= 90) feedback = "Outstanding! IELTS Band 9 material!";
  else if (percentage >= 75) feedback = "Excellent work! Keep it up.";
  else if (percentage >= 50) feedback = "Good effort, you're halfway there.";

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-yellow-400 text-center max-w-lg mx-auto mt-10 animate-in fade-in zoom-in duration-500">
      <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
        <Trophy className="w-12 h-12 text-yellow-600" />
      </div>
      
      <h2 className="text-3xl font-black text-slate-900 mb-2">Quiz Complete!</h2>
      <p className="text-slate-500 font-medium mb-6">{feedback}</p>
      
      <div className="flex justify-center items-end gap-2 mb-8">
        <span className="text-6xl font-black text-yellow-500">{score}</span>
        <span className="text-2xl font-bold text-slate-400 pb-2">/ {total}</span>
      </div>

      <div className="w-full bg-slate-100 h-4 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-yellow-400 transition-all duration-1000" 
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button 
          onClick={onReset}
          className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <RefreshCcw className="w-5 h-5" /> Retake Practice
        </button>
      </div>
    </div>
  );
};

export default Summary;
