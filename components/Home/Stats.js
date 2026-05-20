"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaUniversity,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: 5000,
    label: "Happy Customers",
  },
  {
    icon: <FaCheckCircle />,
    number: 12000,
    label: "Disbursed Amount",
  },
  {
    icon: <FaUniversity />,
    number: 35,
    label: "Partner Banks",
  },
  {
    icon: <FaAward />,
    number: 10,
    label: "Years Of Excellence",
  },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  /* START COUNT WHEN SECTION COMES IN VIEW */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !hasAnimated.current) {

          hasAnimated.current = true;

          let start = 0;

          const interval = setInterval(() => {

            start++;

            setCounts(
              stats.map((stat) =>
                Math.min(
                  Math.floor((stat.number / 80) * start),
                  stat.number
                )
              )
            );

            if (start >= 80) {
              clearInterval(interval);
            }

          }, 30);

        }

        /* RESET WHEN OUT OF VIEW */
        if (!entry.isIntersecting) {
          hasAnimated.current = false;
          setCounts(stats.map(() => 0));
        }

      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e293b] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative"
            >

              {/* ICON */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 md:mb-5 rounded-full bg-[#f89328]/10 border border-[#f89328]/30 flex items-center justify-center text-2xl sm:text-3xl text-[#f89328] group-hover:scale-110 group-hover:bg-[#f89328] group-hover:text-white transition-all duration-300">

                {stat.icon}

              </div>

              {/* COUNT */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-white tracking-tight leading-tight">

                {counts[i]}
                {stat.number === 12000 ? "cr+" : "+"}

              </h3>

              {/* LABEL */}
              <p className="text-white/70 text-xs sm:text-sm md:text-base tracking-wide leading-6 px-2">
                {stat.label}
              </p>

              {/* BOTTOM LINE */}
              <div className="w-12 sm:w-16 h-[2px] bg-[#f89328] mx-auto mt-4 md:mt-5 rounded-full opacity-70"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}