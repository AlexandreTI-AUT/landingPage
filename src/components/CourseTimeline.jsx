import React from "react";
import { Calendar, Clock } from "lucide-react";

const CourseTimeline = () => {
  const timelineEvents = [
    {
      date: "25/01/2025",
      title: "Introdução ao JavaScript para QA",
      duration: "2 horas",
    },
    {
      date: "26/01/2025",
      title: "Fundamentos e Boas Práticas",
      duration: "2 horas",
    },
    {
      date: "27/01/2025",
      title: "Configuração do Cypress",
      duration: "2 horas",
    },
    {
      date: "28/01 a 30/01/2025",
      title: "Automação Front-end",
      duration: "6 horas",
    },
    {
      date: "31/01 a 02/02/2025",
      title: "Automação Back-end",
      duration: "6 horas",
    },
  ];

  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Cronograma do Curso
        </h2>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative flex items-start gap-8 bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/60 transition-colors"
            >
              <div className="flex-none w-32">
                <div className="flex items-center text-blue-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTimeline;
