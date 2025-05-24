import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SettingsState } from '@interface/game';

const SETTINGS_KEY = 'user_settings';

const getInitialSettings = (): SettingsState => {
    const stored = localStorage.getItem(SETTINGS_KEY);
    return stored ? JSON.parse(stored) : { audio: true };
};

const saveSettings = (data: SettingsState) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(data));
};

const initialState: SettingsState = getInitialSettings();

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleAudio: (state) => {
            state.audio = !state.audio;
            saveSettings(state);
        },
        setAudio: (state, action: PayloadAction<boolean>) => {
            state.audio = action.payload;
            saveSettings(state);
        }
    }
});

export const { toggleAudio, setAudio } = settingsSlice.actions;
export default settingsSlice.reducer;
