"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaAngleDown,
  FaAngleUp,
  FaCheckCircle,
} from "react-icons/fa";

export default function RepaymentPopup() {
  const [expand, setExpand] = useState(false);

  const whatsappLink =
    "https://wa.me/919217924215?text=Hi, I want my detailed Loan Repayment Schedule. Please guide me for ₹99 service.";

  return (
    <section className="w-full px-4 py-14 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fff7ef] via-white to-[#f5f8ff] overflow-hidden">

      <div className="mx-auto w-full max-w-5xl rounded-[35px] bg-white border border-[#f1f1f1] overflow-hidden">

        {/* TOP SECTION */}
        <div className="relative bg-gradient-to-r from-[#111827] to-[#1f2937] px-6 py-12 md:px-12 text-center text-white overflow-hidden">

          {/* CIRCLE BG */}
          <div className="absolute top-[-60px] right-[-60px] w-44 h-44 rounded-full bg-[#f89328]/20"></div>

          <div className="absolute bottom-[-70px] left-[-70px] w-52 h-52 rounded-full bg-white/5"></div>

          {/* HEADING */}
          <p className="text-[#f89328] uppercase tracking-[4px] font-semibold mb-4">
            Smart Planning
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Loan Re-Payment
            <span className="text-[#f89328]"> Schedule</span>
          </h2>

          <p className="mt-5 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-8">
            Get complete EMI breakdown, principal amount,
            interest details and repayment planning instantly.
          </p>

          {/* PRICE TAG */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f89328] px-7 py-3 text-lg font-bold text-white">

            Only ₹99 / One Time

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-10">

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">

            <div className="flex items-center gap-3 bg-[#fffaf5] border border-[#ffe7cb] rounded-2xl p-4">
              <FaCheckCircle className="text-[#f89328] text-xl shrink-0" />
              <p className="text-black font-medium">
                Complete EMI Breakdown
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#f5f8ff] border border-[#dbeafe] rounded-2xl p-4">
              <FaCheckCircle className="text-[#f89328] text-xl shrink-0" />
              <p className="text-black font-medium">
                Total Interest Insights
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#fffaf5] border border-[#ffe7cb] rounded-2xl p-4">
              <FaCheckCircle className="text-[#f89328] text-xl shrink-0" />
              <p className="text-black font-medium">
                Smart Prepayment Planning
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#f5f8ff] border border-[#dbeafe] rounded-2xl p-4">
              <FaCheckCircle className="text-[#f89328] text-xl shrink-0" />
              <p className="text-black font-medium">
                Monthly Balance Tracking
              </p>
            </div>

          </div>

          {/* ACCORDION */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden">

            <button
              onClick={() => setExpand(!expand)}
              className="w-full flex items-center justify-between gap-4 p-5 md:p-6 bg-white hover:bg-[#fffaf5] transition-all duration-300 cursor-pointer"
            >

              <h3 className="text-lg md:text-xl font-semibold text-black">
                What is Repayment Schedule?
              </h3>

              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                  expand
                    ? "bg-[#f89328] text-white rotate-180"
                    : "bg-gray-100 text-black"
                }`}
              >
                {expand ? <FaAngleUp /> : <FaAngleDown />}
              </div>

            </button>

            {/* ANSWER */}
            {expand && (
              <div className="border-t border-gray-200 px-5 md:px-6 py-6 bg-[#fafafa]">

                <p className="text-gray-700 leading-8 mb-5">
                  A repayment schedule shows month-by-month EMI breakup including
                  principal amount, interest paid and remaining loan balance.
                </p>

                <p className="font-semibold text-black mb-3">
                  Why it is important:
                </p>

                <ul className="space-y-3 text-gray-600">

                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#f89328]" />
                    Plan your monthly budget
                  </li>

                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#f89328]" />
                    Know your total interest cost
                  </li>

                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#f89328]" />
                    Track remaining balance
                  </li>

                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#f89328]" />
                    Decide best prepayment timing
                  </li>

                </ul>

                {/* DOWNLOAD */}
                <a
                  href="/repayment.pdf"
                  download="Loan_Repayment_Schedule_Guide.pdf"
                  className="inline-block mt-6 text-[#f89328] font-semibold hover:underline"
                >
                  Download PDF Guide →
                </a>

              </div>
            )}

          </div>

          {/* BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-4 md:py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >

            <FaWhatsapp size={24} />

            Chat on WhatsApp

          </a>

        </div>

      </div>

    </section>
  );
}