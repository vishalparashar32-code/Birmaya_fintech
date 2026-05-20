"use client";

import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#f8f9ff] via-white to-[#fff4e8] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16">

       

          {/* Main Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight">

            <span className="text-[#272361]">
              Mission &
            </span>

            <span className="text-[#f28c28]">
              {" "}Vision
            </span>

          </h2>

          {/* Underline */}
          <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-5"></div>

          {/* Description */}
          <p className="mt-7 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-7 sm:leading-8">
            We are committed to helping individuals and businesses achieve
            financial growth with trust, transparency, and innovation.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MISSION CARD */}
          <div className="group relative overflow-hidden rounded-[32px] bg-white border border-[#272361]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* Top Border */}
            <div className="h-2 w-full bg-[#272361]"></div>

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#272361]/5 rounded-full blur-3xl"></div>

            <div className="p-8 sm:p-10 relative z-10">

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-[#272361] text-white text-3xl shadow-lg group-hover:scale-110 transition duration-500">

                <FaBullseye />

              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#272361] mt-8">
                Our Mission
              </h3>

              {/* Underline */}
              <div className="w-16 h-1 bg-[#f28c28] rounded-full mt-4"></div>

              {/* Text */}
              <p className="text-gray-600 leading-8 text-sm sm:text-base mt-6">
                To provide fast, transparent, and customized financial
                solutions that meet every client’s unique needs while ensuring
                trust, simplicity, and customer satisfaction.
              </p>

            </div>

          </div>

          {/* VISION CARD */}
          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#272361] to-[#1b174f] shadow-2xl hover:shadow-[0_20px_60px_rgba(39,35,97,0.35)] transition-all duration-500 hover:-translate-y-2">

            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#f28c28]/20 rounded-full blur-3xl"></div>

            <div className="p-8 sm:p-10 relative z-10">

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md text-[#f28c28] text-3xl border border-white/10 shadow-lg group-hover:rotate-6 transition duration-500">

                <FaEye />

              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mt-8">
                Our Vision
              </h3>

              {/* Underline */}
              <div className="w-16 h-1 bg-[#f28c28] rounded-full mt-4"></div>

              {/* Text */}
              <p className="text-white/80 leading-8 text-sm sm:text-base mt-6">
                To become a trusted financial partner empowering every
                individual and business to achieve their dreams through
                innovative and reliable financial services.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}