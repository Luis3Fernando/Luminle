import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { SettingsState } from '@interface/game'

const initialState: SettingsState = {
    audio: true,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleAudio: (state) => {
            state.audio = !state.audio
        },
        setAudio: (state, action: PayloadAction<boolean>) => {
            state.audio = action.payload
        },
    },
})

export const { toggleAudio, setAudio } = settingsSlice.actions
export default settingsSlice.reducer
