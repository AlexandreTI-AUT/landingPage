import React from "react";
import { X } from "lucide-react";

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
        "Pirâmide de Testes",
        "Page Objects",
        "Design Patterns em Testes",
        "Boas Práticas de Automação",
        "Clean Code em Testes",
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
        "Testes de Interface",
        "Simulação de Eventos",
        "Intercepção de Requisições",
        "Testes de Responsividade",
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
      <div className="bg-gray-800 rounded-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
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

export default ModuleModal;
