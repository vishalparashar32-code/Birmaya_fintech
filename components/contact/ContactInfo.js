"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f4f3ff] via-white to-[#fff7ef] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="text-center mb-16">
          {/* Heading */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-4xl font-bold leading-tight inline-block relative">

            <span className="text-[#272361]">Get In</span>

            <span className="text-[#f28c28]"> Touch</span>

            {/* Orange Underline */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] w-32 h-1 bg-[#f28c28] rounded-full"></span>

          </h2>

        
          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-8 text-lg">

            Have questions about loans or financial services?
            Our team is always ready to help and guide you.

          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Contact Cards */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="group bg-white p-7 rounded-[28px] shadow-lg border border-[#272361]/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#272361] to-[#f28c28]"></div>

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#272361] to-[#f28c28] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-[#272361] mb-2">
                    Call Us
                  </h4>

                  <p className="text-gray-600 leading-7 text-lg">
                    +91 8287868048 <br />
                    +91 9217924215
                  </p>

                </div>

              </div>

            </div>

            {/* Email */}
            <div className="group bg-white p-7 rounded-[28px] shadow-lg border border-[#272361]/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#272361] to-[#f28c28]"></div>

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#272361] to-[#f28c28] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg">

                  <FaEnvelope />

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-[#272361] mb-2">
                    Email Us
                  </h4>

                  <p className="text-gray-600 leading-7 break-all text-lg">
                    birmayafintech@gmail.com
                  </p>

                </div>

              </div>

            </div>

            {/* Office */}
            <div className="group bg-white p-7 rounded-[28px] shadow-lg border border-[#272361]/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#272361] to-[#f28c28]"></div>

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#272361] to-[#f28c28] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-[#272361] mb-2">
                    Office Address
                  </h4>

                  <p className="text-gray-600 leading-7 text-lg">
                    Birmaya Fintech Pvt Ltd <br />
                    F-01, First Floor, D-36, Sector-2, Noida <br />
                    G.B Nagar, U.P - 201301
                  </p>

                </div>

              </div>

            </div>

            {/* Working Hours */}
            <div className="group bg-white p-7 rounded-[28px] shadow-lg border border-[#272361]/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#272361] to-[#f28c28]"></div>

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#272361] to-[#f28c28] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg">

                  <FaClock />

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-[#272361] mb-2">
                    Working Hours
                  </h4>

                  <p className="text-gray-600 leading-7 text-lg">
                    Mon – Sat : 10:00 AM – 7:00 PM <br />
                    Sunday : Closed
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side - Google Map */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#272361]/20 to-[#f28c28]/20 blur-3xl rounded-[40px]"></div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-[35px] shadow-2xl border-4 border-white h-[550px]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.576770945629!2d77.31302527549893!3d28.58246907569207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzU2LjkiTiA3N8KwMTgnNTYuMiJF!5e0!3m2!1sen!2sin!4v1771226496993!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}