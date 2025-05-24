import { useEffect, useState } from 'react';
import { useGame } from '@hook/useGame';

export default function LogicGame() {
  const { validateWord } = useGame();
  const rows = 6;
  const cols = 5;

  const [grid, setGrid] = useState(Array.from({ length: rows }, () => Array(cols).fill('')));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      const key = e.key.toUpperCase();

      if (/^[A-ZÑ]$/.test(key)) {
        setGrid((prev) => {
          const newGrid = [...prev];
          newGrid[currentRow][currentCol] = key;
          return newGrid;
        });

        if (currentCol < cols - 1) {
          setCurrentCol(currentCol + 1);
        } else {
          const word = grid[currentRow].join('') + key;

          if (currentRow < rows - 1) {
            setCurrentRow(currentRow + 1);
            setCurrentCol(0);
          }
          console.log('Validacion:', validateWord(word));
        }
      } else if (key === 'BACKSPACE') {
        if (currentCol > 0) {
          setCurrentCol(currentCol - 1);
          setGrid((prev) => {
            const newGrid = [...prev];
            newGrid[currentRow][currentCol - 1] = '';
            return newGrid;
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCol, currentRow, grid]);

  return (
    <div className="w-full h-full flex justify-center items-center p-6">
      <div className="grid grid-rows-6 gap-3">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-3">
            {row.map((letter, colIndex) => {
              const isActive = rowIndex === currentRow && colIndex === currentCol;
              return (
                <div
                  key={colIndex}
                  className={`w-20 h-20 flex items-center justify-center text-2xl font-bold rounded-2xl border transition
                    ${isActive
                      ? 'border-gray-200 text-white'
                      : 'border-gray-600 text-gray-400'}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
