"use client";

export default function ContactHero() {
  return (
   <section className="relative overflow-hidden bg-[#272361] py-20 sm:py-24 md:py-28">

  {/* Animated Background Circles */}
  <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#f28c28]/20 rounded-full animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f28c28]/10 rounded-full animate-pulse"></div>

  {/* Animated Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_5s_linear_infinite]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Heading */}
    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-[zoomIn_4s_ease-in-out_infinite]">

      Contact
      <span className="text-[#f28c28]">
        {" "}Us
      </span>

    </h1>

    {/* Line */}
    <div className="w-24 h-1 bg-[#f28c28] rounded-full mx-auto mt-6"></div>

    {/* Description */}
    <p className="mt-6 text-white/85 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">

      We’re here to assist you with all your financial needs.
      Reach out to our team for support, guidance,
      or any inquiries.

    </p>


  </div>

</section>
  );
}