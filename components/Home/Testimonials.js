"use client";
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 3,
    text: "Got my personal loan approved within 24 hours. Very smooth and transparent process.",
  },
  {
    name: "Priya Verma",
    rating: 3.5,
    text: "Amazing support team. They helped me get a business loan easily.",
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "No hidden charges and very fast service. Highly recommended!",
  },
  {
    name: "Neha Gupta",
    rating: 4,
    text: "Best loan experience ever. Everything was simple and quick.",
  },
];


export default function Testimonials() {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          {/* Heading */}
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-4xl font-bold leading-tight">

            <span className="text-[#272361]">
              What Our
            </span>

            <span className="text-[#f28c28]">
              {" "}Customers Say
            </span>

          </h2>

          {/* Underline */}
          <div className="w-28 h-1 bg-[#f28c28] mx-auto mt-6 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-500 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7 sm:leading-8">

            Real experiences and valuable feedback
            from our happy customers across India.

          </p>

        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar"
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[360px] bg-white p-8 rounded-2xl shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={
                      starIndex < review.rating
                        ? "text-accent"
                        : "text-gray-300"
                    }
                  />
                ))}

              </div>

              <p className="text-gray-600 mb-6 italic">
                “{review.text}”
              </p>

              <h4 className="font-semibold text-primary">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
