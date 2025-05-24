export interface GameState {
  word_correct: string | null
  words: string[]
  nivel: number
  time: number
}

export interface SettingsState {
  audio: boolean
}

export interface UserData {
  max_nivel: number,
  total_words_correct: number,
  max_time: number
}
