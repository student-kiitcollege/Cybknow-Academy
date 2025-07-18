import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#140033] to-[#1c005a] px-4 py-10">
      <motion.div
        className="max-w-5xl mx-auto text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-bold text-purple-400 mb-6 border-b-4 border-purple-600 pb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Terms and Conditions
        </motion.h1>

        <p className="mb-6 text-lg text-gray-200">
          Welcome to <span className="font-semibold text-purple-400">Cybknow Academy</span>. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        <Section title="✅ 1. Acceptance of Terms">
          By enrolling in any course or accessing our platform, you agree to follow these terms, our privacy policy, and any additional guidelines posted on the website.
        </Section>

        <Section title="👤 2. Use of the Platform">
          You must be at least <strong>13 years old</strong> to use Cybknow Academy. You agree not to use the platform for any unlawful purposes or in ways that could damage or impair the services.
        </Section>

        <Section title="📚 3. Intellectual Property">
          All content, courses, videos, and materials provided by Cybknow Academy are the <span className="text-purple-300 font-medium">intellectual property</span> of the academy and may not be copied, shared, or resold without written consent.
        </Section>

        <Section title="📖 4. Course Access & Refunds">
          Access to courses is granted upon successful enrollment. Refunds are applicable only as per our{" "}
          <a
            href="/refund-policy"
            className="text-purple-400 underline hover:text-purple-300"
          >
            Refund Policy
          </a>
          .
        </Section>

        <Section title="📝 5. Modifications to the Terms">
          Cybknow Academy reserves the right to change these terms at any time. Continued use of the platform indicates your acceptance of the modified terms.
        </Section>

        <Section title="📩 6. Contact Us">
          If you have any questions, feel free to contact us at{" "}
          <a
            href="mailto:support@cybknow.com"
            className="text-purple-400 underline hover:text-purple-300"
          >
            support@cybknow.com
          </a>
          .
        </Section>
      </motion.div>
    </div>
  );
};

// Reusable animated section
const Section = ({ title, children }) => (
  <motion.div
    className="mb-10"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-semibold text-purple-300 mb-3">{title}</h2>
    <div className="text-gray-300 text-base leading-relaxed">{children}</div>
  </motion.div>
);

export default TermsAndConditions;
