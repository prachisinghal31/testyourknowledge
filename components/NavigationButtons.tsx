'use client'

import { motion } from 'framer-motion'

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
  isLastQuestion: boolean
  onSubmit?: () => void
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-end gap-[10px]" style={{ width: '116px', height: '50px' }}>
      {canGoPrevious && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          className="rounded-lg bg-quiz-light-blue hover:bg-quiz-blue transition-colors duration-200 flex items-center justify-center shadow-sm"
          style={{ width: '50px', height: '50px' }}
          aria-label="Previous question"
        >
          <svg
            className="w-6 h-6 text-quiz-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
      )}
      {isLastQuestion ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSubmit}
          disabled={!canGoNext}
          className="px-6 py-3 rounded-lg bg-quiz-blue hover:bg-quiz-teal text-white font-medium transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Submit quiz"
        >
          Submit
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          disabled={!canGoNext}
          className="rounded-lg bg-quiz-light-blue hover:bg-quiz-blue transition-colors duration-200 flex items-center justify-center shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ width: '50px', height: '50px' }}
          aria-label="Next question"
        >
          <svg
            className="w-6 h-6 text-quiz-teal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      )}
    </div>
  )
}

