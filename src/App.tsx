// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Invest from "./pages/Invest";
import StartProject from "./pages/StartProject";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";
import BehaviorReport from "./pages/BehaviorReport";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Accessibility from "./pages/Accessibility";
import type { Project } from "./data/projects";


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  // Navigation handler for Header/Footer using React Router
  // We'll use a wrapper component to provide useNavigate to Header/Footer
  const NavigationWrapper: React.FC<{ children: (onNavigate: (page: string) => void) => React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const onNavigate = (page: string) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (page === "home") navigate("/");
      else navigate(`/${page}`);
    };
    return <>{children(onNavigate)}</>;
  };

  return (
    <Router>
      <NavigationWrapper>
        {(onNavigate) => (
          <>
            <Header onNavigate={onNavigate} language={language} onLanguageChange={setLanguage} />
            {/* Remove flex and side area, keep only header, main, and footer with white background */}
            <main className="min-h-screen bg-white">
              <Routes>
                <Route path="/" element={<Home onNavigate={onNavigate} language={language} />} />
                <Route path="/projects" element={<Projects onViewDetails={setSelectedProject} />} />
                <Route path="/project-details" element={selectedProject ? <ProjectDetails project={selectedProject} onBack={() => onNavigate("projects")} /> : <Home onNavigate={onNavigate} language={language} />} />
                <Route path="/invest" element={<Invest />} />
                <Route path="/start-project" element={<StartProject />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/behavior-report" element={<BehaviorReport />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/accessibility" element={<Accessibility />} />
              </Routes>
            </main>
            <Footer onNavigate={onNavigate} />
          </>
        )}
      </NavigationWrapper>
    </Router>
  );
};

export default App;
