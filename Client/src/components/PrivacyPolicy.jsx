import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-10 text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold text-purple-700 mb-6 border-b-4 border-purple-200 pb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Privacy Policy
      </motion.h1>

      <p className="mb-6 text-lg">
        At <span className="font-semibold text-purple-600">Cybknow Academy</span>, we are committed to protecting your privacy and safeguarding your personal information. Please read this policy to understand how we collect, use, and protect your data.
      </p>

      <Section title="1. Information We Collect">
        We may collect your name, email address, phone number, payment information, and activity on our platform when you register, enroll in a course, or interact with our services.
      </Section>

      <Section title="2. How We Use Your Information">
        Your information is used to:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Provide and manage your access to our courses</li>
          <li>Send important course updates or newsletters</li>
          <li>Improve our platform and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Section>

      <Section title="3. Data Sharing & Disclosure">
        We do not sell or rent your personal information. We may share data with trusted partners for processing services (e.g., payment gateways) or when legally required.
      </Section>

      <Section title="4. Data Security">
        We implement security measures to protect your data from unauthorized access, alteration, or loss. However, no method of transmission over the internet is 100% secure.
      </Section>

      <Section title="5. Cookies & Tracking">
        We use cookies to personalize content, analyze traffic, and enhance your experience. You can manage cookie preferences in your browser settings.
      </Section>

      <Section title="6. Your Rights">
        You have the right to access, update, or delete your personal data. To make a request, email us at{" "}
        <a href="mailto:privacy@cybknow.com" className="text-purple-600 underline hover:text-purple-800">
          privacy@cybknow.com
        </a>
        .
      </Section>

      <Section title="7. Changes to This Policy">
        We may update this Privacy Policy from time to time. Updates will be posted on this page with the effective date.
      </Section>

      <Section title="8. Contact Us">
        If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
        <a href="mailto:support@cybknow.com" className="text-purple-600 underline hover:text-purple-800">
          support@cybknow.com
        </a>
        .
      </Section>
    </motion.div>
  );
};

const Section = ({ title, children }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-semibold text-purple-600 mb-2">{title}</h2>
    <div className="text-gray-700 text-base leading-relaxed">{children}</div>
  </motion.div>
);

export default PrivacyPolicy;
