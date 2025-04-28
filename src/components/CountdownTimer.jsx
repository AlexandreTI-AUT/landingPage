import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startDate = new Date("2025-05-31T00:00:00");
      const now = new Date();
      const difference = startDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const renderTimeUnit = (value, label) => (
    <div className="text-center px-4">
      <div className="text-5xl font-bold text-blue-400 mb-1">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );

  return (
    <section className="py-12 bg-[#0d1117]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Clock className="w-5 h-5 text-white" />
          <h2 className="text-xl text-white">Início das Aulas em:</h2>
        </div>

        <div className="flex justify-center items-center gap-8">
          {renderTimeUnit(timeLeft.days, "Days")}
          {renderTimeUnit(timeLeft.hours, "Hours")}
          {renderTimeUnit(timeLeft.minutes, "Minutes")}
          {renderTimeUnit(timeLeft.seconds, "Seconds")}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
