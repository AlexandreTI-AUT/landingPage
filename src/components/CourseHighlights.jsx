import React from "react";
import { Video, Award, BookOpen } from "lucide-react";

const CourseHighlights = () => {
  const highlights = [
    {
      icon: Video,
      title: "Aulas Gravadas",
      description:
        "Acesso vitalício às aulas gravadas para consultas e revisões",
    },
    {
      icon: Award,
      title: "Certificado",
      description: "Certificado de conclusão após finalizar o curso",
    },
    {
      icon: BookOpen,
      title: "Material Completo",
      description: "Material de apoio para estudo e consultas futuras",
    },
  ];

  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Benefícios Inclusos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1f29] rounded-lg p-6 text-center"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
