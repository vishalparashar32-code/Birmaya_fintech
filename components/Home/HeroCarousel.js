"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTypewriter from "./useTypewriter";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const phoneNumber = "919217924215";

const repaymentMessage =
  "Hi, I want my detailed Loan Repayment Schedule. Please guide me for Rs.99 service.";

const slides = [
  {
    desktop: "/hero/hero1.png",
    mobile: "/hero/mobile/hero1-mobile.png",
    title: "Instant Loan Approval in 24 Hours",
    desc: "Minimal paperwork. Quick verification. Fast disbursal with trusted banking partners.",
    btn: "Apply Now",
    href: "/apply-loan",
  },
  {
    desktop: "/hero/hero2.png",
    mobile: "/hero/mobile/hero2-mobile.png",
    title: "Check Your Credit Score for Free",
    desc: "Get your instant CIBIL score report with zero hidden charges and fast access.",
    btn: "Check Now",
    href: "/check-free-credit-score",
  },
  {
    desktop: "/hero/hero5.png",
    mobile: "/hero/mobile/hero5-mobile.png",
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
  const [isMobile, setIsMobile] = useState(false);

  const typedTitle = useTypewriter(slides[current].title, 40);
  const typedDesc = useTypewriter(slides[current].desc, 18);

  /* MOBILE CHECK */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden font-sans">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >

          {/* IMAGE */}
          <Image
            src={isMobile ? slide.mobile : slide.desktop}
            alt="hero"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* CONTENT */}
          {index === current && (
            <div className="absolute inset-0 z-20 flex items-center">

              <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-10">

                <div className="max-w-2xl text-white">

                  {/* TOP TAG */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-5">

                    <div className="w-2 h-2 bg-[#f89328] rounded-full animate-pulse"></div>

                    <p className="text-sm font-medium tracking-wide">
                      Trusted Financial Solutions
                    </p>

                  </div>

                  {/* TITLE */}
                  <h1 className="text-[28px] sm:text-[38px] md:text-[10px] lg:text-[40px] font-bold leading-[1.1] mb-5 tracking-tight max-w-[700px]">

                    {typedTitle}

                    <span className="text-[#f89328] animate-pulse">
                      |
                    </span>

                  </h1>

                  {/* DESCRIPTION */}
                  <p className="text-base md:text-lg text-white/85 leading-7 max-w-xl mb-8 font-normal">

                    {typedDesc}

                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4">

                    {/* MAIN BUTTON */}
                    {slide.href.startsWith("http") ? (
                      <a
                        href={slide.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 bg-[#f89328] hover:bg-[#e67e12] px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-105"
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
                        className="group inline-flex items-center justify-center gap-3 bg-[#f89328] hover:bg-[#e67e12] px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-105"
                      >
                        {slide.btn}

                        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                      </Link>
                    )}

                    {/* SECOND BUTTON */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300"
                    >
                      Contact Us
                    </Link>

                  </div>

                  {/* STATS */}
                  <div className="flex flex-wrap gap-7 mt-12">

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#f89328]">
                        5000+
                      </h3>
                      <p className="text-white/70 text-sm mt-1">
                        Happy Customers
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#f89328]">
                        24Hr
                      </h3>
                      <p className="text-white/70 text-sm mt-1">
                        Fast Approval
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#f89328]">
                        35+
                      </h3>
                      <p className="text-white/70 text-sm mt-1">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-[#f89328]"
                : "w-3 h-3 bg-white/40 hover:bg-white"
            }`}
          />

        ))}

      </div>

    </section>
  );
}