import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProgramFeatures from './components/ProgramFeatures';
import PlacementAssistance from './components/PlacementAssistance';
import Testimonials from './components/Testimonials';
import Collaborations from './components/Collaborations';
import Footer from './components/Footer';
import Popup from './components/Popup';
import About from './components/About';
import Contact from './components/Contact';
import AllCourses from './components/AllCourses';
import CourseDetail from './components/CourseDetail'; // ✅ new import
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Popup />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhyChooseUs />
              <ProgramFeatures />
              <PlacementAssistance />
              <Testimonials />
              <Collaborations />
            </>
          }
        />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} /> {/* ✅ dynamic route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
