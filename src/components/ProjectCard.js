import { useState } from 'react';

const ProjectCard = ({ title, description, tags, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-primary via-blue-400 to-accent flex items-center justify-center">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white p-6">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full hover:bg-primary/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center mt-2 text-primary font-medium hover:text-blue-700 transition-colors group"
          >
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 