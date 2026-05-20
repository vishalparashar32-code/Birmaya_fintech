"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How fast can I get loan approval?",
    a: "Most loans are approved within 24–48 hours after document verification.",
  },
  {
    q: "Do you charge any hidden fees?",
    a: "No. We follow a completely transparent process with no hidden charges.",
  },
  {
    q: "Which documents are required?",
    a: "Basic KYC, income proof and bank statements are usually required.",
  },
  {
    q: "Can I apply with low CIBIL score?",
    a: "Yes, we work with multiple banks & NBFCs to find the best options.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-4xl md:text-4xl font-bold leading-tight text-center relative inline-block">

            <span className="text-[#272361]">
              Frequently Asked
            </span>

            <span className="text-[#f28c28]">
              {" "}Questions
            </span>
          </h2>

          <div className="w-28 h-1 bg-[#f89328] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Find quick answers to common loan and finance related queries.
          </p>

        </div>

        {/* FAQ */}
        <div className="space-y-5">

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#f89328] cursor-pointer ${isOpen
                    ? "border-[#f89328] bg-white"
                    : "border-gray-200 bg-white"
                  }`}
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between gap-5 text-left p-6 md:p-7 cursor-pointer"
                >

                  {/* QUESTION TEXT */}
                  <h4
                    className={`text-lg md:text-xl font-semibold transition-all duration-300 ${isOpen ? "text-[#f89328]" : "text-black"
                      }`}
                  >
                    {faq.q}
                  </h4>

                  {/* ICON */}
                  <div
                    className={`min-w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-[#f89328] text-white rotate-180"
                        : "bg-gray-100 text-black"
                      }`}
                  >
                    {isOpen ? (
                      <FiMinus size={22} />
                    ) : (
                      <FiPlus size={22} />
                    )}
                  </div>

                </button>

                {/* ANSWER */}
                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >

                      <div className="px-6 md:px-7 pb-7 pt-5 border-t border-gray-200 text-black text-lg leading-8">

                        {faq.a}

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}