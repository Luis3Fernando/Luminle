import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@store/store';
import { toggleAudio, setAudio } from '../store/slices/settingsSlice';

export const useSettings = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  return {
    audio: settings.audio,
    toggleAudio: () => dispatch(toggleAudio()),
    setAudio: (value: boolean) => dispatch(setAudio(value)),
  };
};
