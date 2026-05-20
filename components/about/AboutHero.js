"use client";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f89328] py-20 sm:py-24 md:py-28">

      {/* Animated Background Circles */}
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-white/10 rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full animate-pulse"></div>

      {/* Animated Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_5s_linear_infinite]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-[zoomIn_4s_ease-in-out_infinite]">

          About
          <span className="text-black">
            {" "}Birmaya Fintech
          </span>

        </h1>

        {/* Line */}
        <div className="w-24 h-1 bg-white rounded-full mx-auto mt-6"></div>

        {/* Description */}
        <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto">
          Helping individuals and businesses get fast,
          reliable and transparent loan solutions with
          trusted financial services across India.
        </p>

      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

    </section>
  );
}