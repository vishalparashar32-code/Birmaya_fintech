import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogGrid({ blogs = [] }) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F7F9FC] relative overflow-hidden">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f89328]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#272361]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="bg-[#f89328]/10 text-[#f89328] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            Latest Articles
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#272361] mt-5">
            Financial Knowledge Hub
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Explore smart financial tips, loan guides, EMI planning,
            and expert advice from Birmaya Fintech.
          </p>
        </div>

        {/* Empty State */}
        {blogs.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-14 text-center">
            <h3 className="text-2xl font-bold text-[#272361] mb-3">
              No Blogs Available
            </h3>

            <p className="text-gray-500">
              New financial articles and updates will appear here soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {blogs.map((blog, index) => (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.id || blog.slug}
                className="group relative bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Number Badge */}
                  <div className="absolute top-5 left-5 bg-[#f89328] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  
                  {/* Small Label */}
                  <span className="text-sm font-semibold text-[#f89328] uppercase tracking-wide">
                    Finance Guide
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#272361] mt-3 mb-4 leading-snug group-hover:text-[#f89328] transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-[#272361] font-semibold group-hover:text-[#f89328] transition-colors duration-300">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f89328] group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}