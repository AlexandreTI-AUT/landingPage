import React from "react";
import { Calendar } from "lucide-react";
import { getImagePath } from "../utils/imageUtils";

const Header = () => {
  return (
    <header className="relative bg-[#0d1117] text-white py-32">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <img
          src={getImagePath("automation-logo.png")}
          alt="Automation MasterClass Live Logo"
          width="256"
          height="256"
          loading="eager"
          className="w-48 h-48 mx-auto mb-16 hover:scale-105 transition-transform duration-500"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
          <span>Automation </span>
          <span className="text-blue-400">MasterClass Live</span>
        </h1>

        <div className="flex items-center justify-center gap-3 text-lg text-gray-300">
          <Calendar className="w-5 h-5 text-blue-400" />
          <span>Início: 25 de janeiro de 2025</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
