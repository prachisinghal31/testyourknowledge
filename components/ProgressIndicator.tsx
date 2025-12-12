'use client'

interface ProgressIndicatorProps {
  currentQuestion: number
  totalQuestions: number
}

export default function ProgressIndicator({
  currentQuestion,
  totalQuestions,
}: ProgressIndicatorProps) {
  return (
    <div
      className="flex w-full gap-3 mb-6 items-center"
      role="progressbar"
      aria-valuenow={currentQuestion}
      aria-valuemin={1}
      aria-valuemax={totalQuestions}
      aria-label={`Question ${currentQuestion} of ${totalQuestions}`}>
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const isActive = index < currentQuestion
        return (
          <div
            key={index}
            className={`transition-all duration-300 ${isActive ? 'bg-quiz-teal' : 'bg-gray-300'}`}
            style={{
              flex: 1,
              height: isActive ? '6px' : '4px',
              borderRadius: '4px',
            }}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}

