export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

export interface QuizState {
  currentQuestion: number
  answers: (number | null)[]
  showResults: boolean
  score: number
}

