"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import ApplicationForm from "./ApplicationForm";

export default function OpenPositions() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();

        if (data.success) {
          setJobs(data.data);
        }
      } catch (error) {
        console.error("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <section className="py-5 bg-[#f8fafc]">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold text-[#272361] leading-tight">
            Open
            <span className="text-[#f28c1f]"> Positions</span>
          </h2>
         
          <div className="w-24 h-1 bg-[#f89328] rounded-full mx-auto mt-5"></div>
          

        </div>

        {/* Loading */}
        {loading ? (

          <div className="text-center text-gray-500">
            Loading positions...
          </div>

        ) : jobs.length === 0 ? (

          <div className="bg-white rounded-3xl p-10 text-center shadow-md text-gray-500">
            No open positions at the moment. Please check back later.
          </div>

        ) : (

          <div className="space-y-6">

            {jobs.map((job) => (

              <div
                key={job._id}
                className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  {/* Left Content */}
                  <div className="flex-1">

                    <h3 className="text-2xl font-bold text-black">
                      {job.title}
                    </h3>

                    {/* Job Info */}
                    <div className="flex flex-wrap items-center gap-5 mt-4">

                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-[#f89328]" />
                        <span>{job.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <FaBriefcase className="text-[#f89328]" />
                        <span>{job.type}</span>
                      </div>

                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mt-5 leading-7 line-clamp-2">
                      {job.description}
                    </p>

                  </div>

                  {/* Button */}
                  <div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-[#f89328] hover:bg-[#e78115] text-white px-8 py-3 rounded-2xl font-semibold transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Application Form */}
        {selectedJob && (
          <ApplicationForm
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}

      </div>
    </section>
  );
}