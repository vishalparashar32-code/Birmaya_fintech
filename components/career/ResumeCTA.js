"use client";

import { useState } from "react";

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function ResumeCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setResumeFile(null);
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Only PDF, DOC, and DOCX files are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_RESUME_SIZE) {
      setError("Resume must be 5MB or less.");
      e.target.value = "";
      return;
    }

    setError("");
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setError("");

    if (!resumeFile) {
      setLoading(false);
      setError("Please upload your resume.");
      return;
    }

    try {
      const payload = new FormData();

      payload.append("name", name.trim());
      payload.append("email", email.trim().toLowerCase());
      payload.append("resume", resumeFile);

      const response = await fetch("/api/resume", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send resume.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setResumeFile(null);

    } catch (err) {
      setStatus("error");
      setError(err.message || "Failed to send resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#f8f9fc] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-[#f28c1f]/10 blur-3xl rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#272361]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 bg-white rounded-[35px] overflow-hidden shadow-2xl border border-[#272361]/10">

          {/* Left Side */}
          <div className="relative bg-[#272361] text-white p-10 md:p-14 flex flex-col justify-center overflow-hidden">

            {/* Orange Glow */}
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#f28c1f]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Send Your
                <span className="text-[#f28c1f]"> Resume</span>
              </h2>

              {/* Line */}
              <div className="w-24 h-1 bg-[#f28c1f] rounded-full mt-6"></div>

              <p className="mt-8 text-white/80 leading-8">
                Don&apos;t see a role that fits?
                Share your resume and we&apos;ll contact you
                when a suitable opportunity opens.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#f28c1f]/20 flex items-center justify-center text-[#f28c1f] font-bold">
                    ✓
                  </div>

                  <span className="text-white/90">
                    Fast Application Process
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#f28c1f]/20 flex items-center justify-center text-[#f28c1f] font-bold">
                    ✓
                  </div>

                  <span className="text-white/90">
                    Career Growth Opportunities
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#f28c1f]/20 flex items-center justify-center text-[#f28c1f] font-bold">
                    ✓
                  </div>

                  <span className="text-white/90">
                    Friendly Work Culture
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="p-8 md:p-12">

            <h3 className="text-3xl font-bold text-[#272361]">
              Upload Resume
            </h3>

            <p className="text-gray-500 mt-3 mb-8">
              Fill in your details below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#f28c1f] focus:ring-4 focus:ring-[#f28c1f]/10 outline-none transition text-black"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] focus:border-[#272361] focus:ring-4 focus:ring-[#272361]/10 outline-none transition text-black"
              />

              {/* Upload */}
              <div className="border-2 border-dashed border-[#f28c1f]/30 rounded-2xl p-6 bg-[#fffaf5]">

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="w-full text-black
                  file:mr-4
                  file:px-5
                  file:py-3
                  file:rounded-xl
                  file:border-0
                  file:bg-[#f28c1f]
                  file:text-white
                  file:font-medium
                  hover:file:bg-[#de7d18]"
                />

                <p className="text-sm text-gray-500 mt-4">
                  PDF, DOC, DOCX (max 5MB)
                </p>

              </div>

              {/* Success */}
              {status === "success" && (
                <p className="text-green-600 text-sm font-medium">
                  Resume sent successfully.
                </p>
              )}

              {/* Error */}
              {error && (
                <p className="text-red-600 text-sm font-medium">
                  {error}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-full cursor-pointer bg-[#272361] hover:bg-[#171452] text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Resume"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}