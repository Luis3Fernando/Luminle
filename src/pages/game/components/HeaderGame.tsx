import { useEffect, useState } from 'react';
import { useGame } from '@/src/hooks/useGame';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function HeaderGame() {
  const { game , setTime} = useGame();
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: any) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (game.time <= 0) return;

    const timer = setInterval(() => {
      setTime(game.time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [game.time]);

  return (
    <header className="w-full text-white border-b border-gray-700 px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <button
        className="border border-gray-500 text-gray-300 px-4 py-2 rounded-md transition-colors duration-300 hover:text-pink-500 hover:border-pink-500 cursor-pointer"
      >
        RENDIRSE
      </button>

      <div className="flex flex-col items-center">
        <span className="text-lg border border-gray-500 text-gray-300 px-3 py-1 rounded-md transition hover:text-blue-400 hover:border-blue-400 cursor-default">
          {formatTime(game.time)}
        </span>
        <span className="text-sm mt-2 border border-gray-500 text-gray-300 px-3 py-1 rounded-md transition hover:text-emerald-400 hover:border-emerald-400 cursor-default">
          Nivel {game.nivel}
        </span>
      </div>

      <button
        onClick={toggleSound}
        className="border border-gray-500 text-gray-300 p-3 rounded-full transition-colors duration-300 hover:text-orange-400 hover:border-orange-400 cursor-pointer"
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>
    </header>
  );
}
