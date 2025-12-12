'use client'

import { motion } from 'framer-motion'

interface ScoreScreenProps {
  score: number
  totalQuestions: number
  onStartAgain: () => void
}

export default function ScoreScreen({
  score,
  totalQuestions,
  onStartAgain,
}: ScoreScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center text-center"
    >
      {/* Keep Learning Box */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block bg-gray-100 rounded-lg px-4 py-2 mb-8 shadow-sm"
      >
        <p className="text-gray-800 font-medium">
          Keep Learning<span className="text-pink-500">!!</span>
        </p>
      </motion.div>

      {/* Score Display */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-dm-serif italic title-gradient mb-6">
          Your Final score is
        </h2>
        <div className="flex items-baseline justify-center gap-3">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="title-gradient font-dm-serif italic font-bold"
            style={{ 
              fontSize: '120px',
              letterSpacing: '-4px', 
              lineHeight: '1',
              display: 'block'
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {percentage}
          </motion.span>
          <span 
            className="title-gradient font-dm-serif italic font-bold"
            style={{ fontSize: '60px', lineHeight: '1' }}
          >
            %
          </span>
        </div>
      </motion.div>

      {/* Start Again Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStartAgain}
        className="px-8 py-3 rounded-lg bg-quiz-light-blue border-2 border-quiz-blue text-quiz-teal font-medium hover:bg-quiz-blue transition-colors duration-200 shadow-sm"
        aria-label="Start quiz again"
      >
        Start Again
      </motion.button>
    </motion.div>
  )
}

