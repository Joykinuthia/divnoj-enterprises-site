import React from 'react';

export default function HeroSection() {
  return (
    // Using the provided Vecteezy background image URL. If you prefer a local file,
    // place the image at `public/images/hero.jpg` and change the URL below to '/images/hero.jpg'.
    <section
      className="hero-bg"
      style={{
        // Prefer local asset; fallback to external URL if replaced later
  // Prefer the local background image (hero.jpg). The setup script will attempt to copy
  // `/home/$USER/Downloads/background photo.jpeg` to `public/assets/hero.jpg`.
  backgroundImage: "url('/assets/hero.jpg')",
      }}
    >
      <div className="bg-black/50">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center text-white">
          <div className="md:w-1/2">
            <img src="/images/logo.png" alt="Divnoj logo" className="h-16 w-16 mb-4" />
            <h1 className="text-4xl font-bold mb-4" style={{fontFamily: 'Poppins, Inter'}}>Your Trusted Logistics & Customs Partner</h1>
            <p className="text-gray-200 mb-6">Efficient, secure, and timely solutions for all your import and export needs.</p>
            <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md">Contact Us Today</a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* decorative area - keep empty or add an illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}
