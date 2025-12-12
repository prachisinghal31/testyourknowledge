# Test Your Knowledge - Quiz Application

A modern, interactive quiz application built with Next.js, TypeScript, and Tailwind CSS. This application features smooth animations, accessibility compliance, and a pixel-perfect design implementation.

## 📋 Features

- **Interactive Quiz Interface**: Navigate through multiple-choice questions with smooth transitions
- **Progress Tracking**: Visual progress indicator showing current question position
- **Score Display**: Final score screen with percentage calculation
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and ARIA labels
# Test Your Knowledge — Quiz App

A small, desktop-focused quiz app built with Next.js, TypeScript and Tailwind CSS. It includes animated transitions (Framer Motion), keyboard accessibility, and a polished UI.

## Quick Start

Prerequisites:
- Node.js 18+ and npm

Install and run:
```bash
git clone <repository-url>
cd cat
npm install
npm run dev
```
Open http://localhost:3000

Build for production:
```bash
npm run build
npm run start
```

## What’s in this repo
- `app/` — Next.js App Router pages and global styles (`globals.css`, `page.tsx`, `layout.tsx`)
- `components/` — UI components: `QuizCard`, `ProgressIndicator`, `NavigationButtons`, `ScoreScreen`
- `data/questions.ts` — Quiz questions and answers
- `public/` — Static assets (put `paw.png` here for the paw graphic)

## Notable behaviors
- The progress indicator now stretches to match the question card width.
- Answer options are white by default and reveal a gentle gradient on hover/selection.
- The final score uses a rolling-digit animation (slot-style) when shown.
- A paw graphic and "Best of Luck!" speech bubble appear at the card corner on the first question. Place your paw image as `public/paw.png`.
- The main card animates its background to solid white on the results screen and back to glassy on restart.

## Running & Developing
- Dev server: `npm run dev`
- Lint: `npm run lint` (if configured)
- Formatting: `npm run format` (if configured)

## Files you may want to edit
- Edit questions: `data/questions.ts`
- Styles: `app/globals.css`
- Quiz UI: `components/QuizCard.tsx`
- Results UI: `components/ScoreScreen.tsx`

## Notes & Tips
- If the paw graphic doesn't appear, add a `paw.png` to the `public/` folder (or update the `img` src in `app/page.tsx`).
- The app is designed primarily for desktop screens — additional responsive tweaks are required for mobile.

If you want, I can also:
- Add a placeholder paw image into `public/` for you
- Make the rolling-digit animation spin multiple times before settling
- Adjust spacing or colors to match a provided Figma spec

---
Updated: December 2025
```

