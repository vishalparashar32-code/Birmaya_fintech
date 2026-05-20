import {
  FaChartLine,
  FaUsers,
  FaLaptopHouse,
} from "react-icons/fa";

export default function WhyJoinUs() {
  return (
    <section className="relative py-24 bg-[#f8f9fc] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f28c1f]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold text-[#272361] leading-tight">
            Why Join
            <span className="text-[#f28c1f]"> Birmaya</span>
          </h2>

          {/* Line */}
          <div className="w-24 h-1 bg-[#f28c1f] rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-7 text-base sm:text-lg">
            Grow your career with a fintech company that
            values innovation, teamwork, and success.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white rounded-[30px] p-8 shadow-md border border-[#272361]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">

            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#f28c1f]"></div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-[#f28c1f]/10 flex items-center justify-center text-[#f28c1f] text-4xl mx-auto group-hover:scale-110 group-hover:rotate-6 transition duration-500">

              <FaChartLine />

            </div>

            {/* Content */}
            <div className="text-center mt-8">

              <h3 className="text-2xl font-bold text-[#272361]">
                Career Growth
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Fast learning environment with real growth
                opportunities and career development.
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-[30px] p-8 shadow-md border border-[#272361]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">

            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#272361]"></div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-[#272361]/10 flex items-center justify-center text-[#1f1b6d] text-4xl mx-auto group-hover:scale-110 group-hover:-rotate-6 transition duration-500">

              <FaUsers />

            </div>

            {/* Content */}
            <div className="text-center mt-8">

              <h3 className="text-2xl font-bold text-[#272361]">
                Friendly Culture
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Supportive teammates and a positive
                collaborative work environment.
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-[30px] p-8 shadow-md border border-[#272361]/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">

            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#f28c1f]"></div>

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-[#f28c1f]/10 flex items-center justify-center text-[#f28c1f] text-4xl mx-auto group-hover:scale-110 group-hover:rotate-6 transition duration-500">

              <FaLaptopHouse />

            </div>

            {/* Content */}
            <div className="text-center mt-8">

              <h3 className="text-2xl font-bold text-[#272361]">
                Work Flexibility
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Enjoy balanced work culture with flexibility
                and modern work practices.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}