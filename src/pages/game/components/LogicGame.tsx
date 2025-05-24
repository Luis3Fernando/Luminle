import { useEffect, useState } from 'react';
import { useGame } from '@hook/useGame';
import * as motion from "motion/react-client";
import { useNavigate } from 'react-router-dom';
import { ImSad2 } from "react-icons/im";
import { upperString } from '../../../utils/words';
import { useUserData } from '@/src/hooks/useUser';

const ball = {
  backgroundColor: "transparent",
  width: 'auto'
}

export default function LogicGame() {
  const { game, nextLevel } = useGame();
  const { updateNivel, updateTime } = useUserData();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const rows = 6;
  const cols = 5;

  const createEmptyGrid = () =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ letter: '', color: '' }))
    );

  const [grid, setGrid] = useState(createEmptyGrid());
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      const key = e.key.toUpperCase();

      if (/^[A-ZÑ]$/.test(key)) {
        if (currentCol < cols) {
          setGrid(prev => {
            const newGrid = [...prev];
            newGrid[currentRow][currentCol] = { ...newGrid[currentRow][currentCol], letter: key };
            return newGrid;
          });
          setCurrentCol(currentCol + 1);
        }

        if (currentCol === cols - 1) {
          const wordTyped = [...grid[currentRow].map(cell => cell.letter), key].join('');
          const correct = game.word_correct?.toUpperCase() ?? "";

          const newGrid = [...grid];
          const resultRow = Array(cols).fill({ letter: '', color: 'gray' });

          const letterCount: { [key: string]: number } = {};
          for (const c of correct) {
            letterCount[c] = (letterCount[c] || 0) + 1;
          }

          for (let i = 0; i < cols; i++) {
            const letter = wordTyped[i];
            if (letter === correct[i]) {
              resultRow[i] = { letter, color: 'green' };
              letterCount[letter]--;
            }
          }

          for (let i = 0; i < cols; i++) {
            const letter = wordTyped[i];
            if (resultRow[i].color !== 'green' && correct.includes(letter) && letterCount[letter] > 0) {
              resultRow[i] = { letter, color: 'yellow' };
              letterCount[letter]--;
            } else if (resultRow[i].color !== 'green') {
              resultRow[i] = { letter, color: 'gray' };
            }
          }

          newGrid[currentRow] = resultRow;
          setGrid(newGrid);

          const isCorrect = resultRow.every(cell => cell.color === 'green');
          if (isCorrect) {
            setTimeout(() => {
              setGrid(createEmptyGrid());
              setCurrentRow(0);
              setCurrentCol(0);
              // actualizar el nivel
              nextLevel();
            }, 1000);
          } else {
            if (currentRow < rows - 1) {
              setCurrentRow(currentRow + 1);
              setCurrentCol(0);
            }
            else {
              setShowModal(true);
            }
          }
        }
      }

    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCol, currentRow, grid]);

  useEffect(() => {
    const timeAlert = () => {
      if (game.time <= 0) {
        setShowModal(true);
      }
    }

    timeAlert();
  }, [game.time])

  const finish = () => {
    updateNivel(game.nivel);
    updateTime(game.time);
    navigate('/')
  }

  return (
    <>
      <div className="w-full h-full flex justify-center items-center p-6">
        <div className="grid grid-rows-6 gap-3">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-5 gap-3">
              {row.map((cell, colIndex) => {
                const isActive = rowIndex === currentRow && colIndex === currentCol;
                return (
                  <div
                    key={colIndex}
                    className={`w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-2xl border transition
                        ${cell.color === 'green'
                        ? 'border-green-400 text-white'
                        : cell.color === 'yellow'
                          ? 'border-amber-400 text-white'
                          : isActive
                            ? 'border-gray-200 text-white'
                            : 'border-gray-600 text-gray-400'}`}
                  >
                    {cell.letter}
                  </div>

                );
              })}
            </div>
          ))}
        </div>
      </div>
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

            <div className="bg-gray-900 relative text-white p-6 rounded-xl w-96 max-w-md shadow-2xl shadow-red-400">
              <ImSad2 className='mx-auto' size={80} />
              <h2 className='text-center text-2xl mt-5'>GAME OVER</h2>
              <p className='text-center text-lg mt-3'>word: {upperString(game.word_correct ?? "")}</p>
              <div className='flex w-full justify-center gap-4 mt-5'>
                <button onClick={() => finish()} className='border w-30 border-gray-500 text-gray-300 px-4 py-2 rounded-md transition-colors duration-300 hover:text-red-400 hover:border-red-400 cursor-pointer'>Return</button>
              </div>
            </div>
          </motion.div>

        </div>
      )}
    </>
  );
}
