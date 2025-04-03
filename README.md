# Garvit Juneja - Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features an AI-powered chatbot using Groq's API.

## 🌟 Features

- **Modern UI Design** with Tailwind CSS
- **Responsive Layout** for all device sizes
- **AI-Powered Chat Assistant** using Groq's LLM API
- **Dynamic Project Showcase** with project cards
- **Animated UI Components** for enhanced user experience
- **Resume Download** functionality
- **Detailed Sections** for experience, education, projects, and skills

## 🚀 Live Demo

Visit the portfolio website: [Your deployed URL here]

## 💻 Tech Stack

- **Next.js** - React framework for building the UI
- **React** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework
- **Groq API** - AI-powered chat assistant
- **Axios** - HTTP client for API requests
- **Font Awesome** - Icons library

## 📋 Project Structure

```
portfolio/
├── public/             # Static files
│   ├── project-images/ # Project images
│   └── resume.pdf      # Downloadable resume
├── src/
│   ├── components/     # React components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── .env.example        # Example environment variables
└── README.md           # Project documentation
```

## 🔧 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
4. Add your Groq API key to `.env.local`

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add your environment variables in the Netlify dashboard
5. Deploy!

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Groq API](https://groq.com/)
- [Font Awesome](https://fontawesome.com/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by Garvit Juneja 
