"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";

import {
  FaUser,
  FaBriefcase,
  FaHome,
  FaCar,
  FaBuilding,
  FaChartLine,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

import { loanDetails } from "@/data/loanDetails";

const iconMap = {
  "personal-loan": FaUser,
  "business-loan": FaBriefcase,
  "home-loan": FaHome,
  "auto-loan": FaCar,
  "loan-against-property": FaBuilding,
  "loan-against-shares": FaChartLine,
  "education-loan": FaGraduationCap,
};

export default function LoanProducts() {
  const scrollRef = useRef(null);

  const loans = useMemo(
    () => [...loanDetails, ...loanDetails],
    []
  );

  useEffect(() => {
    const container = scrollRef.current;

    let animationFrame;

    const autoScroll = () => {
      if (container) {

        container.scrollLeft += 1.5;

        if (
          container.scrollLeft >=
          container.scrollWidth / 2
        ) {
          container.scrollLeft = 0;
        }

        animationFrame = requestAnimationFrame(autoScroll);
      }
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);

  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff7ef] via-white to-[#f5f8ff] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">

      

          <h2 className="text-4xl md:text-3xl font-bold text-black leading-tight">
            Our Loan
            <span className="text-[#f89328]"> Products</span>
          </h2>

          <div className="w-28 h-1 bg-[#f89328] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-8">
            Simple, fast and reliable loan solutions designed
            for every personal and business need.
          </p>

        </div>

        {/* SLIDER WRAPPER */}
        <div className="bg-white/70 backdrop-blur-sm border border-white rounded-[35px] p-5 md:p-7 overflow-hidden">

          {/* SLIDER */}
          <div
            ref={scrollRef}
            className="flex gap-5 md:gap-7 overflow-x-scroll no-scrollbar"
          >

            {loans.map((loan, i) => {

              const Icon = iconMap[loan.slug] || FaUser;

              return (
                <Link
                  key={`${loan.slug}-${i}`}
                  href={`/services/${loan.slug}`}
                  className="
                  group
                  relative
                  min-w-[260px]
                  sm:min-w-[290px]
                  md:min-w-[330px]
                  rounded-[30px]
                  bg-white
                  border border-gray-100
                  p-6 md:p-8
                  overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#f89328]
                  "
                >

                  {/* TOP GRADIENT */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f89328] to-[#ffb869]"></div>

                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-[#fff4e8] flex items-center justify-center text-[#f89328] text-3xl mb-6 group-hover:bg-[#f89328] group-hover:text-white transition-all duration-300">

                    <Icon />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-black mb-4 leading-snug">

                    {loan.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-sm md:text-base leading-7 min-h-[90px]">

                    {loan.shortDesc}

                  </p>

                  {/* BUTTON */}
                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-[#f89328] font-semibold text-sm md:text-base">
                      Explore Details
                    </span>

                    <div className="w-11 h-11 rounded-full bg-[#fff4e8] flex items-center justify-center text-[#f89328] group-hover:bg-[#f89328] group-hover:text-white transition-all duration-300">

                      <FaArrowRight />

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}