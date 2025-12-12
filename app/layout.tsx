import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dmSerifDisplay = DM_Serif_Display({ 
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  title: 'Test Your Knowledge - Quiz App',
  description: 'Answer all questions to see your results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSerifDisplay.variable}`}>{children}</body>
    </html>
  )
}

