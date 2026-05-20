"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-5 md:px-16 overflow-hidden">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

        {/* LEFT SECTION */}
        <div className="lg:col-span-4">

          <h2 className="text-4xl font-bold mb-5">
            BI<span className="text-[#f89328] text-5xl">₹</span>MAYA FINTECH
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8 max-w-md">
            Stay updated with latest loan offers, finance tips and business
            updates from Birmaya Fintech.
          </p>

          {/* EMAIL INPUT */}
          <div className="max-w-md">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent border-b border-gray-500 py-4 outline-none text-lg placeholder:text-gray-500 focus:border-[#f89328] transition"
            />

            <button className="mt-8 bg-white text-black hover:bg-[#f89328] hover:text-white transition-all duration-300 px-10 py-4 rounded-full text-xl font-semibold w-full">
              Subscribe
            </button>

          </div>
        </div>

        {/* MOBILE 2 COLUMN */}
        <div className="grid grid-cols-2 gap-10 lg:contents">

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-300 text-lg text-center md:text-left">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">

            <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Services
            </h4>

            <ul className="space-y-4 text-gray-300 text-lg text-center md:text-left">

              <li>Personal Loan</li>

              <li>Business Loan</li>

              <li>Home Loan</li>

              <li>Car Loan</li>

              <li>Loan Against Property</li>

            </ul>
          </div>

        </div>

        {/* CONTACT */}
        <div className="lg:col-span-3">

          <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Contact Info.
          </h4>

          <div className="space-y-6 text-gray-300 text-lg">

            {/* PHONE */}
            <div className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">

              <FaPhoneAlt className="text-[#f89328] mt-1 text-lg shrink-0" />

              <p>
                +91 8287868048
                <br />
                +91 9217924215
              </p>

            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">

              <FaEnvelope className="text-[#f89328] mt-1 text-lg shrink-0" />

              <p className="break-all">
                birmayafintech@gmail.com
              </p>

            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">

              <FaMapMarkerAlt className="text-[#f89328] mt-1 text-lg shrink-0" />

              <p>
                F-01, First Floor, D-36, Sector-2,
                <br />
                Noida, G.B Nagar, U.P - 201301
              </p>

            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start items-center gap-3 mt-10 flex-nowrap">

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f89328] hover:text-white transition-all duration-300 text-lg"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f89328] hover:text-white transition-all duration-300 text-lg"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f89328] hover:text-white transition-all duration-300 text-lg"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#f89328] hover:text-white transition-all duration-300 text-lg"
            >
              <FaTwitter />
            </a>

          </div>
        </div>
      </div>

      {/* BORDER */}
      <div className="mt-12 border-b-[3px] border-solid [border-image-source:linear-gradient(90deg,_#000_0%,_#f89328_50%,_#000_100%)] [border-image-slice:1]"></div>

      {/* BOTTOM */}
      <div className="text-center pt-8 text-gray-400 text-lg">
        © 2026 <span className="text-[#f89328]">Birmaya Fintech</span> Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
}