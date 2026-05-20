"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Failed to submit query");
        return;
      }

      setSent(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
      });

    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="relative py-24 bg-gradient-to-b from-[#f4f3ff] via-white to-[#fff7ef] overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-[#272361]/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Main Card */}
    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-[#272361]/10">

      {/* LEFT SIDE */}
      <div className="relative bg-[#272361] p-10 md:p-14 text-white overflow-hidden flex flex-col justify-center">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#f28c28]/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        {/* Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium w-fit">

          <span className="w-2 h-2 rounded-full bg-[#f28c28] animate-pulse"></span>

          Contact Support

        </div>

        {/* Heading */}
        <h2 className="relative z-10 mt-8 text-4xl md:text-5xl font-bold leading-tight">

          Let’s
          <span className="text-[#f28c28]"> Connect</span>

        </h2>

        {/* Underline */}
        <div className="relative z-10 flex items-center gap-2 mt-6">

          <div className="w-10 h-1 rounded-full bg-white"></div>

          <div className="w-16 h-1 rounded-full bg-[#f28c28]"></div>

        </div>

        {/* Description */}
        <p className="relative z-10 mt-8 text-white/80 leading-8 text-lg">

          Fill out the form and our support team
          will get back to you quickly with the
          best financial guidance and assistance.

        </p>

        {/* Contact Info */}
        <div className="relative z-10 mt-12 space-y-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#f28c28] text-xl">

              📞

            </div>

            <div>
              <p className="text-white/60 text-sm">Call Anytime</p>
              <p className="font-semibold text-lg">
                +91 8287868048
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#f28c28] text-xl">

              ✉️

            </div>

            <div>
              <p className="text-white/60 text-sm">Email Support</p>
              <p className="font-semibold text-lg break-all">
                birmayafintech@gmail.com
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <div className="p-8 md:p-12 bg-white">

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#272361]">

          Send
          <span className="text-[#f28c28]"> Message</span>

        </h3>

        <p className="text-gray-500 mt-3 mb-10 text-lg">
          We would love to hear from you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition text-black"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition text-black"
            />

          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition text-black"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition text-black"
            />

          </div>

          {/* Message */}
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="w-full p-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition text-black resize-none"
          ></textarea>

          {/* Button */}
          <button
            disabled={loading}
            className="w-full h-14 rounded-full bg-gradient-to-r from-[#272361] to-[#f28c28] hover:scale-[1.02] text-white font-semibold text-lg transition duration-300 flex items-center justify-center gap-3 shadow-xl disabled:opacity-70 cursor-pointer"
          >

            {loading ? (
              "Submitting..."
            ) : (
              <>
                Send Message
                <FaPaperPlane />
              </>
            )}

          </button>

          {/* Success */}
          {sent && (
            <p className="text-green-600 text-center font-medium pt-2">
              Thank you! Our team will contact you soon.
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