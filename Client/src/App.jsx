import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProgramFeatures from './components/ProgramFeatures';
import TrendingPrograms from './components/TrendingPrograms';
import Testimonials from './components/Testimonials';
import Collaborations from './components/Collaborations';
import Footer from './components/Footer';
import Popup from './components/Popup';
import CourseDetails from './components/CourseDetails';
import About from './components/About';
import Contact from './components/Contact';

import ScrollToTop from './components/ScrollToTop'; // Import the new component

const App = () => {
  return (
    <Router>
      <Popup />
      <Navbar />
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyChooseUs />
              <ProgramFeatures />
              <TrendingPrograms />
              <Testimonials />
              <Collaborations />
            </>
          }
        />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
