"use client";
import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Box */}
        <div className="relative overflow-hidden rounded-[32px] bg-black px-6 sm:px-10 md:px-14 py-12 sm:py-14 md:py-16">

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#f89328]/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">

              {/* Heading */}
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-3xl font-bold text-white leading-tight">
                Need Help Choosing
                <span className="text-[#f89328]">
                  {" "}The Right Loan?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
                Our experts help you compare loan options and guide
                you through the complete process with transparency
                and quick approvals.
              </p>

            </div>

            {/* Right Buttons */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-end gap-4">

              <Link
                href="/contact"
                className="inline-block bg-[#f89328] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-xl"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}