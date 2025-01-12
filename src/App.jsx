import React from "react";
import Header from "./components/Header";
import CourseContent from "./components/CourseContent";
import InstructorProfile from "./components/InstructorProfile";
import Prerequisites from "./components/Prerequisites";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CountdownTimer from "./components/CountdownTimer";
import CourseHighlights from "./components/CourseHighlights";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Header />
      <main>
        <CountdownTimer />
        <CourseContent />
        <CourseHighlights />
        <InstructorProfile />
        <Prerequisites />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
