"use client";

import { useState } from "react";

const INITIAL_FORM = {
  gender: "",
  fullName: "",
  dob: "",
  pinCode: "",
  pan: "",
  email: "",
  mobile: "",
  consent: false,
  whatsappUpdates: true,
  website: "",
};

export default function CreditScoreForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const whatsappNumber = "919217924215";

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/credit-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.error || "Unable to submit the form.");
        return;
      }

      setSuccess("Details submitted successfully. Our team will contact you.");
      const whatsappMessage = `Hi, I submitted the Free Credit Score form. Name: ${formData.fullName}, Mobile: ${formData.mobile}.`;
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.location.href = whatsappLink;
      setFormData(INITIAL_FORM);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f8f9ff] to-white py-16">

      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-[35px] bg-white shadow-2xl border border-[#272361]/10">

          {/* Top Header */}
          <div className="bg-gradient-to-r from-[#272361] to-[#1d1a52] px-6 py-10 md:px-10 text-white">

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Check Your
              <span className="text-[#f28c28]"> Free Credit Score</span>
            </h1>

            <div className="w-24 h-1 bg-[#f28c28] rounded-full mt-5"></div>

            <p className="mt-5 text-white/80 text-sm md:text-base max-w-2xl leading-7">
              Fill in your details exactly as per your bank records
              and get your free credit score instantly.
            </p>

          </div>

          {/* Form */}
          <div className="p-6 md:p-10">

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Gender */}
              <div className="flex flex-wrap gap-6">

                <label className="flex items-center gap-3 text-base font-medium text-[#272361] cursor-pointer">

                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 accent-[#f28c28]"
                  />

                  Male

                </label>

                <label className="flex items-center gap-3 text-base font-medium text-[#272361] cursor-pointer">

                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 accent-[#f28c28]"
                  />

                  Female

                </label>

              </div>

              {/* Input Fields */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* Full Name */}
                <label className="block">

                  <span className="mb-2 block text-sm font-semibold text-[#272361]">
                    Full Name
                  </span>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="As per your bank record"
                    required
                    className="w-full h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-800 outline-none transition focus:border-[#f28c28] focus:ring-4 focus:ring-[#f28c28]/10"
                  />

                </label>

                {/* DOB */}
                <label className="block">

                  <span className="mb-2 block text-sm font-semibold text-[#272361]">
                    Date Of Birth
                  </span>

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-800 outline-none transition focus:border-[#f28c28] focus:ring-4 focus:ring-[#f28c28]/10"
                  />

                </label>

                {/* Pin Code */}
                <label className="block">

                  <span className="mb-2 block text-sm font-semibold text-[#272361]">
                    Pin Code
                  </span>

                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    placeholder="As per your bank record"
                    required
                    maxLength={6}
                    pattern="\d{6}"
                    inputMode="numeric"
                    className="w-full h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-800 outline-none transition focus:border-[#f28c28] focus:ring-4 focus:ring-[#f28c28]/10"
                  />

                </label>

                {/* PAN */}
                <label className="block">

                  <span className="mb-2 block text-sm font-semibold text-[#272361]">
                    PAN Number
                  </span>

                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={(event) => {
                      const value = event.target.value.toUpperCase();
                      setFormData((prev) => ({ ...prev, pan: value }));
                    }}
                    placeholder="Permanent Account Number"
                    required
                    maxLength={10}
                    className="w-full h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-800 outline-none transition focus:border-[#f28c28] focus:ring-4 focus:ring-[#f28c28]/10"
                  />

                </label>

                {/* Email */}
                <label className="block">

                  <span className="mb-2 block text-sm font-semibold text-[#272361]">
                    Email Address
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="As per your bank"
                    required
                    className="w-full h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-800 outline-none transition focus:border-[#f28c28] focus:ring-4 focus:ring-[#f28c28]/10"
                  />

                </label>

                {/* Mobile */}
                <label className="block">

                  <span className="mb-2 block text-sm font-semibold text-[#272361]">
                    Mobile Number
                  </span>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="As per your bank"
                    required
                    maxLength={10}
                    pattern="\d{10}"
                    inputMode="numeric"
                    className="w-full h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 text-gray-800 outline-none transition focus:border-[#f28c28] focus:ring-4 focus:ring-[#f28c28]/10"
                  />

                  <p className="mt-2 text-xs font-medium text-[#272361]">
                    Note: Please use the mobile number registered with your Credit Card/Loan account.
                  </p>

                </label>

              </div>

              {/* Hidden Input */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
                className="hidden"
                tabIndex={-1}
              />

              {/* Consent */}
              <label className="flex items-start gap-3 rounded-2xl bg-[#f8f9ff] p-5 border border-[#272361]/10">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded accent-[#f28c28]"
                />

                <span className="text-sm leading-7 text-gray-700">
                  I hereby appoint Birmaya as my authorised representative
                  to receive my credit information from Cibil / Equifax /
                  Experian / CRIF Highmark (bureau).
                </span>

              </label>

              {/* Whatsapp Updates */}
              <label className="flex items-center justify-between rounded-2xl border border-[#272361]/10 bg-[#f8f9ff] px-5 py-4">

                <span className="text-sm font-medium text-[#272361]">
                  Get regular Credit Report updates via Whatsapp
                </span>

                <input
                  type="checkbox"
                  name="whatsappUpdates"
                  checked={formData.whatsappUpdates}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#f28c28]"
                />

              </label>

              {/* Button */}
              <div>

                <button
                  type="submit"
                  disabled={loading}
                  className="h-14 rounded-full bg-[#272361] hover:bg-[#1d1a52] px-8 text-white font-semibold transition duration-300 hover:shadow-2xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Check Free Credit Score"}
                </button>

              </div>

              {/* Error */}
              {error ? (
                <p className="text-sm font-medium text-red-600">
                  {error}
                </p>
              ) : null}

              {/* Success */}
              {success ? (
                <p className="text-sm font-medium text-green-600">
                  {success}
                </p>
              ) : null}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
