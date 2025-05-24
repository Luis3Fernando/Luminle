import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameState } from '@interface/game';
import { words_1 } from '@data/words';

const initialState: GameState = {
  word_correct: null,
  words: [],
  nivel: 1,
  time: 60,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initGame(state) {
      state.word_correct = words_1[Math.floor(Math.random() * words_1.length)];
      state.words = [];
      state.nivel = 1;
      state.time = 60;
    },
    addWord(state, action: PayloadAction<string>) {
      state.words.push(action.payload);
    },
    updateWordCorrect(state, action: PayloadAction<string>) {
      state.word_correct = action.payload
    },
    updateLevel(state, action: PayloadAction<number>) {
      state.nivel = action.payload;
    },
    updateTime(state, action: PayloadAction<number>) {
      state.time = action.payload;
    },
    resetGame(state) {
      state.word_correct = null;
      state.words = [];
      state.nivel = 1;
      state.time = 60;
    },
  },
});

export const {
  initGame,
  addWord,
  updateLevel,
  updateTime,
  resetGame,
  updateWordCorrect,
} = gameSlice.actions;

export default gameSlice.reducer;
