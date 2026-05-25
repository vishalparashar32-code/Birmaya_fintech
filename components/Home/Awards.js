"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  {
    image: "/awards/image.png",
    date: "Moments with Vikash Bajaj Sir",
  },
  {
    image: "/awards/image1.jpg",
    date: "Honored By Protium Finance",
  },
  {
    image: "/awards/image2.jpg",
    date: "CAIRO 2026",
  },
  {
    image: "/awards/image3.jpg",
    date: "IIFL Excellence Award 2024-25",
  },
  {
    image: "/awards/image4.jpg",
    date: "IDFC Best Channel Partner Award",
  },
  {
    image: "/awards/image5.jpg",
    date: "Protium Finance Award ",
  },
  {
    image: "/awards/image6.jpg",
    date: "IIFL Excellence Award 2024-25",
  },
  {
    image: "/awards/image7.jpg",
    date: "Credit Saioson Arigato 2025",
  },
  {
    image: "/awards/image8.jpeg",
    date: " Egpyt Trip  2026",
  },
];

export default function Awards() {
  return (
    <section className="py-10 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-4xl font-bold leading-tight">
            <span className="text-[#272361]">
              Awards &
            </span>

            <span className="text-[#f28c28]">
              {" "}Certifications
            </span>
          </h2>

          <div className="w-28 h-1 bg-[#f89328] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Recognized for excellence and trusted by thousands of happy customers.
          </p>

        </div>

        {/* SLIDER */}
        <div className="overflow-hidden relative">

          <motion.div
            className="flex gap-5 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >

            {[...awards, ...awards].map((award, i) => (

              <motion.div
                key={i}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-white border border-gray-200 hover:border-[#f89328] rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-[240px] md:h-[280px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#F7F9FC]">

                  <Image
                    src={award.image}
                    alt="award"
                    width={280}
                    height={280}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                </div>

                {/* DATE */}
                <div className="mt-5 text-center">

                  <p className="text-[#f89328] font-semibold text-lg">
                  {award.date}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}