
import React, { useState, useMemo } from 'react';
import { SECTIONS, AUDIO_URL } from './constants';
import { UserAnswer, QuestionType } from './types';
import AudioPlayer from './components/AudioPlayer';
import QuestionItem from './components/QuestionItem';
import Summary from './components/Summary';
import { Headphones, ChevronRight, ChevronLeft, Send, Layout, Map } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (id: number, val: string) => {
    setUserAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== id);
      return [...filtered, { questionId: id, value: val }];
    });
  };

  const getAnswerValue = (id: number) => {
    return userAnswers.find(a => a.questionId === id)?.value || "";
  };

  const handleSubmit = () => {
    let currentScore = 0;
    SECTIONS.forEach(section => {
      section.questions.forEach(q => {
        const userVal = getAnswerValue(q.id).toLowerCase().trim();
        const correctVal = q.answer.toLowerCase().trim();
        if (userVal === correctVal || (q.answer.includes('/') && q.answer.toLowerCase().split('/').some(a => a.trim() === userVal))) {
          currentScore++;
        }
      });
    });
    setScore(currentScore);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setUserAnswers([]);
    setIsSubmitted(false);
    setScore(0);
    setActiveTab(0);
  };

  const totalQuestions = useMemo(() => SECTIONS.reduce((acc, s) => acc + s.questions.length, 0), []);

  const renderSectionContent = () => {
    const section = SECTIONS[activeTab];

    // Part 1 Custom Layout
    if (section.id === 1) {
      return (
        <div className="space-y-12">
          {/* Table for Q1-5 */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left border-r border-slate-700">Staying services</th>
                  <th className="p-4 text-left border-r border-slate-700">Location</th>
                  <th className="p-4 text-left border-r border-slate-700">Cost</th>
                  <th className="p-4 text-left">Availability</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold border-r border-slate-100">Health Centre</td>
                  <td className="p-4 border-r border-slate-100">North Campus</td>
                  <td className="p-4 border-r border-slate-100">6.50</td>
                  <td className="p-4">All students within the</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold border-r border-slate-100">Counselling Service</td>
                  <td className="p-4 border-r border-slate-100">North Campus</td>
                  <td className="p-4 border-r border-slate-100">Up to <span className="inline-block w-20"><QuestionItem question={section.questions[1]} userValue={getAnswerValue(2)} onChange={(v)=>handleAnswerChange(2,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></span> Sessions</td>
                  <td className="p-4"><span className="inline-block w-24"><QuestionItem question={section.questions[0]} userValue={getAnswerValue(1)} onChange={(v)=>handleAnswerChange(1,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></span> zone</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold border-r border-slate-100">Nightline</td>
                  <td className="p-4 border-r border-slate-100"><span className="inline-block w-24"><QuestionItem question={section.questions[2]} userValue={getAnswerValue(3)} onChange={(v)=>handleAnswerChange(3,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></span> Campus</td>
                  <td className="p-4 border-r border-slate-100">Consultations free</td>
                  <td className="p-4">All students</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold border-r border-slate-100">Sports Centre</td>
                  <td className="p-4 border-r border-slate-100">South Campus</td>
                  <td className="p-4 border-r border-slate-100">Free <span className="inline-block w-20"><QuestionItem question={section.questions[4]} userValue={getAnswerValue(5)} onChange={(v)=>handleAnswerChange(5,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></span> each year</td>
                  <td className="p-4">By Phone: Call <span className="inline-block w-28"><QuestionItem question={section.questions[3]} userValue={getAnswerValue(4)} onChange={(v)=>handleAnswerChange(4,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></span> All students</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Form for Q6-10 */}
          <div className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-sm max-w-2xl mx-auto">
            <h4 className="bg-black text-white px-4 py-2 inline-block font-bold mb-8 uppercase tracking-tighter">Material request from!</h4>
            <div className="space-y-8">
              <div className="flex items-baseline gap-4">
                <label className="font-bold text-slate-700 min-w-[150px]">Documents requested :</label>
                <div className="flex-1 flex items-center gap-2">Whole <QuestionItem question={section.questions[5]} userValue={getAnswerValue(6)} onChange={(v)=>handleAnswerChange(6,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></div>
              </div>
              <div className="flex items-baseline gap-4">
                <label className="font-bold text-slate-700 min-w-[150px]">Student name :</label>
                <div className="flex-1"><QuestionItem question={section.questions[6]} userValue={getAnswerValue(7)} onChange={(v)=>handleAnswerChange(7,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></div>
              </div>
              <div className="flex items-baseline gap-4">
                <label className="font-bold text-slate-700 min-w-[150px]">Address :</label>
                <div className="flex-1 flex items-center gap-2">22 <QuestionItem question={section.questions[7]} userValue={getAnswerValue(8)} onChange={(v)=>handleAnswerChange(8,v)} isSubmitted={isSubmitted} transcript={section.transcript}/> Glenfield</div>
              </div>
              <div className="flex items-baseline gap-4">
                <label className="font-bold text-slate-700 min-w-[150px]">Postcode :</label>
                <div className="flex-1 flex items-center gap-2"><QuestionItem question={section.questions[8]} userValue={getAnswerValue(9)} onChange={(v)=>handleAnswerChange(9,v)} isSubmitted={isSubmitted} transcript={section.transcript}/> 9BQ</div>
              </div>
              <div className="flex items-baseline gap-4">
                <label className="font-bold text-slate-700 min-w-[150px]">Nationality :</label>
                <div className="flex-1 font-medium text-slate-500 underline decoration-slate-300 decoration-dotted">Swiss</div>
              </div>
              <div className="flex items-baseline gap-4">
                <label className="font-bold text-slate-700 min-w-[150px]">Course :</label>
                <div className="flex-1 flex items-center gap-2"><QuestionItem question={section.questions[9]} userValue={getAnswerValue(10)} onChange={(v)=>handleAnswerChange(10,v)} isSubmitted={isSubmitted} transcript={section.transcript}/> and sociology</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Part 2 Custom Layout (Floor Plan)
    if (section.id === 2) {
      return (
        <div className="space-y-12">
          {/* Enrollment Form Q11-17 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 shadow-sm max-w-2xl mx-auto">
            <h4 className="bg-black text-white px-4 py-2 inline-block font-bold mb-8 uppercase tracking-tighter">Language School Enrollment Form</h4>
            <div className="space-y-4">
              {section.questions.slice(0, 7).map(q => (
                <div key={q.id} className="flex items-center gap-4 border-b border-slate-50 pb-2">
                  <span className="font-bold text-slate-700 min-w-[200px] text-sm">{q.text}:</span>
                  <div className="flex-1"><QuestionItem question={q} userValue={getAnswerValue(q.id)} onChange={(v)=>handleAnswerChange(q.id,v)} isSubmitted={isSubmitted} transcript={section.transcript}/></div>
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plan Q18-20 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
             <div className="flex items-center gap-2 mb-6 font-black text-slate-900 uppercase tracking-widest text-sm">
               <Map className="w-5 h-5" /> Floor Plan Matching
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* SVG Floor Plan Placeholder */}
                <div className="relative aspect-square bg-white border-2 border-slate-300 rounded-xl p-4 shadow-inner overflow-hidden font-sans">
                  <div className="h-full w-full relative border border-slate-200">
                    {/* Simplified schematic representation of the image */}
                    <div className="absolute top-0 left-0 w-1/4 h-1/6 border-b border-r bg-slate-50 p-1 text-[8px] font-bold">Games</div>
                    <div className="absolute top-0 left-1/4 w-[10%] h-1/6 border-b border-r bg-blue-50 flex items-center justify-center font-black text-blue-600">D</div>
                    <div className="absolute top-0 left-[35%] w-[10%] h-1/6 border-b border-r text-[6px] text-slate-400">WC m</div>
                    <div className="absolute top-0 left-[45%] w-[10%] h-1/6 border-b border-r text-[6px] text-slate-400">WC f</div>
                    
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 border-b border-l bg-blue-50 flex items-center justify-center font-black text-blue-600">F</div>
                    
                    <div className="absolute top-1/3 right-0 w-1/3 h-1/4 border-b border-l flex divide-x divide-slate-200">
                      <div className="flex-1 flex items-center justify-center text-[8px] bg-slate-100">LIFT</div>
                      <div className="flex-1 flex items-center justify-center text-[8px] bg-slate-100">LIFT</div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-t border-l flex">
                       <div className="flex-1 border-r flex items-center justify-center bg-blue-50 font-black text-blue-600">G</div>
                    </div>

                    <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 border-t border-x bg-slate-50 flex flex-col items-center justify-center text-[6px] p-1">
                      <span className="bg-blue-50 px-1 font-black text-blue-600">H</span>
                      <span className="text-center">insurance office</span>
                    </div>

                    <div className="absolute top-1/4 left-0 w-1/3 h-1/3 border-y border-r bg-blue-50 flex items-center justify-center font-black text-blue-600">C</div>
                    <div className="absolute top-[45%] left-0 w-1/2 h-1/6 border-b border-r bg-slate-50 flex items-center justify-center text-[8px]">hairdresser</div>
                    <div className="absolute top-[61%] left-0 w-1/3 h-[10%] border-b border-r bg-blue-50 flex items-center justify-center font-black text-blue-600">B</div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/4 border-t border-r bg-blue-50 flex items-center justify-center font-black text-blue-600 text-xl">A</div>

                    <div className="absolute left-[55%] h-full w-[15%] flex flex-col items-center justify-between py-2 text-[10px] font-black">
                       <span className="text-red-500 text-center">Robert street entrance</span>
                       <div className="flex-1 w-full border-x-4 border-slate-300 flex flex-col divide-y divide-slate-300">
                          {Array.from({length: 15}).map((_,i) => <div key={i} className="flex-1 bg-slate-100"/>)}
                       </div>
                       <span className="text-[8px]">escalators</span>
                       <span className="text-center">entrance Smith Street</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <p className="text-sm font-bold text-slate-500 mb-4">Match places 18-20 to letters A-H:</p>
                   {section.questions.slice(7).map(q => (
                     <QuestionItem key={q.id} question={q} userValue={getAnswerValue(q.id)} onChange={(v)=>handleAnswerChange(q.id,v)} isSubmitted={isSubmitted} transcript={section.transcript}/>
                   ))}
                </div>
             </div>
          </div>
        </div>
      );
    }

    // Default renderer for other parts (Standard IELTS styles)
    return (
      <div className="space-y-6">
        {section.questions.map((q) => (
          <QuestionItem
            key={q.id}
            question={q}
            userValue={getAnswerValue(q.id)}
            onChange={(val) => handleAnswerChange(q.id, val)}
            isSubmitted={isSubmitted}
            transcript={section.transcript}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b border-slate-200 px-6 py-4 mb-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Headphones className="text-yellow-900 w-5 h-5" />
            </div>
            <h1 className="text-lg font-black text-slate-900 tracking-tight">IELTS Master</h1>
          </div>
          
          <div className="flex items-center gap-4">
             {isSubmitted && (
               <div className="bg-green-500 text-white px-3 py-1 rounded-full font-black text-xs">
                 {score} / {totalQuestions}
               </div>
             )}
             <button onClick={handleReset} className="text-slate-400 hover:text-slate-800 font-bold text-xs">Reset</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {isSubmitted ? (
          <Summary score={score} total={totalQuestions} onReset={handleReset} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                <div className="p-2 space-y-1">
                  {SECTIONS.map((section, idx) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between text-sm group ${activeTab === idx ? 'bg-yellow-400 text-yellow-900 font-black' : 'text-slate-500 hover:bg-slate-50 font-bold'}`}
                    >
                      <span>Part {section.id}</span>
                      <ChevronRight className={`w-4 h-4 ${activeTab === idx ? '' : 'opacity-0'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-6">
              <AudioPlayer url={AUDIO_URL} />

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="mb-10">
                  <h2 className="text-xl font-black text-slate-900 mb-2">{SECTIONS[activeTab].title}</h2>
                  <p className="text-slate-400 font-medium text-xs uppercase tracking-wider bg-slate-50 p-2 rounded inline-block">
                    {SECTIONS[activeTab].description}
                  </p>
                </div>

                {renderSectionContent()}

                <div className="mt-12 flex items-center justify-between pt-8 border-t border-slate-100">
                  <button
                    disabled={activeTab === 0}
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className="flex items-center gap-2 text-slate-400 font-black hover:text-slate-600 disabled:opacity-0"
                  >
                    <ChevronLeft /> Back
                  </button>

                  {activeTab === SECTIONS.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
                    >
                      Finish Test
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab(prev => prev + 1)}
                      className="bg-slate-900 hover:bg-black text-white font-black px-8 py-4 rounded-xl flex items-center gap-2"
                    >
                      Next Part <ChevronRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
