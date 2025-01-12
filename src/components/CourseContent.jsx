import React, { useState } from "react";
import { Clock, Code, Terminal, Database, Layout, X } from "lucide-react";

const ModuleModal = ({ module, isOpen, onClose }) => {
  if (!isOpen) return null;

  const moduleDetails = {
    1: {
      topics: [
        "Fundamentos do JavaScript",
        "Variáveis e Tipos de Dados",
        "Funções e Arrow Functions",
        "Promises e Async/Await",
        "Manipulação do DOM",
      ],
    },
    2: {
      topics: [
        "Breve introdução sobre o papel da automação no QA",
        "Escolha das Ferramentas Adequadas",
        "Identificação dos testes adequados para automação",
        "Importância do código limpo e legível",
        "Automatização Gradual e Iterativa",
      ],
    },
    3: {
      topics: [
        "Instalação e Setup do Cypress",
        "Estrutura de Projetos",
        "Configurações Avançadas",
        "Comandos Customizados",
        "Plugins Úteis",
      ],
    },
    4: {
      topics: [
        "Seletores Avançados",
        "Elementos de Interface e Funcionalidades",
        "Simulação de Interações do Usuário",
        "Boas práticas",
        "Testes de Layout e Comportamento Responsivo",
      ],
    },
    5: {
      topics: [
        "Testes de API REST",
        "Autenticação e Autorização",
        "Validação de Schemas",
        "Testes de Integração",
        "Relatórios de Testes",
      ],
    },
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1f29] rounded-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-6">{module.title}</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              Conteúdo do Módulo
            </h4>
            <ul className="space-y-2">
              {moduleDetails[module.id].topics.map((topic, index) => (
                <li
                  key={index}
                  className="text-gray-300 flex items-start gap-2"
                >
                  <span className="text-blue-400 font-bold">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseContent = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Introdução ao JavaScript para QA",
      description:
        "Fundamentos essenciais de JavaScript para Engenheiros de QA",
      lessons: 1,
      icon: Code,
    },
    {
      id: 2,
      title: "Automação de Testes (Fundamentos e Boas Práticas)",
      description: "Princípios e melhores práticas para automação de testes",
      lessons: 1,
      icon: Terminal,
    },
    {
      id: 3,
      title: "Configuração e Uso do Cypress",
      description: "Aprenda a configurar e utilizar o Cypress para automação",
      lessons: 1,
      icon: Layout,
    },
    {
      id: 4,
      title: "Automação de Testes Front-end",
      description: "Técnicas avançadas para automação de testes de interface",
      lessons: 3,
      icon: Layout,
    },
    {
      id: 5,
      title: "Automação de Testes Back-end",
      description: "Estratégias para automação de testes de API e backend",
      lessons: 3,
      icon: Database,
    },
  ];

  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Conteúdo do Curso
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-[#1a1f29] rounded-lg p-6 
                       hover:bg-gray-800/70 
                       transition-all duration-300
                       cursor-pointer"
              onClick={() => setSelectedModule(module)}
            >
              <div className="flex items-start gap-6">
                <div className="bg-[#0d1117] p-4 rounded-lg">
                  <module.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{module.description}</p>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>
                      {module.lessons} aula{module.lessons > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModuleModal
        module={selectedModule}
        isOpen={!!selectedModule}
        onClose={() => setSelectedModule(null)}
      />
    </section>
  );
};

export default CourseContent;
