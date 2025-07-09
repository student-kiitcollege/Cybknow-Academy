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
import CourseDetail from './components/CourseDetail';
import Placements from './components/Placements';
import Support from './components/Support'; 
import ScrollToTop from './components/ScrollToTop';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import RegistrationPage from './components/RegistrationPage';

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
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/support" element={<Support />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms"  element={<TermsAndConditions />} />
        <Route path='/policy' element={<RefundPolicy />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path="/register" element={<RegistrationPage />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
