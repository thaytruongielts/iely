
import React, { useRef, useState } from 'react';
import { Play, Pause, RotateCcw, ExternalLink, Download } from 'lucide-react';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const reset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col gap-2 sticky top-4 z-50">
      <div className="bg-yellow-400 p-4 rounded-xl shadow-lg border-2 border-yellow-500 flex items-center gap-4 transition-all hover:shadow-xl">
        <audio 
          ref={audioRef} 
          src={url} 
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
        
        <button 
          onClick={togglePlay}
          className="bg-white p-3 rounded-full text-yellow-600 hover:bg-yellow-50 transition-colors shadow-sm"
          title="Play/Pause"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6" fill="currentColor" />
          )}
        </button>

        <button 
          onClick={reset}
          className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          title="Restart"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <div className="flex-1 h-3 bg-yellow-600/30 rounded-full overflow-hidden cursor-pointer relative">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-yellow-900 font-bold text-sm min-w-[3rem] text-right">
          {progress.toFixed(0)}%
        </span>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm border border-slate-200 p-2 rounded-lg flex items-center justify-between shadow-sm px-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter shrink-0">Audio Link:</span>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-bold text-blue-600 hover:underline truncate"
          >
            {url}
          </a>
        </div>
        <div className="flex items-center gap-2">
           <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white text-[10px] font-black rounded-full hover:bg-black transition-all"
          >
            <ExternalLink className="w-3 h-3" /> OPEN / DOWNLOAD
          </a>
        </div>
      </div>
      <p className="text-[10px] text-slate-500 italic px-2">
        * Note: If the player above doesn't load, please click the button to open audio in a new tab.
      </p>
    </div>
  );
};

export default AudioPlayer;
