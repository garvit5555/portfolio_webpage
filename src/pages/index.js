import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  // Project data
  const projects = [
    {
      title: "AI Cold Calling Agent",
      description: "Developed an AI-powered agent that automates cold calling processes with natural language understanding and response generation capabilities.",
      tags: ["AI", "Natural Language Processing", "Python", "Automation"],
      link: "https://github.com/garvit5555/AI_cold_calling_agent",
      image: "/cold_calling.jpg"
    },
    {
      title: "Stock Sentiment Analysis",
      description: "Analysis of stock market sentiment using machine learning and natural language processing to predict market trends based on news and social media.",
      tags: ["Machine Learning", "NLP", "Python", "Finance"],
      link: "https://github.com/garvit5555/Stock_Sentiment_Analysis_Using_Machine_Learning",
      image: "/ssa.png"
    },
    {
      title: "Neural Style Transfer",
      description: "Implementation of neural style transfer algorithms to apply artistic styles to images using deep learning techniques.",
      tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow"],
      link: "https://github.com/garvit5555/Neural_Style_Transfer",
      image: "/nst.jpg"
    },
    {
      title: "Low Light Image Enhancement",
      description: "Techniques for enhancing images captured in low-light conditions using deep learning and image processing algorithms.",
      tags: ["Python", "Computer Vision", "Deep Learning", "Image Processing"],
      link: "https://github.com/garvit5555/Low_light_img_enhancement",
      image: "/llie.jpg"
    },
    {
      title: "Technical Analysis of Stocks",
      description: "Comprehensive analysis of stock market data using technical indicators and algorithms to identify trading opportunities.",
      tags: ["Python", "Data Analysis", "Finance", "Algorithms"],
      link: "https://github.com/garvit5555/Technical-analysis-of-stocks",
      image: "/tas.jpg"
    },
    {
      title: "Multiple PDF Chatbot",
      description: "Created an intelligent chatbot capable of understanding and answering questions across multiple PDF documents using advanced NLP techniques.",
      tags: ["Python", "NLP", "Document Analysis", "AI"],
      link: "https://github.com/garvit5555/Multiple_pdf_chatbot",
      image: "/mpc.jpg"
    }
  ];

  // Skills data
  const skills = [
    { 
      title: "Python", 
      proficiency: 95, 
      description: "Advanced proficiency in Python for data science, machine learning, web development, and automation." 
    },
    { 
      title: "SQL", 
      proficiency: 90, 
      description: "Strong knowledge of database management, query optimization, and data manipulation." 
    },
    { 
      title: "C++", 
      proficiency: 85, 
      description: "Proficient in C++ programming for algorithm implementation and competitive programming." 
    },
    { 
      title: "Machine Learning", 
      proficiency: 92, 
      description: "Expertise in implementing and fine-tuning machine learning models for various applications." 
    },
    { 
      title: "Artificial Intelligence", 
      proficiency: 88, 
      description: "Strong understanding of AI concepts, algorithms, and applications in real-world scenarios." 
    },
    { 
      title: "Deep Learning", 
      proficiency: 85, 
      description: "Experience with neural networks, CNN, RNN, and transformer architectures for various tasks." 
    },
    { 
      title: "Data Structures", 
      proficiency: 90, 
      description: "Strong foundation in data structures for efficient algorithm implementation and problem-solving." 
    },
    { 
      title: "Algorithms", 
      proficiency: 88, 
      description: "Expertise in designing and implementing efficient algorithms for complex computational problems." 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Garvit Juneja - Portfolio</title>
        <meta name="description" content="Garvit Juneja's personal portfolio - IIT Roorkee Undergrad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Garvit Juneja</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-6 animate-fadeIn animation-delay-200">
                  Undergraduate student at IIT Roorkee with expertise in machine learning, artificial intelligence, 
                  and data structures & algorithms.
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
                  <a 
                    href="#contact" 
                    className="bg-primary hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-primary/50"
                  >
                    Contact Me
                  </a>
                  <a 
                    href="#projects" 
                    className="bg-white hover:bg-gray-100 text-primary font-medium px-6 py-3 rounded-lg border border-primary transition-colors shadow-lg hover:shadow-gray-200"
                  >
                    View Projects
                  </a>
                </div>
                <div className="flex space-x-4 mt-8 animate-fadeIn animation-delay-600">
                  <a 
                    href="https://github.com/garvit5555" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors transform hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/garvit-juneja-396840290/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors transform hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center animate-fadeIn animation-delay-200">
                <div className="relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl transform -rotate-6"></div>
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-all duration-300 hover:scale-105">
                    <img 
                      src="/my_image.jpg" 
                      alt="Garvit Juneja" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10">
              <div className="md:w-2/3 animate-fadeIn">
                <p className="text-lg text-gray-600 mb-6">
                  I am Garvit, a dedicated B.Tech student in Engineering Physics at IIT Roorkee with expertise in AI, machine learning, and emerging DevOps technologies. My academic excellence (CGPA: 8.398) is complemented by hands-on experience in both applied AI research and industrial development.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Currently engaged in a Research and Development internship focused on DevOps agents, I am exploring innovative approaches to automate and optimize deployment workflows. Previously at Nimrobo AI, I enhanced chatbot capabilities using React and OpenAI's API, gaining valuable experience in production-grade AI systems. My research internship at IIT Roorkee involved developing deep learning models for 3D medical image segmentation, achieving a Dice coefficient of 0.8917.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Beyond technical work, I serve as a Placement Coordinator, managing industry relations and improving recruitment processes. With strong problem-solving skills and a passion for bridging technology with real-world applications, I aim to contribute meaningfully to cutting-edge projects at the intersection of AI and DevOps.
                </p>
                <div className="mt-6">
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-5 py-2 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 animate-fadeIn animation-delay-200">
                <div className="bg-gradient-to-tr from-primary/10 to-accent/10 p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Key Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-700">Degree:</span> 
                        <p className="text-gray-600">B.Tech in Engineering Physics</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-700">University:</span> 
                        <p className="text-gray-600">IIT Roorkee</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-700">Registration:</span> 
                        <p className="text-gray-600">22123015/2025</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-700">Languages:</span> 
                        <p className="text-gray-600">Python, SQL, C++</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-700">Contact No:</span> 
                        <p className="text-gray-600">8708644470</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-medium text-gray-700">Email:</span> 
                        <p className="text-gray-600">garvit@ph.iitr.ac.in</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Professional experience that has shaped my skills and expertise.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-4 border-primary pl-10 py-4 mb-10 animate-fadeIn">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">AI Developer Intern</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">January 2025 - February 2025</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Nimrobo AI Pvt. Ltd.</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Enhanced a chatbot Chrome extension by implementing features using React, JavaScript, and web scraping tools for dynamic HTML content extraction.</li>
                    <li>Added features to improve data extraction and processing, optimizing the extension's efficiency.</li>
                    <li>Leveraged OpenAI's API to generate real-time, context-aware responses, enhancing user interaction and usability.</li>
                    <li>Worked on a research tool leveraging AI agents, focusing on automating information structuring and organization.</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative border-l-4 border-primary pl-10 py-4 mb-10 animate-fadeIn animation-delay-200">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Summer Research Internship</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">June 2024 - July 2024</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Indian Institute of Technology, Roorkee</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Developed a TensorFlow model for 3D cell segmentation in microscopy, achieving a Dice coefficient of 0.8917.</li>
                    <li>Automated preprocessing for over 1,500+ 3D images, streamlining the workflow and enhancing efficiency.</li>
                    <li>Improving the signal-to-noise ratio significantly boosted image quality and image analysis accuracy.</li>
                    <li>Fine-tuned hyperparameters and optimized training processes, leading to more reliable segmentation results.</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-4 border-primary pl-10 py-4 mb-10 animate-fadeIn animation-delay-300">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Placement Coordinator</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">May 2024 - Present</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Placement and Internship Cell, IIT Roorkee</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Engaged with 200+ companies to gain insights into industry demands and facilitate student placements.</li>
                    <li>Designed a streamlined database system for data and file transfer, reducing errors and saving time.</li>
                    <li>Managed the end-to-end process at 30+ companies and generated 30+ JDs.</li>
                    <li>Amended & optimized the slot system, resulting in a 20% surge in company participation & a 5% rise in lucrative offers.</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-4 border-primary pl-10 py-4 mb-10 animate-fadeIn animation-delay-400">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Under Graduate Teaching Assistant (UGTA)</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">September 2024 - November 2024</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Academic Reinforcement Program, IIT Roorkee</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Mentored students in EEE-101 as an Academic Support Mentor.</li>
                    <li>Provided essential academic assistance and strategic exam preparation advice.</li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-4 border-primary pl-10 py-4 mb-10 animate-fadeIn animation-delay-500">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Competitive Programming Judge</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">June 2023 - June 2024</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Online Judges</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Active participant of contests organized on coding platforms like Codeforces (Maximum Rating -1429, specialist Rank), Code Chef (Maximum Rating -1689, 3-Star), Leetcode (Handle - garvit_55).</li>
                    <li>Participated in competitive programming contests and hackathons.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Here are some of the projects I have worked on. These projects showcase my 
                skills and expertise in different areas of technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="https://github.com/garvit5555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
              >
                View More on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                These are the key skills I have developed through my education and projects.
              </p>
            </div>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Computer Languages</h3>
                  <p className="text-gray-700">Python, SQL, C++</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Software Packages</h3>
                  <p className="text-gray-700">Google Colaboratory, GitHub, VS Code, TensorFlow, Keras, Hugging Face, Langchain, Crew AI</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Additional Courses</h3>
                  <p className="text-gray-700">Machine Learning and Deep Learning, Optimization Techniques</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Languages Known</h3>
                  <p className="text-gray-700">English, Hindi</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                My academic journey and qualifications.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-4 border-primary pl-10 py-4 mb-10 animate-fadeIn">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">B.Tech in Engineering Physics</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">2022 - 2026</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Indian Institute of Technology (IIT) Roorkee</h4>
                  <p className="text-gray-600 mb-4">
                    Pursuing a Bachelor of Technology degree in Engineering Physics, currently in 3rd year.
                    CGPA: 8.398
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-700 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Secured AIR 4159 in JEE Advanced 2022 among all the appeared 1.5 lakh candidates</li>
                      <li>Secured AIR 5831 in JEE mains 2022 among all the appeared 12 lakh candidates</li>
                      <li>Awarded with Smt. Pyaari Bai and Shri Badri Prasad Memorial Scholarship in IIT Roorkee</li>
                      <li>Cracked Facebook Meta Hacker Cup Round 1 and selected for Round 2</li>
                      <li>Achieved a Global Rank of 159 in Code Chef Starters 112 Division 4</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative border-l-4 border-primary pl-10 py-4 animate-fadeIn animation-delay-200">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Intermediate (Class XII)</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">2021</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Ved Model Sr. Sec. School Kalanaur Rohtak Haryana</h4>
                  <p className="text-gray-600 mb-4">
                    Completed Intermediate (Class XII) with 95.60% marks.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-700 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>School topper in Physics and Mathematics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative border-l-4 border-primary pl-10 py-4 animate-fadeIn animation-delay-300">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary animate-pulse-slow"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Matriculation (Class X)</h3>
                    <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">2019</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">Ved Model Sr. Sec. School Kalanaur Rohtak Haryana</h4>
                  <p className="text-gray-600 mb-4">
                    Completed Matriculation (Class X) with 93.40% marks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Feel free to contact me for collaborations, opportunities, or just to say hello!
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn transform hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-700">Email</h4>
                        <a href="mailto:garvit@ph.iitr.ac.in" className="text-primary hover:underline">
                          garvit@ph.iitr.ac.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-700">GitHub</h4>
                        <a 
                          href="https://github.com/garvit5555" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline"
                        >
                          github.com/garvit5555
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-700">Phone</h4>
                        <a href="tel:8708644470" className="text-primary hover:underline">
                          +91 8708644470
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-700">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/garvit-juneja-396840290/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline"
                        >
                          linkedin.com/in/garvit-juneja-396840290
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn animation-delay-200 transform hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                  <p className="mb-6 text-gray-600">
                    You can also chat with my AI assistant to learn more about me and my work!
                  </p>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">GJ</div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800">Garvit's Assistant</h4>
                        <p className="text-sm text-gray-600">Available 24/7</p>
                      </div>
                    </div>
                    <p className="text-gray-800">
                      The chat assistant is available in the bottom right corner of this page. 
                      Feel free to ask any questions about my skills, projects, or experience!
                    </p>
                    <div className="mt-4 flex justify-end">
                      <button 
                        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                        className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md"
                      >
                        Chat Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chat />
    </div>
  );
} 