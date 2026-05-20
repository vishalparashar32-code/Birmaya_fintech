"use client";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#272361] via-[#1d1a52] to-[#f28c28] py-20 sm:py-24 md:py-28">

      {/* Background Blur Effects */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#f28c28]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Animated Circles */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-white/10 rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 left-10 w-52 h-52 border border-[#f28c28]/20 rounded-full animate-pulse"></div>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_6s_linear_infinite]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">

          About
          <span className="text-[#f28c28]">
            {" "}Birmaya Fintech
          </span>

        </h1>

        {/* Underline */}
        <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-6"></div>

        {/* Description */}
        <p className="mt-8 text-white/85 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">
          Helping individuals and businesses get fast,
          reliable, and transparent loan solutions with
          trusted financial services across India.
        </p>

      </div>

    </section>
  );
}