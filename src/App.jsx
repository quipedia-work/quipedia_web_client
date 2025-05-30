import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import RoleBasedSection from './components/RoleBasedSection'; // ✅ Import it
import TestimonialsPage from './components/Testinomials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <RoleBasedSection /> 
      <TestimonialsPage />
    </>
  );
}

export default App;
