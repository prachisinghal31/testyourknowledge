# Quick Start Guide

## How to Run the Application

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

### Step 2: Start Development Server

Run the development server:

```bash
npm run dev
```

### Step 3: Open in Browser

Once the server starts, you'll see output like:
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

Open your browser and navigate to:
**http://localhost:3000**

### Step 4: Use the Application

- **Answer Questions**: Click on answer options or use number keys (1-3)
- **Navigate**: Use Previous/Next buttons or arrow keys (← →)
- **Submit**: Click Submit on the last question
- **Restart**: Click "Start Again" after viewing results

## Keyboard Shortcuts

- **1, 2, 3**: Select answer options
- **← (Left Arrow)**: Previous question
- **→ (Right Arrow)**: Next question

## Build for Production

To create a production build:

```bash
npm run build
npm start
```

## Troubleshooting

### If you get "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Make sure Node.js version is 18.x or higher

### If dependencies fail to install
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### If port 3000 is already in use
- Next.js will automatically use the next available port (3001, 3002, etc.)
- Or stop the other application using port 3000

