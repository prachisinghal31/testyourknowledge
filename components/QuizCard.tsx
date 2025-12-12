'use client'

import { motion } from 'framer-motion'
import { Question } from '@/types/quiz'

interface QuizCardProps {
  question: Question
  selectedAnswer: number | null
  onAnswerSelect: (answerIndex: number) => void
  questionNumber: number
  totalQuestions: number
}

export default function QuizCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuizCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-[897px] mx-auto"
    >
      {/* Question Box - Frame 2 specs: 896px x 78px, radius 10px, gradient, border, padding: 24px top/bottom, 277px left/right */}
      <div className="mb-6">
        <div 
          className="question-gradient rounded-[10px] border border-[#96E5FF] flex items-center justify-center"
          style={{ 
            width: '896px', 
            height: '78px',
            paddingTop: '24px',
            paddingRight: '277px',
            paddingBottom: '24px',
            paddingLeft: '277px'
          }}
        >
          <h2 className="text-base font-medium text-gray-800 text-center">
            {questionNumber}. {question.question}
          </h2>
        </div>
      </div>

      {/* Answer Options - Frame 13 specs: 897px width, vertical flow, gap 14px */}
      <div className="flex flex-col gap-[14px]" style={{ width: '897px' }}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const gradientClass = `option-gradient-${index}`
          return (
            <motion.button
              key={index}
              onClick={() => onAnswerSelect(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-center px-6 py-4 rounded-lg border transition-all duration-200 option-default ${gradientClass} ${isSelected ? 'option-selected selected' : ''}`}
              aria-pressed={isSelected}
              role="radio"
              aria-label={`Option ${index + 1}: ${option}`}
            >
              <span className="text-gray-800 font-medium">{option}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

