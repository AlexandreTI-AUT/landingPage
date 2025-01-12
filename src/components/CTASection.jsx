import React from "react";

const CTASection = () => {
  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-5xl font-bold mb-8 text-white">
          Pronto para transformar sua carreira?
        </h2>

        <p className="text-xl text-gray-400 mb-10">
          Não perca a oportunidade de aprender com especialistas em automação de
          testes
        </p>

        <a
          href="https://wa.me/5511998798754?text=Olá! Gostaria de saber mais informações sobre a MasterClass Automation Live."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg 
                   transition-all duration-300 hover:scale-105"
        >
          Quero saber mais
        </a>
      </div>
    </section>
  );
};

export default CTASection;
