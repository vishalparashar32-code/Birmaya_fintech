"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutIntro() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="group">

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/about.jpg"
                alt="About"
                width={700}
                height={500}
                className="w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Small Heading */}
            <span className="inline-block bg-[#f89328]/10 text-[#f89328] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              ABOUT BIRMAYA FINTECH
            </span>

            {/* Main Heading */}
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-3xl font-bold text-black leading-tight">
              Your Trusted Partner For
              <span className="text-[#f89328] block sm:inline">
                {" "}Financial Solutions
              </span>
            </h2>

            {/* Underline */}
            <div className="w-24 h-1 bg-[#f89328] rounded-full mt-5 mx-auto lg:mx-0"></div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-500 leading-7 sm:leading-8">
              Birmaya Fintech helps individuals and businesses get the best
              loan options from top banks and NBFCs across India. We simplify
              the complete loan process with transparency, expert guidance,
              and fast approvals.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaCheckCircle className="text-[#f89328] text-lg" />

                <p className="text-gray-700 text-sm sm:text-base">
                  Fast & hassle-free loan approvals
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaCheckCircle className="text-[#f89328] text-lg" />

                <p className="text-gray-700 text-sm sm:text-base">
                  Trusted banking & NBFC partners
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaCheckCircle className="text-[#f89328] text-lg" />

                <p className="text-gray-700 text-sm sm:text-base">
                  Complete transparency with expert guidance
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="bg-[#f89328] hover:opacity-90 cursor-pointer text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300">
                Explore Services
              </button>

              <button className="border-2 border-[#f89328] text-[#f89328] hover:bg-[#f89328] hover:text-white cursor-pointer px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}