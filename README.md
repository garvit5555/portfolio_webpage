# Garvit Juneja's Portfolio

A modern portfolio website with a Groq-powered AI chatbot.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive sections for About, Projects, Skills, and Contact
- AI-powered chatbot using the Groq API to answer questions about me
- Modern UI with smooth animations and transitions
- Easy deployment to Netlify

## Tech Stack

- **Front-end**: Next.js, React, Tailwind CSS
- **AI Integration**: Groq API with LLaMA 3 model
- **Styling**: Styled Components, Tailwind CSS
- **Icons**: Font Awesome
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

2. Install dependencies
```
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory and add your Groq API key:
```
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key
```

4. Run the development server
```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is configured for easy deployment to Netlify. Simply connect your GitHub repository to Netlify and it will automatically deploy when you push changes to your main branch.

Make sure to add your `NEXT_PUBLIC_GROQ_API_KEY` to your Netlify environment variables.

## Project Structure

- `/components` - Reusable React components
- `/pages` - Next.js pages and API routes
- `/public` - Static files like images
- `/styles` - Global styles and CSS modules
- `/utils` - Utility functions and API helpers

## AI Chatbot

The chatbot uses the Groq API with the LLaMA 3 model to answer questions about me, my skills, projects, and experience. The bot is pre-configured with information about my portfolio, so it can provide relevant answers to visitors. 