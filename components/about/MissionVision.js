"use client";

import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-14 sm:py-16 md:py-5 bg-gradient-to-b from-white to-[#fff7ef]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-14">
          {/* Main Heading */}
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-3xl font-bold text-black leading-tight">
            Mission &
            <span className="text-[#f89328]"> Vision</span>
          </h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-[#f89328] rounded-full mx-auto mt-5"></div>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7 sm:leading-8">
            We are committed to helping individuals and businesses achieve
            financial growth with trust, transparency, and innovation.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MISSION CARD */}
          <div className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#f89328]/10 hover:-translate-y-2">

            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#f89328]/10 text-[#f89328] text-2xl mb-6 group-hover:bg-[#f89328] group-hover:text-white transition-all duration-500">
              <FaBullseye />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Our Mission
            </h3>

            {/* Line */}
            <div className="w-16 h-1 bg-[#f89328] rounded-full mb-5"></div>

            {/* Text */}
            <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
              To provide fast, transparent, and customized financial
              solutions that meet every client’s unique needs while ensuring
              trust, simplicity, and customer satisfaction.
            </p>

          </div>

          {/* VISION CARD */}
          <div className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#f89328]/10 hover:-translate-y-2">

            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#f89328]/10 text-[#f89328] text-2xl mb-6 group-hover:bg-[#f89328] group-hover:text-white transition-all duration-500">
              <FaEye />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Our Vision
            </h3>

            {/* Line */}
            <div className="w-16 h-1 bg-[#f89328] rounded-full mb-5"></div>

            {/* Text */}
            <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
              To become a trusted financial partner empowering every
              individual and business to achieve their dreams through
              innovative and reliable financial services.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}