import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import qrCodeImage from "../assets/qrcode.jpg"

const RegistrationPage = () => {
  const [searchParams] = useSearchParams();
  const courseFromURL = searchParams.get("course") || "";
  const [selectedCourse, setSelectedCourse] = useState(courseFromURL);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const courseTitles = [
    "Zero to Mastery Cybersecurity",
    "Cyber Commando Training Programme",
    "Ethical Hacking Fundamentals",
  ];

  useEffect(() => {
    setSelectedCourse(courseFromURL);
  }, [courseFromURL]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.qualification) newErrors.qualification = "Qualification is required";
    if (!selectedCourse) newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const serviceId = "service_iy2bkhw";
      const userTemplateId = "template_3u23x9j";
      const adminTemplateId = "template_a0ku10g";
      const userId = "ZCjOWoWw-W77SDbmd";

      const userTemplateParams = {
        from_name: "Cybknow Academy",
        to_name: formData.name,
        to_email: formData.email,
        message: `Hi ${formData.name},\n\nThank you for registering for the course "${selectedCourse}". We will contact you shortly at ${formData.phone}.\n\nQualification: ${formData.qualification}\n\n- Cybknow Academy`,
      };

      const adminTemplateParams = {
        from_name: formData.name,
        to_name: "Cybknow Team",
        to_email: "jenasourav2001@gmail.com",
        message: `New Course Registration:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQualification: ${formData.qualification}\nSelected Course: ${selectedCourse}`,
      };

      try {
        await emailjs.send(serviceId, userTemplateId, userTemplateParams, userId);
        await emailjs.send(serviceId, adminTemplateId, adminTemplateParams, userId);
        setShowPopup(true);
        setFormData({ name: "", email: "", phone: "", qualification: "" });
        setSelectedCourse("");
      } catch (error) {
        console.error("Email sending failed:", error);
        alert("❌ Failed to send email. Please try again later.");
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-digital-technology-futuristic-circuit-background_70921-261.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-8 text-purple-300 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Course Registration
        </motion.h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/80 text-black border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/80 text-black border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/80 text-black border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.phone && <p className="text-red-300 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <select
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              className="w-full bg-white/80 text-black border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Latest Qualification</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
            {errors.qualification && <p className="text-red-300 text-sm">{errors.qualification}</p>}
          </div>

          <div>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full bg-white/80 text-black border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Choose Course</option>
              {courseTitles.map((title, idx) => (
                <option key={idx} value={title}>
                  {title}
                </option>
              ))}
            </select>
            {errors.course && <p className="text-red-300 text-sm">{errors.course}</p>}
          </div>

          {/* Payment Section */}
          <div className="mt-8 p-5 border border-purple-300 bg-purple-100/30 text-white rounded-xl">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Make Payment (Optional)</h3>
            <p className="text-sm text-gray-200 mb-2">Scan the QR code below to complete your payment.</p>
            <div className="flex justify-center">
              <img
                src={qrCodeImage}
                alt="QR code"
                className="w-40 h-40 border rounded-md shadow-md bg-white"
              />
            </div>
            <p className="text-center text-sm mt-2 text-purple-200">
              UPI ID: <span className="font-semibold">9078558087-2@ybl</span>
            </p>
            <p className="text-xs text-center text-gray-300 mt-1 italic">
              * Payment not required to submit.
            </p>
          </div>

          <motion.button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
            whileTap={{ scale: 0.97 }}
          >
            Submit Registration
          </motion.button>
        </form>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-center max-w-md w-full rounded-xl p-8 shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                🎉 Registration Successful!
              </h2>
              <p className="text-gray-700 mb-4">
                Thank you for registering. You'll be contacted via email soon.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white px-6 py-2 rounded-md font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationPage;
