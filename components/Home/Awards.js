"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const awards = [
  {
    image: "/awards/image.png",
    date: "2020",
  },
  {
    image: "/awards/image1.jpg",
    date: "2021",
  },
  {
    image: "/awards/image2.jpg",
    date: "2021",
  },
  {
    image: "/awards/image3.jpg",
    date: "2022",
  },
  {
    image: "/awards/image4.jpg",
    date: "2022",
  },
  {
    image: "/awards/image5.jpg",
    date: "2023",
  },
  {
    image: "/awards/image6.jpg",
    date: "2023",
  },
  {
    image: "/awards/image7.jpg",
    date: "2024",
  },
  {
    image: "/awards/image8.jpeg",
    date: "2025",
  },
];

export default function Awards() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += 1;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-3xl font-bold text-black leading-tight">
            Awards &
            <span className="text-[#f89328]"> Certifications</span>
          </h2>

          <div className="w-28 h-1 bg-[#f89328] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Recognized for excellence and trusted by thousands of happy customers.
          </p>

        </div>

        {/* AUTO SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >

          {[...awards, ...awards].map((award, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-white border border-gray-200 hover:border-[#f89328] rounded-3xl p-5 transition-all duration-300 hover:scale-[1.04]"
            >

              {/* IMAGE */}
              <div className="relative h-[240px] md:h-[280px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#F7F9FC]">

                <Image
                  src={award.image}
                  alt="award"
                  width={280}
                  height={280}
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                />

              </div>

              {/* DATE */}
              <div className="mt-5 text-center">

                <p className="text-[#f89328] font-semibold text-lg">
                  Awarded in {award.date}
                </p>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}