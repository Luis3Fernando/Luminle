import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice';
import useReducer from './slices/userSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: useReducer,
    settings: settingsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
