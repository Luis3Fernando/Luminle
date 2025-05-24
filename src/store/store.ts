import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';
import useReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: useReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
