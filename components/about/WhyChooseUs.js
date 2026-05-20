"use client";

import {
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaHandshake,
  FaUserTie,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClock />,
    title: "Fast Loan Approval",
    desc: "We ensure quick processing and fast approvals to save your valuable time.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure Process",
    desc: "Your personal and financial information is fully protected with us.",
  },
  {
    icon: <FaBolt />,
    title: "Minimal Paperwork",
    desc: "Simple documentation and hassle-free loan processing experience.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Bank Partners",
    desc: "We collaborate with India's top banks and NBFCs to get the best offers.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Guidance",
    desc: "Our loan experts guide you at every step of the loan journey.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    desc: "Our support team is always ready to help you whenever you need.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f8f9ff] py-14 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">

            <span className="text-[#272361]">
              Why Choose
            </span>

            <span className="text-[#f28c28]">
              {" "}Birmaya Fintech
            </span>

          </h2>

          {/* Underline */}
          <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-5"></div>

          {/* Description */}
          <p className="text-gray-600 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7 sm:leading-8">
            We make loan processing simple, fast and transparent
            so you can focus on what matters most.
          </p>

        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-7 sm:p-8 rounded-3xl border border-[#272361]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#272361]/10 text-[#272361] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#f28c28] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#272361] mb-4">
                {item.title}
              </h3>

              {/* Line */}
              <div className="w-14 h-1 bg-[#f28c28] rounded-full mb-5"></div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}