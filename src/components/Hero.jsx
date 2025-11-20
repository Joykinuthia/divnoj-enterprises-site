import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const bgStyle = {
    backgroundImage: "url('/assets/background-photo.jpeg'), url('/assets/hero.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      style={bgStyle}
      className="relative py-40 text-center overflow-hidden"
    >
      {/* DARK GRADIENT + SPOTLIGHT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[2px]"></div>

      {/* FLOATING PARTICLES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="animate-particles absolute inset-0"></div>
      </div>

      <div className="relative container mx-auto px-6 text-white">

        {/* EPIC 3D METALLIC HEADING */}
        <h1 className="hero-title text-5xl md:text-7xl font-heading font-extrabold tracking-wide leading-tight mb-6">
          <span className="block drop-shadow-2xl">Welcome to</span>

          <span className="block metallic-gold mt-2">
            Divno J. Enterprises LTD
          </span>
        </h1>

        {/* TAGLINE */}
        <p className="text-xl md:text-2xl text-white/90 italic mt-4 animate-fadeSlow">
          Moving our World Forward.
        </p>

        {/* CTA */}
        <Link
          to="/about"
          className="
            inline-block mt-10 px-10 py-4 
            bg-gradient-to-r from-yellow-400 to-yellow-600 
            text-black font-extrabold text-lg rounded-lg
            shadow-xl hover:scale-110 
            transition-all duration-300 relative overflow-hidden
          "
        >
          <span className="relative z-10">Learn More</span>

          {/* GLOSSY LIGHT SWEEP */}
          <span
            className="absolute inset-0 bg-white/20 translate-x-[-150%] 
              skew-x-[30deg] animate-sweep"
          ></span>
        </Link>
      </div>

      {/* ANIMATIONS & EFFECTS */}
      <style>
        {`
          /* PARALLAX MOVEMENT */
          section:hover {
            background-position: center 48%;
            transition: background-position 4s ease-out;
          }

          /* GOLD 3D METALLIC EFFECT */
          .metallic-gold {
            background: linear-gradient(180deg, #fff7cc 0%, #ffd700 40%, #c49b23 80%, #fff1a8 100%);
            -webkit-background-clip: text;
            color: transparent;
            text-shadow: 
              0px 2px 2px rgba(0,0,0,0.4),
              0px 4px 4px rgba(0,0,0,0.3),
              0px 6px 6px rgba(0,0,0,0.2),
              0px 8px 8px rgba(0,0,0,0.15);
            animation: goldShine 6s ease-in-out infinite;
          }

          @keyframes goldShine {
            0% { filter: brightness(0.9); }
            50% { filter: brightness(1.3); }
            100% { filter: brightness(0.9); }
          }

          /* HEADLINE ENTRANCE */
          .hero-title {
            animation: riseIn 1.3s ease-out forwards;
            opacity: 0;
          }

          @keyframes riseIn {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* FADE SLOW */
          @keyframes fadeSlow {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeSlow {
            animation: fadeSlow 2.5s ease-out;
          }

          /* BUTTON GLOSS SWEEP */
          @keyframes sweep {
            0% { transform: translateX(-150%) skewX(30deg); }
            100% { transform: translateX(200%) skewX(30deg); }
          }
          .animate-sweep {
            animation: sweep 2.2s infinite ease-in-out;
          }

          /* FLOATING PARTICLES */
          @keyframes particles {
            0% { transform: translateY(0); opacity: 0.3; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-800px); opacity: 0; }
          }

          .animate-particles {
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 3px 3px;
            animation: particles 18s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

