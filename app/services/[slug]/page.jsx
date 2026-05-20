import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

import {
  loanDetailMap,
  loanDetails,
} from "@/data/loanDetails";

export function generateStaticParams() {
  return loanDetails.map((loan) => ({
    slug: loan.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {

  const { slug } = await params;

  const loan = loanDetailMap[slug];

  if (!loan) notFound();

  return (
    <main className="bg-[#f8f9ff] min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#272361] py-20 sm:py-24">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#f28c28]/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        {/* Animated Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_5s_linear_infinite]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Breadcrumb */}
          <p className="text-[#f28c28] font-medium tracking-wide uppercase text-sm">
            Our Services
          </p>

          {/* Heading */}
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">

            {loan.title}

          </h1>

          {/* Underline */}
          <div className="w-28 h-1 bg-[#f28c28] rounded-full mx-auto mt-6"></div>

          {/* Description */}
          <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">
            {loan.overview}
          </p>

          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-3 mt-10 px-7 py-3 rounded-full bg-[#f28c28] hover:bg-[#e67e18] text-white font-semibold shadow-lg hover:shadow-2xl transition duration-300"
          >
            <FaArrowLeft />
            Back to Services
          </Link>

        </div>

      </section>

      {/* DETAIL SECTIONS */}
      <section className="relative py-20">

        {/* Background Glow */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-[#272361]/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#f28c28]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <DetailCard
            title="Key Features"
            items={loan.keyFeatures}
          />

          {loan.typeof && (
            <DetailCard
              title="Type Of"
              items={loan.typeof}
            />
          )}

          {loan.howItWorks && (
            <DetailCard
              title="How It Works"
              items={loan.howItWorks}
            />
          )}

          {loan.expense && (
            <DetailCard
              title="Expense Covered"
              items={loan.expense}
            />
          )}

          <DetailCard
            title="Eligibility Criteria"
            items={loan.eligibility}
          />

          <DetailCard
            title="Documents Required"
            items={loan.documents}
          />

          <DetailCard
            title="Advantages"
            items={loan.advantages}
          />

          <DetailCard
            title="Things To Check Before Applying"
            items={loan.thingsToCheck}
          />

          {loan.example && (
            <DetailCard
              title="Example"
              items={loan.example}
            />
          )}

        </div>

      </section>

    </main>
  );
}

/* DETAIL CARD */
function DetailCard({ title, items }) {
  return (

    <article className="group relative bg-white rounded-[30px] p-8 md:p-10 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#272361] to-[#f28c28]"></div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#f28c28]/5 rounded-full blur-3xl"></div>

      {/* Title */}
      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#272361] to-[#1c1850] flex items-center justify-center text-white text-xl shadow-lg">

          <FaCheckCircle />

        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#272361]">
          {title}
        </h2>

      </div>

      {/* List */}
      <ul className="space-y-5">

        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 text-gray-700 leading-7"
          >

            {/* Bullet */}
            <span className="mt-1 w-6 h-6 rounded-full bg-[#f28c28]/10 flex items-center justify-center text-[#f28c28] text-xs shrink-0">

              <FaCheckCircle />

            </span>

            <span className="text-[15px] sm:text-base">
              {item}
            </span>

          </li>
        ))}

      </ul>

    </article>
  );
}