```jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BlogGrid({ blogs = [] }) {
  const ITEMS_PER_LOAD = 6;

  const [visibleBlogs, setVisibleBlogs] = useState(
    blogs.slice(0, ITEMS_PER_LOAD)
  );

  const [hasMore, setHasMore] = useState(
    blogs.length > ITEMS_PER_LOAD
  );

  const loaderRef = useRef(null);

  // Load More Blogs
  const loadMoreBlogs = () => {
    if (!hasMore) return;

    const currentLength = visibleBlogs.length;
    const nextBlogs = blogs.slice(
      currentLength,
      currentLength + ITEMS_PER_LOAD
    );

    setVisibleBlogs((prev) => [...prev, ...nextBlogs]);

    if (
      currentLength + nextBlogs.length >= blogs.length
    ) {
      setHasMore(false);
    }
  };

  // Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting) {
          loadMoreBlogs();
        }
      },
      {
        threshold: 1,
      }
    );

    const currentLoader = loaderRef.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [visibleBlogs]);

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f89328]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#272361]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-[#272361]/5 text-[#272361] text-sm font-semibold tracking-widest uppercase">
            Our Blog Collection
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#272361] leading-tight">
            Insights That Help You
            <span className="block text-[#f89328]">
              Grow Financially
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover expert financial tips, loan solutions,
            EMI planning, and smart money management
            strategies from Birmaya Fintech.
          </p>
        </div>

        {/* Empty State */}
        {blogs.length === 0 ? (
          <div className="bg-white border border-gray-100 shadow-xl rounded-[40px] p-16 text-center">
            <h3 className="text-3xl font-bold text-[#272361] mb-4">
              Blogs Coming Soon
            </h3>

            <p className="text-gray-500 text-lg">
              We are preparing amazing finance articles for you.
            </p>
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

              {visibleBlogs.map((blog, index) => (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.id || blog.slug}
                  className="group relative"
                >

                  {/* Card */}
                  <div className="relative h-full bg-white rounded-[35px] border border-gray-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">

                    {/* Top Gradient Border */}
                    <div className="h-2 bg-gradient-to-r from-[#272361] via-[#f89328] to-[#272361]"></div>

                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={500}
                        height={320}
                        loading="lazy"
                        className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Floating Number */}
                      <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-lg text-[#272361] w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black shadow-lg">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">

                      {/* Category */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#f89328]"></div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-extrabold text-[#272361] leading-snug mb-4 group-hover:text-[#f89328] transition-colors duration-300">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {blog.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">

                        <div className="text-[#272361] font-semibold group-hover:text-[#f89328] transition-colors duration-300">
                          Read Article
                        </div>

                        <div className="w-12 h-12 rounded-full bg-[#272361] text-white flex items-center justify-center group-hover:bg-[#f89328] transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#f89328]/10 blur-3xl rounded-full"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Loader */}
            {hasMore && (
              <div
                ref={loaderRef}
                className="flex justify-center items-center py-16"
              >
                <div className="w-12 h-12 border-4 border-[#f89328] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* End Message */}
            {!hasMore && (
              <div className="text-center mt-16">
                <p className="text-gray-500 text-lg font-medium">
                  No More Blogs Available
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
```
