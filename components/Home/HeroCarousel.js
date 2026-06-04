"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTypewriter from "./useTypewriter";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const phoneNumber = "919217924215";

const repaymentMessage =
  "Hi, I want my detailed Loan Repayment Schedule. Please guide me for Rs.99 service.";

/* SAME IMAGE FOR MOBILE + DESKTOP */
const slides = [
  {
    image: "/hero/mobile/hero1.jpg",
    title: "Instant Loan Approval in 24 Hours",
    desc: "Minimal paperwork. Quick verification. Fast disbursal with trusted banking partners.",
    btn: "Apply Now",
    href: "/apply-loan",
  },
  {
    image: "/hero/mobile/hero2.jpg",
    title: "Check Your Credit Score for Free",
    desc: "Get your instant CIBIL score report with zero hidden charges and fast access.",
    btn: "Check Now",
    href: "/check-free-credit-score",
  },
  {
    image: "/hero/mobile/hero4.jpg",
    title: "Get Your Re-Payment Schedule",
    desc: "Complete EMI breakdown & total interest insights. Only Rs.99 one-time service.",
    btn: "Chat on WhatsApp",
    href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      repaymentMessage
    )}`,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const typedTitle = useTypewriter(slides[current].title, 40);
  const typedDesc = useTypewriter(slides[current].desc, 18);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] md:h-screen overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >

          {/* IMAGE */}
          <Image
            src={slide.image}
            alt="Hero Banner"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

          {/* CONTENT */}
          {index === current && (
            <div className="absolute inset-0 z-20 flex items-center">

              <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                <div
                  className="
                    max-w-2xl
                    text-white
                    text-center
                    md:text-left
                    mx-auto
                    md:mx-0
                    pt-10
                    md:pt-0
                  "
                >

                  {/* TOP TAG */}
                  <div className="inline-flex items-center gap-2 bg-[#272361]/70 border border-white/10 px-4 py-2 rounded-full mb-5 backdrop-blur-md">

                    <div className="w-2 h-2 bg-[#f89328] rounded-full animate-pulse"></div>

                    <p className="text-[11px] sm:text-sm font-medium">
                      Trusted Financial Solutions
                    </p>

                  </div>

                  {/* TITLE */}
                  <h1
                    className="
                      text-[32px]
                      sm:text-[48px]
                      md:text-[60px]
                      lg:text-[70px]
                      font-extrabold
                      leading-[1.1]
                      mb-5
                      tracking-tight
                    "
                  >

                    {typedTitle}

                    <span className="text-[#f89328] animate-pulse">
                      |
                    </span>

                  </h1>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-[15px]
                      sm:text-lg
                      md:text-xl
                      text-white/90
                      leading-7
                      max-w-xl
                      mb-8
                      mx-auto
                      md:mx-0
                    "
                  >

                    {typedDesc}

                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                    {/* MAIN BUTTON */}
                    {slide.href.startsWith("http") ? (
                      <a
                        href={slide.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          gap-3
                          bg-[#f89328]
                          hover:bg-[#ff9d2f]
                          px-7
                          py-4
                          rounded-2xl
                          text-white
                          font-semibold
                          text-base
                          transition-all
                          duration-300
                          hover:scale-105
                          shadow-xl
                          w-full
                          sm:w-auto
                        "
                      >
                        {slide.btn}

                        {slide.btn.includes("WhatsApp") ? (
                          <FaWhatsapp className="text-lg" />
                        ) : (
                          <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                        )}

                      </a>
                    ) : (
                      <Link
                        href={slide.href}
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          gap-3
                          bg-[#f89328]
                          hover:bg-[#ff9d2f]
                          px-7
                          py-4
                          rounded-2xl
                          text-white
                          font-semibold
                          text-base
                          transition-all
                          duration-300
                          hover:scale-105
                          shadow-xl
                          w-full
                          sm:w-auto
                        "
                      >
                        {slide.btn}

                        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                      </Link>
                    )}

                    {/* CONTACT BUTTON */}
                    <Link
                      href="/contact"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-md
                        hover:bg-white
                        hover:text-[#272361]
                        px-7
                        py-4
                        rounded-2xl
                        text-white
                        font-semibold
                        text-base
                        transition-all
                        duration-300
                        w-full
                        sm:w-auto
                      "
                    >
                      Contact Us
                    </Link>

                  </div>

                  {/* STATS */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-7 mt-10">

                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#f89328]">
                        5000+
                      </h3>

                      <p className="text-white/80 text-sm mt-2">
                        Happy Customers
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#f89328]">
                        24Hr
                      </h3>

                      <p className="text-white/80 text-sm mt-2">
                        Fast Approval
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#f89328]">
                        35+
                      </h3>

                      <p className="text-white/80 text-sm mt-2">
                        Banking Partners
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          )}
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-[#f89328]"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          />

        ))}

      </div>

    </section>
  );
}