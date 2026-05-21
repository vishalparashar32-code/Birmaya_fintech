export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1d1a52] via-[#272361] to-[#3b3486] py-28">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f89328]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Small Tag */}
        <div className="inline-block bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6">
          <p className="text-sm tracking-wide text-[#f89328] font-semibold uppercase">
            Birmaya Fintech Blog
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
          Financial Tips &
          <span className="text-[#f89328]"> Loan Guides</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Learn about loans, credit scores, EMIs, and smart financial
          planning with expert insights from Birmaya Fintech.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="bg-[#f89328] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-2xl">
            Explore Blogs
          </button>

          <button className="border border-white/30 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md">
            Loan Tips
          </button>

        </div>
      </div>
    </section>
  );
}