import { FaClock, FaBolt, FaShieldAlt } from "react-icons/fa";

export default function ApplyBenefits() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f8f9ff] to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold leading-tight">

            <span className="text-[#272361]">
              Why People
            </span>

            <span className="text-[#f28c28]">
              {" "}Choose Us
            </span>

          </h2>

          {/* Underline */}
          <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-7">
            We provide quick, secure and hassle-free loan services
            with trusted financial support for every customer.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative bg-white rounded-[30px] p-8 border border-[#272361]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">

            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#272361]"></div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-[#272361]/10 text-[#272361] flex items-center justify-center text-3xl mx-auto group-hover:bg-[#272361] group-hover:text-white transition-all duration-500">

              <FaClock />

            </div>

            {/* Content */}
            <div className="mt-8 text-center">

              <h3 className="text-2xl font-bold text-[#272361]">
                Quick Approval
              </h3>

              <div className="w-16 h-1 bg-[#f28c28] rounded-full mx-auto mt-4 mb-5"></div>

              <p className="text-gray-600 leading-7">
                Get loan approval within 24–48 hours
                with fast and smooth processing.
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#272361] rounded-[30px] p-8 shadow-2xl overflow-hidden hover:-translate-y-2 transition duration-500">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center text-3xl mx-auto group-hover:rotate-6 transition duration-500">

              <FaBolt />

            </div>

            {/* Content */}
            <div className="mt-8 text-center relative z-10">

              <h3 className="text-2xl font-bold text-white">
                Minimal Documentation
              </h3>

              <div className="w-16 h-1 bg-[#f28c28] rounded-full mx-auto mt-4 mb-5"></div>

              <p className="text-white/80 leading-7">
                Simple and hassle-free process
                with minimal paperwork required.
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-[30px] p-8 border border-[#f28c28]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">

            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#f28c28]"></div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-[#f28c28]/10 text-[#f28c28] flex items-center justify-center text-3xl mx-auto group-hover:bg-[#f28c28] group-hover:text-white transition-all duration-500">

              <FaShieldAlt />

            </div>

            {/* Content */}
            <div className="mt-8 text-center">

              <h3 className="text-2xl font-bold text-[#272361]">
                100% Secure
              </h3>

              <div className="w-16 h-1 bg-[#272361] rounded-full mx-auto mt-4 mb-5"></div>

              <p className="text-gray-600 leading-7">
                Your personal and financial
                data remains completely safe.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
