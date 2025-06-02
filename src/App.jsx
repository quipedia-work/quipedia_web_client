import React from "react";
import {
  Routes,
  Route,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RoleBasedSection from "./components/RoleBasedSection";
import TestimonialsPage from "./components/Testinomials";
import HowItWorks from "./components/HowItWorks";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";

import Login from "./components/Auth/Login";

import Home from "./Dashboard/Home";
import Register from "./components/Auth/Register";

function HomePage({ onShowAuth }) {
  return (
    <>
      <Navbar onShowAuth={onShowAuth} />
      <Hero />
      <Features />
      <RoleBasedSection />
      <TestimonialsPage />
      <HowItWorks />
      <CookieBanner />
      <Footer onShowAuth={onShowAuth} />
    </>
  );
}

function AuthWrapper() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode"); // "login" or "register"
  const role = searchParams.get("role"); // e.g. "speaker"

  if (mode === "register") {
    return <Register userType={role} />;
  }
  return <Login userType={role} />;
}

function App() {
  const navigate = useNavigate();

  const handleShowAuth = (type, mode = "login") => {
    navigate(`/auth?role=${type}&mode=${mode}`);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage onShowAuth={handleShowAuth} />} />
      <Route path="/auth" element={<AuthWrapper />} />
       <Route
            path="/home"
            element={
             
               < Home />
            
            }
          />
          <Route
            path="/register"
            element={
             
               < Register />
            
            }
          />
          <Route
            path="/login"
            element={
             
               < Login />
            
            }
          />
    </Routes>
    
  );
}

export default App;
