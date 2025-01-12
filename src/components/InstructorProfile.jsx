import React from "react";
import { Github, Linkedin } from "lucide-react";
import { getImagePath } from "../utils/imageUtils";

const InstructorProfile = () => {
  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Seu Instrutor
        </h2>

        <div className="bg-[#1a1f29] rounded-lg p-8">
          <div className="flex items-start gap-8">
            <img
              src={getImagePath("instructor-profile.png")}
              alt="Alexandre Silva"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Alexandre Silva
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                SDET (Software Development Engineer in Test) com mais de 16 anos
                de experiência em Qualidade de Software. Especialista em
                automação de testes com JavaScript, desenvolvendo soluções
                robustas para aplicações Front-end e Back-end. Dedicado a elevar
                o nível da qualidade de software através de práticas modernas de
                teste e automação.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/AlexandreTI-AUT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexandre-silva-qa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
