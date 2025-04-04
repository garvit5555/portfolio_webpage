import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { SYSTEM_PROMPT } from '../utils/groq';
import ReactMarkdown from 'react-markdown';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSize, setChatSize] = useState({ width: 320, height: 380 }); // Default smaller size for mobile
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);

  // Initialize chat size based on viewport when it's first opened
  useEffect(() => {
    if (isOpen) {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // On mobile, make chat take up most of the screen width but leave some space
        const mobileWidth = Math.min(window.innerWidth * 0.92, 350);
        const mobileHeight = Math.min(window.innerHeight * 0.6, 450);
        setChatSize({ width: mobileWidth, height: mobileHeight });
      } else {
        // On desktop, use a standard size
        setChatSize({ width: 384, height: 380 });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting when chat is first opened
      setMessages([
        { role: 'assistant', content: "Hi! I'm Garvit's portfolio assistant. I can tell you about Garvit's skills, projects, education, internships, and achievements. What would you like to know?" }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Setup resize event listeners
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      
      const minWidth = Math.min(320, window.innerWidth * 0.6); // Responsive min width
      const maxWidth = Math.min(window.innerWidth * 0.95, 500); // Limit max width
      const minHeight = 250;
      const maxHeight = window.innerHeight * 0.8;
      
      // Calculate new dimensions based on mouse position
      const newWidth = Math.min(maxWidth, Math.max(minWidth, window.innerWidth - e.clientX));
      const newHeight = Math.min(maxHeight, Math.max(minHeight, window.innerHeight - e.clientY));
      
      setChatSize({ width: newWidth, height: newHeight });
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
    };
    
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/chat', {
        messages: [...messages, userMessage].filter(msg => msg.role === 'user' || msg.role === 'assistant')
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div 
          ref={chatRef}
          className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 max-w-[95vw]"
          style={{ 
            width: `${chatSize.width}px`, 
            height: `${chatSize.height}px`,
            transition: isResizing ? 'none' : 'box-shadow 0.2s ease-in-out'
          }}
        >
          {/* Resize handle - bottom left corner */}
          <div 
            className="absolute bottom-0 left-0 w-6 h-6 cursor-nesw-resize z-10"
            onMouseDown={handleResizeStart}
            title="Resize chat window"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-gray-400 m-1" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="17 7 7 17" />
              <polyline points="17 12 12 17" />
              <polyline points="17 17 17 17" />
            </svg>
          </div>
          
          {/* Resize handle - top left corner */}
          <div 
            className="absolute top-0 left-0 w-6 h-6 cursor-nwse-resize z-10"
            onMouseDown={handleResizeStart}
            title="Resize chat window"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-gray-400 m-1 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="17 7 7 17" />
              <polyline points="17 12 12 17" />
              <polyline points="17 17 17 17" />
            </svg>
          </div>

          {/* Chat header */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-medium">Chat with Garvit's Assistant</h3>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  } max-w-[90%]`}
                >
                  {message.role === 'assistant' ? (
                    <ReactMarkdown 
                      components={{
                        p: ({node, ...props}) => <p className="text-gray-800" {...props} />,
                        h1: ({node, ...props}) => <h1 className="text-gray-900 font-bold text-xl" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-gray-900 font-bold text-lg" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-gray-900 font-bold text-md" {...props} />,
                        a: ({node, ...props}) => <a className="text-primary font-medium hover:underline" {...props} />,
                        strong: ({node, ...props}) => <strong className="text-gray-900 font-semibold" {...props} />,
                        code: ({node, ...props}) => <code className="text-gray-800 bg-gray-100 px-1 py-0.5 rounded" {...props} />,
                        li: ({node, ...props}) => <li className="text-gray-800 ml-4" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc mb-3" {...props} />
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something about Garvit..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 bg-white"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg disabled:bg-gray-400"
                disabled={isLoading || !input.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat; 