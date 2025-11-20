import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  // Use user's background first (if available) and fall back to bundled hero image.
  const bgStyle = {
    backgroundImage: "url('/assets/background-photo.jpeg'), url('/assets/hero.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section style={bgStyle} className="relative py-28 text-center">
      {/* stronger overlay to keep text readable */}
      <div className="absolute inset-0 hero-overlay" aria-hidden></div>

      <div className="relative container mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold drop-shadow-lg mb-4">Welcome to <span className="text-gold">Divno J Enterprises</span></h1>
        <p className="text-lg md:text-xl text-white/90 mb-6 italic">Your Gateway to Smooth Logistics.</p>
        <Link to="/about" className="btn-accent inline-block mt-6 px-6 py-3 rounded shadow-lg transition">
          Learn More
        </Link>
      </div>
    </section>
  );
}
