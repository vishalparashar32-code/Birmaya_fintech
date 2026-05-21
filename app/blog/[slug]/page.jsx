import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

export default async function BlogDetail({ params }) {
  await dbConnect();

  const { slug } = await params;
  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    notFound();
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F7F9FC] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f89328]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#272361]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-[#272361] hover:text-[#f89328] font-semibold transition-colors duration-300"
        >
          ← Back to Blogs
        </Link>

        {/* Top Badge */}
        <div className="inline-block bg-[#f89328]/10 text-[#f89328] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
          Finance Blog
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#272361] mb-8">
          {blog.title}
        </h1>

        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-[35px] shadow-2xl mb-12 group">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={650}
            className="w-full h-[300px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        </div>

        {/* Blog Content Card */}
        <div className="relative bg-white rounded-[35px] shadow-xl border border-gray-100 overflow-hidden">

          {/* Top Accent */}
          <div className="h-2 bg-gradient-to-r from-[#272361] via-[#f89328] to-[#272361]"></div>

          <div className="p-8 md:p-14">

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-9 whitespace-pre-line">
              {blog.content}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-5">

              <div>
                <h3 className="text-2xl font-bold text-[#272361]">
                  Need Financial Help?
                </h3>

                <p className="text-gray-500 mt-2">
                  Explore loans, EMI solutions, and expert financial guidance.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-[#272361] hover:bg-[#f89328] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}