# Adogee Logistics and Rental Service Company

## Overview
A React-based website for Adogee Logistics and Rental Service Company, featuring logistics and rental services based in Onitsha, Anambra State, Nigeria.

## Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM (HashRouter)
- **AI Integration**: Google Gemini API (@google/genai)

## Project Structure
```
/
├── index.html          # Main HTML entry point
├── index.tsx           # React entry point
├── App.tsx             # Main App component with routing
├── components/         # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── QuoteAI.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── constants.tsx       # App constants and data
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

## Development
- Run `npm run dev` to start the development server on port 5000
- The app uses lazy loading for page components for performance

## Environment Variables
- `GEMINI_API_KEY` - Google Gemini API key for AI features (optional)

## Deployment
- Static deployment configured
- Build command: `npm run build`
- Output directory: `dist`
