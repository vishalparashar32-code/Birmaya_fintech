import Link from "next/link";
import {
  FaHome,
  FaCar,
  FaBriefcase,
  FaUser,
  FaBuilding,
  FaChartLine,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

import { loanDetails } from "@/data/loanDetails";

const iconMap = {
  "personal-loan": FaUser,
  "business-loan": FaBriefcase,
  "home-loan": FaHome,
  "auto-loan": FaCar,
  "loan-against-property": FaBuilding,
  "loan-against-shares": FaChartLine,
  "education-loan": FaGraduationCap,
};

export default function ServicesGrid() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f8f9ff] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-4xl font-bold leading-tight">

            <span className="text-[#272361]">
              Our
            </span>

            <span className="text-[#f28c28]">
              {" "}Loan Services
            </span>

          </h2>

          {/* Underline */}
          <div className="w-32 h-1 bg-[#f28c28] rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-7">
            Explore our wide range of financial solutions designed
            to help individuals and businesses achieve their goals faster.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {loanDetails.map((service) => {
            const Icon = iconMap[service.slug] || FaUser;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white rounded-[30px] p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#272361]/5 via-transparent to-[#f28c28]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Top Icon */}
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#272361] to-[#1c184d] flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-500">

                  <Icon />

                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">

                  <h3 className="text-2xl font-bold text-[#272361] group-hover:text-[#f28c28] transition duration-300">

                    {service.title}

                  </h3>

                  <p className="text-gray-600 mt-4 leading-7 line-clamp-3">

                    {service.shortDesc}

                  </p>

                  {/* Button */}
                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-[#f28c28] font-semibold flex items-center gap-3 group-hover:gap-5 transition-all duration-300">

                      Read Details

                      <FaArrowRight className="text-sm" />

                    </span>

                  </div>

                </div>

                {/* Bottom Border Hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#272361] to-[#f28c28] group-hover:w-full transition-all duration-500"></div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}