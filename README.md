# Test Your Knowledge - Quiz Application

A modern, interactive quiz application built with Next.js, TypeScript, and Tailwind CSS. This application features smooth animations, accessibility compliance, and a pixel-perfect design implementation.

## 🚀 Live Demo

[Deploy to Vercel/Netlify and add URL here]

## 📋 Features

- **Interactive Quiz Interface**: Navigate through multiple-choice questions with smooth transitions
- **Progress Tracking**: Visual progress indicator showing current question position
- **Score Display**: Final score screen with percentage calculation
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and ARIA labels
- **Responsive Design**: Optimized for desktop screens with modern UI/UX
- **Type Safety**: Full TypeScript implementation for robust code

## 🛠️ Tech Stack

### Required Technologies
- **React 18.2.0**: Modern React with hooks
- **TypeScript 5.3.3**: Type-safe development
- **Next.js 14.0.4**: React framework with App Router
- **Tailwind CSS 3.4.0**: Utility-first CSS framework

### Bonus Technologies
- **Framer Motion 10.16.16**: Smooth animations and transitions

## 📁 Project Structure

```
cat/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main quiz page
├── components/
│   ├── QuizCard.tsx         # Question and answer options component
│   ├── ProgressIndicator.tsx # Progress bar component
│   ├── NavigationButtons.tsx # Previous/Next/Submit buttons
│   └── ScoreScreen.tsx      # Final score display component
├── data/
│   └── questions.ts         # Quiz questions data
├── types/
│   └── quiz.ts              # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cat
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Implementation

The application implements a pixel-perfect design with:

- **Color Palette**:
  - Primary Teal: `#2C5F7C` (quiz-teal)
  - Light Blue: `#E8F4F8` (quiz-light-blue)
  - Medium Blue: `#B8D4E3` (quiz-blue)
  - Purple Accent: `#A8B8D8` (quiz-purple)

- **Typography**:
  - Serif font (Georgia) for headings
  - Sans-serif (Inter) for body text

- **UI Elements**:
  - Frosted glass effect on main card
  - Rounded corners throughout
  - Soft shadows and gradients
  - Smooth hover and tap animations

## ♿ Accessibility Features

- **Keyboard Navigation**:
  - Arrow keys (← →) for navigation
  - Number keys (1-3) for answer selection
  - Tab navigation for all interactive elements

- **ARIA Labels**:
  - Proper `role` attributes for buttons and radio options
  - `aria-label` for screen readers
  - `aria-pressed` for selected states
  - `aria-live` regions for dynamic content

- **Semantic HTML**:
  - Proper heading hierarchy
  - Button elements for all interactive components
  - Progress indicators with proper attributes

## 📝 Quiz Questions

The application includes 4 questions:

1. What sound does a cat make?
2. What would you probably find in your fridge?
3. How many stars are in the sky?
4. What color are bananas?

Questions and answers can be easily modified in `data/questions.ts`.

## 🔧 Key Features Implemented

1. **Question Navigation**: Move between questions with Previous/Next buttons
2. **Answer Selection**: Click or use keyboard to select answers
3. **Progress Tracking**: Visual indicator shows current progress
4. **Score Calculation**: Automatic calculation of correct answers
5. **Results Screen**: Beautiful score display with percentage
6. **Restart Functionality**: Start Again button to retake the quiz
7. **Smooth Transitions**: Page transitions and component animations
8. **Responsive Layout**: Optimized for desktop viewing

## 🎯 Assumptions Made

1. **Desktop Only**: As per requirements, the design is optimized for desktop screens only
2. **Question Format**: All questions are multiple-choice with 3 options
3. **Navigation**: Users can navigate back and forth between questions before submitting
4. **Answer Validation**: Users must select an answer before proceeding to the next question
5. **Score Display**: Final score is shown as a percentage after completing all questions

## ⏱️ Time Spent

- Project Setup: 30 minutes
- Component Development: 2 hours
- Styling & Design Implementation: 2 hours
- Accessibility Features: 1 hour
- Testing & Refinement: 30 minutes
- Documentation: 30 minutes

**Total: ~6.5 hours**

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

## 📄 License

This project is created for assessment purposes.

## 👤 Author

[Your Name]

---

**Note**: This application is built specifically for desktop screens as per the requirements. For mobile responsiveness, additional Tailwind responsive classes would need to be added.

