"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#ffffff_0%,#ffffff_40%,#fff8f1_100%)]"></div>

      {/* Orange Circle */}
      <div className="absolute -bottom-28 -left-28 sm:-bottom-36 sm:-left-36 lg:-bottom-40 lg:-left-40 h-60 w-60 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-[#f89328] opacity-95"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col lg:flex-row items-center gap-12 lg:gap-20 px-5 sm:px-8">

        {/* LEFT */}
        <div className="flex-1">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-[#15235d]">Our</span>
            <span className="text-[#f89328]"> Story</span>
          </h1>

          <div className="mt-5 h-1 w-28 sm:w-36 rounded-full bg-[#15235d]">
            <div className="h-1 w-10 sm:w-14 rounded-full bg-[#f89328]"></div>
          </div>

          <div className="mt-8 flex items-center gap-3">

            <div className="h-10 sm:h-12 w-1 rounded bg-[#f89328]"></div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15235d]">
              A Dream Takes Root
            </h3>

          </div>

          <p className="mt-8 text-base sm:text-lg leading-8 sm:leading-9 text-gray-700">

            In 2024, a dream began to take shape in the heart of

            <span className="font-semibold text-[#15235d]">
              {" "}Vishal Parashar.
            </span>

            Armed with experience and a passion for helping people,
            he envisioned creating a trusted financial company that
            makes loan approvals easier, faster, and more transparent.

          </p>

          <p className="mt-6 text-base sm:text-lg leading-8 sm:leading-9 text-gray-700">

            That vision became

            <span className="font-semibold text-[#f89328]">
              {" "}Birmaya Fintech.
            </span>

            Today we proudly help individuals and businesses secure
            Personal Loans, Business Loans, Home Loans and Loan
            Against Property through trusted banking partners.

          </p>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative flex-1 flex justify-center mt-10 lg:mt-0 w-full">

          <div className="relative w-[280px] h-[370px] sm:w-[360px] sm:h-[470px] md:w-[430px] md:h-[560px] lg:w-[520px] lg:h-[660px]">

            {/* Blue Border */}

            <div className="absolute left-0 top-0 w-[90%] h-[92%] rounded-[30px] border-[6px] sm:border-[8px] lg:border-[10px] border-[#1f2b73] z-10"></div>

            {/* Orange Border */}

            <div className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-8 lg:top-8 w-[90%] h-[92%] rounded-[30px] border-[6px] sm:border-[8px] lg:border-[10px] border-[#f89328] z-0"></div>

            {/* Image */}

            <div className="absolute left-3 top-3 sm:left-4 sm:top-4 lg:left-5 lg:top-5 w-[82%] h-[86%] rounded-[24px] overflow-hidden shadow-2xl bg-white z-20">

              <Image
                src="/about/v1.jpeg"
                alt="Vishal Parashar"
                fill
                priority
                className="object-cover object-top"
              />

            </div>

            {/* Name Card */}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1f2b73] rounded-full px-6 sm:px-10 lg:px-13 py-3 sm:py-5 shadow-2xl w-[240px] sm:w-[300px] lg:min-w-[350px] z-30">

              <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-center text-white">
                Vishal Parashar
              </h3>

              <p className="text-[#f89328] text-sm sm:text-lg lg:text-xl text-center font-semibold mt-1">
             MD, FOUNDER & CEO  
              </p>

            </div>

            {/* Arrow */}

            <button className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 h-14 w-14 rounded-full bg-[#1f2b73] items-center justify-center text-white shadow-xl hover:bg-[#f89328] transition">

              <HiArrowRight size={26} />

            </button>

          </div>

        </div>

      </div>

      {/* WhatsApp */}

      <a
        href="#"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl z-50"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>

    </section>
  );
}