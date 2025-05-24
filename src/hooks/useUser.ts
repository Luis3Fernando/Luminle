import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@store/store';
import {
  setMaxNivel,
  incrementWordsCorrect,
  updateMaxTime,
  resetUserData,
} from '../store/slices/userSlice';

export const useUserData = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const updateNivel = (nivel: number) => dispatch(setMaxNivel(nivel));
  const addCorrectWord = () => dispatch(incrementWordsCorrect());
  const updateTime = (time: number) => dispatch(updateMaxTime(time));
  const reset = () => dispatch(resetUserData());

  return {
    user,
    updateNivel,
    addCorrectWord,
    updateTime,
    reset,
  };
};
