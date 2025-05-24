import { useDispatch, useSelector } from 'react-redux';
import { compareStrings } from '../utils/words';
import type { RootState } from '@store/store';
import { words_1, words_2, words_3 } from '@data/words';
import {
  initGame,
  addWord,
  updateLevel,
  updateTime,
  resetGame,
  updateWordCorrect
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
    let new_word = 'ARBOL'
    setLevel(game.nivel + 1);

    if (game.nivel < 10) {
      setTime(game.time + 60);
    }
    else if (game.nivel < 20) {
      setTime(game.time + 50);
    }
    else if (game.nivel < 30) {
      setTime(game.time + 40);
    }
    else if (game.nivel < 40) {
      setTime(game.time + 30);
    }
    else if (game.nivel < 50) {
      setTime(game.time + 20);
    }
    else {
      setTime(game.time + 10)
    }


    if (game.nivel < 20) {
      new_word = words_1[Math.floor(Math.random() * words_1.length)]
    }
    else if (game.nivel < 40) {
      new_word = words_2[Math.floor(Math.random() * words_2.length)]
    }
    else {
      new_word = words_3[Math.floor(Math.random() * words_3.length)]
    }

    dispatch(updateWordCorrect(new_word));
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
