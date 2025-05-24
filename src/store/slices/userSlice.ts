import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserData } from '@interface/game';

const USER_DATA_KEY = 'user_data';

const getInitialUserData = (): UserData => {
  const stored = localStorage.getItem(USER_DATA_KEY);
  return stored ? JSON.parse(stored) : {
    max_nivel: 0,
    total_words_correct: 0,
    max_time: 0,
  };
};

const saveToLocalStorage = (data: UserData) => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
};

const initialState: UserData = getInitialUserData();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMaxNivel: (state, action: PayloadAction<number>) => {
      state.max_nivel = Math.max(state.max_nivel, action.payload);
      saveToLocalStorage(state);
    },
    incrementWordsCorrect: (state) => {
      state.total_words_correct += 1;
      saveToLocalStorage(state);
    },
    updateMaxTime: (state, action: PayloadAction<number>) => {
      state.max_time = Math.max(state.max_time, action.payload);
      saveToLocalStorage(state);
    },
    resetUserData: (state) => {
      state.max_nivel = 0;
      state.total_words_correct = 0;
      state.max_time = 0;
      saveToLocalStorage(state);
    }
  }
});

export const {
  setMaxNivel,
  incrementWordsCorrect,
  updateMaxTime,
  resetUserData,
} = userSlice.actions;

export default userSlice.reducer;
