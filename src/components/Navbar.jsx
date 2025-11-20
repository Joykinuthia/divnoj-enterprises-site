import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" }
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        `relative px-3 py-2 font-medium tracking-wide transition-all duration-200 
        ${isActive ? "text-yellow-400 font-bold" : "text-white"} nav-underline`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="
      sticky top-0 z-50 
      bg-gradient-to-r from-[#001F3F] to-[#4B2E1E]/95 
      backdrop-blur-xl 
      shadow-lg
      border-b border-white/10
      relative
    ">
      {/* Top glowing gold strip */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 shadow-lg"></div>

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.png"
            alt="DIVNO J. ENTERPRISES LTD"
            className="h-12 w-12 rounded-lg shadow-lg border border-white/20 logo-hover"
          />
          <div>
            <div className="
              text-xl md:text-2xl font-heading font-extrabold gold-foil
            ">
              DIVNO J. ENTERPRISES LTD
            </div>
            <div className="text-xs text-white/80 italic tracking-wide">
              Moving our world forward
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}

          {/* CONTACT BUTTON */}
          <a
            href="/contact"
            className="
              nav-contact
              bg-gradient-to-r from-yellow-400 to-yellow-600 
              text-black font-bold px-5 py-2
              rounded-full shadow-md
              hover:scale-110 hover:shadow-xl
              transition-all duration-300
              relative overflow-hidden
            "
          >
            Contact
            <span className="
              absolute inset-0 bg-white/20 
              translate-x-[-150%] 
              skew-x-[20deg] 
              animate-shine
            "></span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden p-2 rounded-md border border-white/30 
            bg-white/10 backdrop-blur-sm
          "
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
              stroke="#f1f1f1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="
            md:hidden absolute right-4 top-20 w-52 
            bg-[#001F3F]/95 rounded-lg shadow-xl 
            border border-white/10 p-4 backdrop-blur-xl
            animate-fadeIn
          "
        >
          {LINKS.map((l) => (
            <div key={l.to} className="mb-2">
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className="
                  text-white block font-semibold 
                  hover:text-yellow-400 
                  transition-colors
                "
              >
                {l.label}
              </NavLink>
            </div>
          ))}

          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              block text-center mt-4 
              bg-gradient-to-r from-yellow-400 to-yellow-600 
              text-black font-bold py-2 rounded-full
            "
          >
            Contact
          </a>
        </div>
      )}

      {/* ✨ CSS ANIMATIONS */}
      <style>
        {`
          /* GOLD FOIL TEXT EFFECT */
          .gold-foil {
            background: linear-gradient(90deg, #fff5cc, #ffd700, #b8860b, #fff2b3);
            background-size: 300% auto;
            -webkit-background-clip: text;
            color: transparent;
            animation: goldMove 6s linear infinite;
            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
          }
          @keyframes goldMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Menu fade */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          /* Button shine */
          @keyframes shine {
            0% { transform: translateX(-150%) skewX(20deg); }
            100% { transform: translateX(200%) skewX(20deg); }
          }
          .animate-shine {
            animation: shine 2.8s infinite ease-in-out;
          }

          /* Underline hover animation */
          .nav-underline::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(to right, #ffd700, #ffae00);
            transition: width 0.3s ease;
          }
          .nav-underline:hover::after {
            width: 100%;
          }

          /* Nav link hover glow */
          .nav-underline:hover {
            transform: scale(1.08);
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
          }

          /* Contact button hover */
          .nav-contact:hover {
            transform: scale(1.1);
            box-shadow: 0 0 18px rgba(255, 200, 0, 0.9);
            transition: all 0.3s ease-in-out;
          }

          /* Logo hover */
          .logo-hover:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 0 12px rgba(255, 200, 0, 0.5));
            transition: 0.4s ease;
          }
        `}
      </style>
    </header>
  );
}
