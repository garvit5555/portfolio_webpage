const SkillCard = ({ title, icon, description, proficiency }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="mr-3 text-primary text-2xl">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{title}</h3>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      
      {proficiency && (
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Proficiency</span>
            <span className="text-sm font-medium text-primary">{proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full relative"
              style={{ width: `${proficiency}%` }}
            >
              <div className="absolute inset-0 bg-white/20 overflow-hidden rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard; 