import { useDispatch, useSelector } from 'react-redux';
import { compareStrings } from '../utils/words';
import type { RootState } from '@store/store';
import {
  initGame,
  addWord,
  updateLevel,
  updateTime,
  resetGame,
} from '@store/slices/gameSlice';

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
        dispatch(initGame());
      }
    } catch (error) {
      console.error('Error loading state:', error);
    }
  };

  const initializeGame = () => {
    dispatch(initGame());
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

  const nextLevel = () => {
    setLevel(game.nivel + 1);

    if (game.nivel < 10) {
      setTime(game.time + 60)
    }
  }

  const clearGame = () => {
    dispatch(resetGame());
    localStorage.removeItem(STORAGE_KEY);
  };

  const validateWord = (word: string) => {
    console.log('estado: ', game.word_correct)
    return compareStrings(game.word_correct ?? '', word);
  }

  return {
    game,
    initializeGame,
    submitWord,
    setLevel,
    setTime,
    loadState,
    clearGame,
    validateWord,
    nextLevel
  };
};
