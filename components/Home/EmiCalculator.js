"use client";
import { useMemo, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(5);

  const { emi, interest, total } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const emiValue =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emiValue * months;
    const totalInterest = totalPayment - amount;

    return {
      emi: Math.round(emiValue),
      total: Math.round(totalPayment),
      interest: Math.round(totalInterest),
    };
  }, [amount, rate, years]);

  const handleAmountChange = (value) => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) return;

    const clampedValue = Math.min(
      Math.max(parsedValue, 50000),
      100000000
    );

    setAmount(clampedValue);
  };

  const handleRateChange = (value) => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) return;

    const clampedValue = Math.min(
      Math.max(parsedValue, 5),
      20
    );

    setRate(clampedValue);
  };

  const handleYearsChange = (value) => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) return;

    const clampedValue = Math.min(
      Math.max(parsedValue, 1),
      30
    );

    setYears(clampedValue);
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-[#fff7ef] via-white to-[#f5f8ff]"
      id="emi-calculator"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">

          <p className="text-[#f89328] font-semibold uppercase tracking-[4px] mb-3">
            EMI Planner
          </p>

          <h2 className="text-4xl md:text-3xl font-bold text-black leading-tight">
            Calculate Your
            <span className="text-[#f89328]"> EMI Instantly</span>
          </h2>

          <div className="w-28 h-1 bg-[#f89328] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-8">
            Plan your monthly payments easily with our smart EMI calculator
            and get accurate loan estimates instantly.
          </p>

        </div>

        {/* MAIN BOX */}
        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-[35px] p-6 md:p-10 border border-[#f1f1f1]">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* LOAN AMOUNT */}
            <div className="bg-[#fffaf5] border border-[#ffe7cb] rounded-3xl p-5 md:p-6">

              <div className="flex items-center justify-between mb-4">
                <label className="font-semibold text-black text-lg">
                  Loan Amount
                </label>

                <span className="text-[#f89328] font-bold text-lg">
                  ₹ {amount.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="100000000"
                step="50000"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="w-full accent-[#f89328] cursor-pointer"
              />

              <input
                type="number"
                min="50000"
                max="100000000"
                step="50000"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="w-full mt-5 border border-gray-200 rounded-2xl px-4 py-3 text-black outline-none focus:border-[#f89328]"
              />

            </div>

            {/* INTEREST RATE */}
            <div className="bg-[#f8fbff] border border-[#dbeafe] rounded-3xl p-5 md:p-6">

              <div className="flex items-center justify-between mb-4">
                <label className="font-semibold text-black text-lg">
                  Interest Rate
                </label>

                <span className="text-[#f89328] font-bold text-lg">
                  {rate}%
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => handleRateChange(e.target.value)}
                className="w-full accent-[#f89328] cursor-pointer"
              />

              <input
                type="number"
                min="5"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => handleRateChange(e.target.value)}
                className="w-full mt-5 border border-gray-200 rounded-2xl px-4 py-3 text-black outline-none focus:border-[#f89328]"
              />

            </div>

            {/* LOAN TENURE */}
            <div className="bg-[#fffaf5] border border-[#ffe7cb] rounded-3xl p-5 md:p-6">

              <div className="flex items-center justify-between mb-4">
                <label className="font-semibold text-black text-lg">
                  Loan Tenure
                </label>

                <span className="text-[#f89328] font-bold text-lg">
                  {years} Years
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={years}
                onChange={(e) => handleYearsChange(e.target.value)}
                className="w-full accent-[#f89328] cursor-pointer"
              />

              <input
                type="number"
                min="1"
                max="30"
                value={years}
                onChange={(e) => handleYearsChange(e.target.value)}
                className="w-full mt-5 border border-gray-200 rounded-2xl px-4 py-3 text-black outline-none focus:border-[#f89328]"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-[35px] p-6 md:p-10 text-white flex flex-col justify-center">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-[#f89328] flex items-center justify-center text-4xl mb-8 mx-auto">
              <FiTrendingUp />
            </div>

            {/* EMI */}
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 mb-5 text-center">

              <p className="text-white/70 text-lg mb-3">
                Monthly EMI
              </p>

              <h3 className="text-4xl md:text-5xl font-bold text-[#f89328] flex items-center justify-center gap-2">
                <FaRupeeSign />
                {emi.toLocaleString()}
              </h3>

            </div>

            {/* TOTAL INTEREST */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white/10 border border-white/10 rounded-3xl p-5 text-center">

                <p className="text-white/70 mb-2">
                  Total Interest
                </p>

                <h4 className="text-2xl font-bold text-white">
                  ₹ {interest.toLocaleString()}
                </h4>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-3xl p-5 text-center">

                <p className="text-white/70 mb-2">
                  Total Payment
                </p>

                <h4 className="text-2xl font-bold text-white">
                  ₹ {total.toLocaleString()}
                </h4>

              </div>

            </div>

            {/* BOTTOM TEXT */}
            <p className="text-center text-white/60 mt-8 leading-7 text-sm md:text-base">
              EMI calculation is approximate and may vary depending on
              bank policies and processing fees.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}