"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-gradient-to-b from-[#f8f9ff] to-white py-14 sm:py-16 md:py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="group relative">

            {/* Border Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#272361] to-[#f28c28] rounded-[30px] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative overflow-hidden rounded-[30px] shadow-2xl border-4 border-white">

              <Image
                src="/about.jpg"
                alt="About"
                width={700}
                height={500}
                className="w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#272361]/40 via-transparent to-transparent"></div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Small Heading */}
            <span className="inline-block bg-[#272361]/10 text-[#272361] border border-[#272361]/10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              ABOUT BIRMAYA FINTECH
            </span>

            {/* Main Heading */}
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">

              <span className="text-[#272361]">
                Your Trusted Partner
              </span>

              <span className="text-[#f28c28] block mt-2">
                For Financial Solutions
              </span>

            </h2>

            {/* Underline */}
            <div className="w-28 h-1 bg-[#f28c28] rounded-full mt-6 mx-auto lg:mx-0"></div>

            {/* Description */}
            <p className="mt-7 text-sm sm:text-base md:text-lg text-gray-600 leading-7 sm:leading-8 max-w-2xl">
              Birmaya Fintech helps individuals and businesses get the best
              loan options from top banks and NBFCs across India. We simplify
              the complete loan process with transparency, expert guidance,
              and fast approvals.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-10 h-10 rounded-full bg-[#272361]/10 flex items-center justify-center">
                  <FaCheckCircle className="text-[#272361] text-lg" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  Fast & hassle-free loan approvals
                </p>

              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-10 h-10 rounded-full bg-[#f28c28]/10 flex items-center justify-center">
                  <FaCheckCircle className="text-[#f28c28] text-lg" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  Trusted banking & NBFC partners
                </p>

              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-10 h-10 rounded-full bg-[#272361]/10 flex items-center justify-center">
                  <FaCheckCircle className="text-[#272361] text-lg" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  Complete transparency with expert guidance
                </p>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                href="/services"
                className="bg-[#272361] hover:bg-[#1d1a52] text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300 shadow-lg hover:shadow-2xl text-center"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="border-2 border-[#f28c28] text-[#f28c28] hover:bg-[#f28c28] hover:text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300 text-center"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}