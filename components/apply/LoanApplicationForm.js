"use client";
import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  mobile: "",
  email: "",
  city: "",
  loanType: "",
  loanAmount: "",
  monthlyIncome: "",
  message: "",
  website: "",
};

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const res = await fetch("/api/loan-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          loanAmount: Number(formData.loanAmount),
          monthlyIncome: Number(formData.monthlyIncome),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Failed to submit application.");
        return;
      }

      setSent(true);
      setFormData(INITIAL_FORM);
    } catch {
      setError("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f8f9ff] to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#272361]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Form Card */}
        <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* Left Side */}
          <div className="relative bg-[#272361] p-10 md:p-14 text-white flex flex-col justify-center overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <span className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-medium">
                BIRMAYA FINTECH
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">

                Apply For
                <span className="text-[#f28c28]">
                  {" "}Loan
                </span>

              </h2>

              {/* Underline */}
              <div className="w-24 h-1 bg-[#f28c28] rounded-full mt-6"></div>

              <p className="mt-8 text-white/80 leading-8">
                Get quick approvals, minimum paperwork,
                and trusted financial solutions with
                Birmaya Fintech.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#f28c28] text-xl">
                    ✓
                  </div>

                  <span>Fast Loan Processing</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#f28c28] text-xl">
                    ✓
                  </div>

                  <span>Minimal Documentation</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#f28c28] text-xl">
                    ✓
                  </div>

                  <span>100% Secure Process</span>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="p-8 md:p-12">

            <h3 className="text-3xl font-bold text-[#272361]">
              Loan Application Form
            </h3>

            <p className="text-gray-500 mt-3 mb-8">
              Fill your details and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
                />

              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
                />

              </div>

              {/* Loan Type */}
              <select
                required
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
              >
                <option value="">Select Loan Type</option>
                <option>Personal Loan</option>
                <option>Business Loan</option>
                <option>Home Loan</option>
                <option>Auto Loan</option>
                <option>Loan Against Property</option>
                <option>Loan Against Shares</option>
                <option>Education Loan</option>
              </select>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="number"
                  name="loanAmount"
                  placeholder="Loan Amount Required"
                  required
                  min="1"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
                />

                <input
                  type="number"
                  name="monthlyIncome"
                  placeholder="Monthly Income"
                  required
                  min="1"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition"
                />

              </div>

              {/* Message */}
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-gray-200 bg-[#fafafa] text-gray-700 focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-full bg-[#272361] hover:bg-[#1d1a52] text-white font-semibold text-lg transition duration-300 hover:shadow-2xl cursor-pointer disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              {/* Success */}
              {sent && (
                <p className="text-green-600 text-center font-medium pt-2">
                  Application submitted successfully!
                </p>
              )}

              {/* Error */}
              {error && (
                <p className="text-red-600 text-center font-medium pt-2">
                  {error}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
