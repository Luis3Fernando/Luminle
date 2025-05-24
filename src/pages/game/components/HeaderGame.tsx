import { useEffect, useState } from 'react';
import { useGame } from '@/src/hooks/useGame';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import * as motion from "motion/react-client";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FaFaceGrinBeamSweat } from "react-icons/fa6";

const ball = {
  backgroundColor: "transparent",
  width: 'auto'
}

export default function HeaderGame() {
  const { game, setTime } = useGame();
  const [isMuted, setIsMuted] = useState(false);
  const [showModal, setShowModal] = useState(false);


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
    <>
      <header className="w-full text-white border-b border-gray-700 px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <button
          onClick={() => setShowModal(true)}
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

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}>

            <div className="bg-gray-900 relative text-white p-6 rounded-xl w-96 max-w-md shadow-2xl shadow-primary">
              <FaFaceGrinBeamSweat className='mx-auto' size={80} />
              <h2 className='text-center text-2xl mt-5'>Ready to surrender?</h2>
              <div className='flex w-full justify-center gap-4 mt-5'>
                <button className='border w-30 border-gray-500 text-gray-300 px-4 py-2 rounded-md transition-colors duration-300 hover:text-pink-500 hover:border-primary cursor-pointer'>Yes</button>
                <button className='border w-30 border-gray-500 text-gray-300 px-4 py-2 rounded-md transition-colors duration-300 hover:text-pink-500 hover:border-primary cursor-pointer'>No</button>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-700 absolute right-2 top-2 cursor-pointer hover:text-gray-600 transition"
              >
                <IoIosCloseCircleOutline size={40} />
              </button>
            </div>
          </motion.div>

        </div>
      )}
    </>
  );
}
