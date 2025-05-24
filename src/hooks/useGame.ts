import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@store/store';
import {
  initGame,
  addWord,
  updateLevel,
  updateTime,
  resetGame,
} from '@store/slices/gameSlice';
import { words_1 } from '@data/words';

const STORAGE_KEY = 'GAME_STATE';

export const useGame = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);

  const saveState = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
    } catch (error) {
      console.error('Error saving state:', error);
    }
  };

  const loadState = () => {
    try {
      const jsonValue = localStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        const parsed = JSON.parse(jsonValue);
        dispatch(initGame({ word: parsed.word_correct }));
      }
    } catch (error) {
      console.error('Error loading state:', error);
    }
  };

  const initializeGame = () => {
    const randomWord = words_1[Math.floor(Math.random() * words_1.length)];
    dispatch(initGame({ word: randomWord }));
    saveState();
  };

  const submitWord = (word: string) => {
    dispatch(addWord(word));
    saveState();
  };

  const setLevel = (level: number) => {
    dispatch(updateLevel(level));
    saveState();
  };

  const setTime = (time: number) => {
    dispatch(updateTime(time));
    saveState();
  };

  const clearGame = () => {
    dispatch(resetGame());
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    game,
    initializeGame,
    submitWord,
    setLevel,
    setTime,
    loadState,
    clearGame,
  };
};
