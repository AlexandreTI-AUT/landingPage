import React from "react";

const AutomationLogo = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-72 h-72 relative flex items-center justify-center">
        <img
          src="/automation-logo.png"
          alt="Automation Masterclass Logo"
          className="w-full h-full object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default AutomationLogo;
