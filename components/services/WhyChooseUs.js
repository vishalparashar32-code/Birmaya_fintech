import {
  FaClock,
  FaShieldAlt,
  FaBolt,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClock />,
    title: "Fast Approval",
    desc: "Get your loan approved quickly with a smooth and hassle-free process.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure",
    desc: "Your personal and financial information stays fully protected with us.",
  },
  {
    icon: <FaBolt />,
    title: "Minimal Paperwork",
    desc: "Simple documentation process that saves your time and effort.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Partners",
    desc: "Partnered with leading banks and NBFCs for better loan solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#f8f9ff] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-4xl font-bold leading-tight">

            <span className="text-[#272361]">
              Why Choose
            </span>

            <span className="text-[#f28c28]">
              {" "}Birmaya Fintech
            </span>

          </h2>

          {/* Single Underline */}
          <div className="w-32 h-1 bg-[#f28c28] rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-7">
            We make your financial journey simple,
            secure, and faster with trusted loan services.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-[30px] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
              
              ${
                index === 1
                  ? "bg-[#272361] text-white"
                  : index === 3
                  ? "bg-gradient-to-br from-[#f28c28] to-[#e67e18] text-white"
                  : "bg-white border border-gray-100 shadow-lg"
              }`}
            >

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

              {/* Top Border */}
              {index === 0 && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#272361]"></div>
              )}

              {index === 2 && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#f28c28]"></div>
              )}

              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl shadow-lg transition duration-500 group-hover:scale-110
                  
                  ${
                    index === 1 || index === 3
                      ? "bg-white/10 text-white backdrop-blur-md"
                      : index === 0
                      ? "bg-[#272361] text-white"
                      : "bg-[#f28c28] text-white"
                  }`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="mt-8 relative z-10">

                <h3
                  className={`text-2xl font-bold
                  
                  ${
                    index === 1 || index === 3
                      ? "text-white"
                      : "text-[#272361]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-4 leading-7
                  
                  ${
                    index === 1
                      ? "text-white/80"
                      : index === 3
                      ? "text-white/90"
                      : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}