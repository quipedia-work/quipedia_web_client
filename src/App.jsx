import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import RoleBasedSection from './components/RoleBasedSection'; // ✅ Import it
import TestimonialsPage from './components/Testinomials';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <RoleBasedSection /> 
      <TestimonialsPage />
      <HowItWorks />
    </>
  );
}

export default App;
