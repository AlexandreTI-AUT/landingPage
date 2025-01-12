import React from "react";

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10h80v80h-80z"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="2" fill="rgba(59, 130, 246, 0.1)" />
            <path
              d="M10 10h30 M10 10v30"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
      {/* Linhas diagonais animadas */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent 
                    animate-pulse"
      />
    </div>
  );
};

export default CircuitBackground;
