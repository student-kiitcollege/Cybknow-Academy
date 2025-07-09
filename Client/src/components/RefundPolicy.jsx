import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
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
        Refund Policy
      </motion.h1>

      <p className="mb-6 text-lg">
        At <span className="font-semibold text-purple-600">Cybknow Academy</span>, we value your satisfaction. Please read our refund policy carefully to understand your rights and eligibility.
      </p>

      <Section title="1. Eligibility for Refund">
        Refunds can be requested within <strong>7 days</strong> of purchase, and only if the course progress is under 20%. Beyond this, refunds will not be issued.
      </Section>

      <Section title="2. Non-Refundable Situations">
        <ul className="list-disc list-inside space-y-2">
          <li>Courses purchased during flash sales, discounts, or special offers.</li>
          <li>Course progress exceeds 20%.</li>
          <li>Refund requested due to technical issues not related to our platform.</li>
        </ul>
      </Section>

      <Section title="3. How to Request a Refund">
        Send an email to{" "}
        <a href="mailto:support@cybknow.com" className="text-purple-600 underline font-medium">
          support@cybknow.com
        </a>{" "}
        with your name, registered email, course name, and reason for refund.
      </Section>

      <Section title="4. Refund Processing">
        Approved refunds will be processed within <strong>5–7 business days</strong> to the original payment method. You'll receive a confirmation email once processed.
      </Section>

      <Section title="5. Contact Us">
        If you have questions, contact our support team at{" "}
        <a href="mailto:support@cybknow.com" className="text-purple-600 underline font-medium">
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

export default RefundPolicy;
