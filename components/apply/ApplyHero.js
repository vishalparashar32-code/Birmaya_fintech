export default function ApplyHero() {
  return (
   <section className="relative overflow-hidden bg-[#272361] py-20 sm:py-24 md:py-28">

  {/* Background Circles */}
  <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>

  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f28c28]/20 rounded-full blur-3xl"></div>

  {/* Animated Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_5s_linear_infinite]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Heading */}
    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">

      Apply For A
      <span className="text-[#f28c28]">
        {" "}Loan
      </span>

    </h1>

    {/* Underline */}
    <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-6"></div>

    {/* Description */}
    <p className="mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto">

      Fill out the application form and our loan experts
      will contact you quickly with the best financial solutions.

    </p>

 

  </div>

</section>
  );
}
