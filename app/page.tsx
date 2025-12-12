'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuizCard from '@/components/QuizCard'
import ProgressIndicator from '@/components/ProgressIndicator'
import NavigationButtons from '@/components/NavigationButtons'
import ScoreScreen from '@/components/ScoreScreen'
import { questions } from '@/data/questions'
import { QuizState } from '@/types/quiz'

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: Array(questions.length).fill(null),
    showResults: false,
    score: 0,
  })

  const currentQuestion = questions[quizState.currentQuestion]
  const selectedAnswer = quizState.answers[quizState.currentQuestion]
  const isLastQuestion = quizState.currentQuestion === questions.length - 1

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizState.answers]
    newAnswers[quizState.currentQuestion] = answerIndex
    setQuizState({ ...quizState, answers: newAnswers })
  }

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
      })
    }
  }

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1,
      })
    }
  }

  const handleSubmit = () => {
    let score = 0
    questions.forEach((question, index) => {
      if (quizState.answers[index] === question.correctAnswer) {
        score++
      }
    })
    setQuizState({
      ...quizState,
      showResults: true,
      score,
    })
  }

  const handleStartAgain = () => {
    setQuizState({
      currentQuestion: 0,
      answers: Array(questions.length).fill(null),
      showResults: false,
      score: 0,
    })
  }

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (quizState.showResults) return

      if (e.key === 'ArrowRight' && !isLastQuestion && selectedAnswer !== null) {
        handleNext()
      } else if (e.key === 'ArrowLeft' && quizState.currentQuestion > 0) {
        handlePrevious()
      } else if (e.key >= '1' && e.key <= '3') {
        const answerIndex = parseInt(e.key) - 1
        if (answerIndex < currentQuestion.options.length) {
          handleAnswerSelect(answerIndex)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizState.showResults, isLastQuestion, selectedAnswer, quizState.currentQuestion])

  return (
    <main className="min-h-screen flex items-center justify-center relative z-10 p-4">
      <div className="relative">
        <div className="aurora-layer rounded-[42px]" />
        <AnimatePresence mode="wait">
          {quizState.showResults ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20, backgroundColor: 'rgba(244,253,255,0.96)' }}
              animate={{ opacity: 1, y: 0, backgroundColor: '#FFFFFF' }}
              exit={{ opacity: 0, y: 20, backgroundColor: 'rgba(244,253,255,0.96)' }}
              transition={{ duration: 0.45 }}
              className="glass-effect rounded-[42px] shadow-2xl flex items-center justify-center"
              style={{ width: '1542px', height: '856px' }}
            >
              <ScoreScreen
                score={quizState.score}
                totalQuestions={questions.length}
                onStartAgain={handleStartAgain}
              />
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, backgroundColor: '#FFFFFF' }}
              animate={{ opacity: 1, backgroundColor: 'rgba(244,253,255,0.96)' }}
              exit={{ opacity: 0, backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.45 }}
              className="glass-effect rounded-[42px] p-12 shadow-2xl relative"
              style={{ width: '1542px', height: '856px' }}
            >
              {/* Paw + bubble positioned at the white card corner for the first question */}
              {!quizState.showResults && quizState.currentQuestion === 0 && (
                <div className="page-paw-container pointer-events-none">
                  <div className="speech-bubble">Best of Luck!</div>
                  <img src="/paw.png" alt="paw" className="paw-image" />
                </div>
              )}
              {/* Header - Title specs: 919px x 102px, Top: 206px (relative to container: 206-112=94px), Left: 501px (relative: 501-189=312px) */}
              <div 
                className="absolute flex items-center justify-center"
                style={{ 
                  top: '94px', 
                  left: '312px', 
                  width: '919px', 
                  height: 'auto',
                  minHeight: '102px'
                }}
              >
                <h1 
                  className="title-gradient font-dm-serif italic text-center"
                  style={{ 
                    fontSize: '90px',
                    letterSpacing: '-4px', 
                    lineHeight: '102px',
                    fontWeight: 400,
                    fontFamily: 'var(--font-dm-serif), serif',
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    width: '100%'
                  }}
                >
                  Test Your Knowledge
                </h1>
              </div>
              
              {/* Subtitle - Frame 10 specs: 422px x 45px, Top: 312px (relative: 200px), Left: 749px (relative: 560px), radius 8px */}
              <div className="absolute bg-white rounded-[8px] flex items-center justify-center" style={{ top: '200px', left: '560px', width: '422px', height: '45px', padding: '10px 31px' }}>
                <p className="text-gray-600 text-sm">
                  Answer all questions to see your results
                </p>
              </div>

              {/* Progress Indicator - Group 1 specs: 896px width, Top: 410px (relative: 298px), Left: 512px (relative: 323px) */}
              <div className="absolute" style={{ top: '298px', left: '323px', width: '896px' }}>
                <ProgressIndicator
                  currentQuestion={quizState.currentQuestion + 1}
                  totalQuestions={questions.length}
                />
              </div>

              {/* Quiz Card - Question container at Top: 463px (relative: 351px), Left: 512px (relative: 323px) */}
              <div className="absolute" style={{ top: '351px', left: '323px' }}>
                  <AnimatePresence mode="wait">
                    <QuizCard
                      key={quizState.currentQuestion}
                      question={currentQuestion}
                      selectedAnswer={selectedAnswer}
                      onAnswerSelect={handleAnswerSelect}
                      questionNumber={quizState.currentQuestion + 1}
                      totalQuestions={questions.length}
                    />
                  </AnimatePresence>
              </div>

              {/* Navigation Buttons - Frame 9 specs: Top: 855px (relative: 743px), Left: 1292px (relative: 1103px), width: 116px, height: 50px */}
              <div className="absolute" style={{ top: '743px', left: '1103px', width: '116px', height: '50px' }}>
                <NavigationButtons
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  canGoPrevious={quizState.currentQuestion > 0}
                  canGoNext={selectedAnswer !== null}
                  isLastQuestion={isLastQuestion}
                  onSubmit={handleSubmit}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

