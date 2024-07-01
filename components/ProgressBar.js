// components/ProgressBar.js
const ProgressBar = ({ progress, bgColor }) => {
    return (
      <div className="w-full bg-gray-300 rounded-full h-3 mb-1">
        <div 
          className={`h-3 rounded-full transition-all duration-500 ${bgColor}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  