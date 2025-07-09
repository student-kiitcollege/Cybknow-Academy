import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
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
          Refund Policy
        </motion.h1>

        <p className="mb-6 text-lg text-gray-200">
          At <span className="font-semibold text-purple-400">Cybknow Academy</span>, we strive to provide a high-quality learning experience. Please carefully read our refund policy before making a purchase.
        </p>

        <Section title="🚫 Non-Refundable Policy">
          We follow a <span className="font-bold text-red-400">strict non-refundable policy</span> for all courses and services. Once enrolled, fees are non-refundable under any circumstances except in rare, eligible cases reviewed and approved by our team.
        </Section>

        <Section title="✅ Exceptions (If Applicable)">
          Refunds may be considered only when all of the following conditions are met:
          <ul className="list-disc list-inside space-y-2 mt-3 text-gray-300">
            <li>Refund is requested within <strong>2 days</strong> of enrollment.</li>
            <li>Course progress is below <strong>10%</strong>.</li>
            <li>No discounts or coupons were applied during the purchase.</li>
            <li>A valid reason is provided, reviewed by our team.</li>
          </ul>
        </Section>

        <Section title="📩 How to Request">
          If you meet the exception criteria, send an email to{" "}
          <a
            href="mailto:support@cybknow.com"
            className="text-purple-400 underline font-medium"
          >
            support@cybknow.com
          </a>{" "}
          with the following:
          <ul className="list-disc list-inside mt-3 text-gray-300 space-y-2">
            <li>Your full name</li>
            <li>Registered email ID</li>
            <li>Course name</li>
            <li>Reason for refund (clearly explained)</li>
          </ul>
        </Section>

        <Section title="⏳ Processing Timeline">
          If approved, the refund will be processed within{" "}
          <strong>5–7 business days</strong> to the original payment method.
          You will receive a confirmation email once it is successfully processed.
        </Section>

        <Section title="📞 Still Need Help?">
          For any questions or assistance, feel free to contact our team at{" "}
          <a
            href="mailto:support@cybknow.com"
            className="text-purple-400 underline font-medium"
          >
            support@cybknow.com
          </a>
          . We're always here to help!
        </Section>
      </motion.div>
    </div>
  );
};

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

export default RefundPolicy;
