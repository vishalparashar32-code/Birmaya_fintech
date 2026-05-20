import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServiceCTA from "@/components/services/ServiceCTA";
export default function ServicesPage() {
  return (
   <div>

  {/* HERO SECTION */}
  <section className="relative overflow-hidden bg-[#272361] py-20 sm:py-24 md:py-28">

    {/* Background Circles */}
    <div className="absolute -top-10 -left-10 w-52 h-52 bg-[#f28c28]/20 rounded-full animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>

    {/* Animated Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_5s_linear_infinite]"></div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      {/* Heading */}
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-[zoomIn_4s_ease-in-out_infinite]">

        Our Loan
        <span className="text-[#f28c28]">
          {" "}Services
        </span>

      </h1>

      {/* Single Underline */}
      <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-6"></div>

      {/* Description */}
      <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto">
        We provide fast, flexible, and reliable loan
        solutions designed to support your personal
        and business financial goals with ease.
      </p>

    </div>

  </section>

  {/* OTHER SECTIONS */}
  <ServicesGrid />

  <WhyChooseUs />

  <ServiceCTA />

</div>
  );
}
