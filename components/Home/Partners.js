"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  "/partners/hdfc.jpg",
  "/partners/icici.jpg",
  "/partners/bajaj.jpg",
  "/partners/kotak.jpg",
  "/partners/tatacapital.jpg",
  "/partners/mahindra.jpg",
  "/partners/indusind.jpg",
  "/partners/idfcFirst.jpg",
  "/partners/gro.jpg",
  "/partners/iifl.jpg",
  "/partners/hero.jpg",
  "/partners/incred.png",
  "/partners/kreditBee.png",
  "/partners/l&t.jpg",
  "/partners/unity.jpg",
  "/partners/yesBank.jpg",
  "/partners/shriram.jpg",
  "/partners/muthoot.jpg",
  "/partners/protium.jpg",
  "/partners/poonawala.png",
  "/partners/piramal.jpg",
];

export default function Partners() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    let animationFrame;

    const autoScroll = () => {
      if (container) {

        container.scrollLeft += 1.8;

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
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff7ef] via-[#ffffff] to-[#f3f7ff] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-3xl font-bold text-black leading-tight">
            Trusted Banking &
            <span className="text-[#f89328]"> NBFC Partners</span>
          </h2>

          <div className="w-28 h-1 bg-[#f89328] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-8">
            We collaborate with India’s leading banks and NBFCs
            to provide trusted financial solutions.
          </p>

        </div>

        {/* SLIDER CONTAINER */}
        <div className="bg-white/70 backdrop-blur-sm border border-white rounded-[35px] p-5 md:p-7 overflow-hidden">

          {/* LOGO SLIDER */}
          <div
            ref={scrollRef}
            className="flex items-center gap-5 md:gap-7 overflow-x-scroll no-scrollbar"
          >

            {[...logos, ...logos].map((logo, i) => (

              <div
                key={i}
                className="group min-w-[150px] sm:min-w-[180px] md:min-w-[220px] h-[100px] md:h-[120px] bg-white border border-gray-100 rounded-3xl flex items-center justify-center px-6 transition-all duration-300 hover:border-[#f89328] hover:-translate-y-2"
              >

                <Image
                  src={logo}
                  alt="partner"
                  width={150}
                  height={70}
                  className="object-contain w-auto h-auto max-h-[55px] md:max-h-[65px] transition-all duration-300 group-hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}