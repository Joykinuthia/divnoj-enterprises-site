import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" }
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        `nav-link mr-4 px-1 py-1 transition-colors duration-150 ${isActive ? "text-navy font-semibold" : "text-gray-700 hover:text-navy"}`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="DIVNO J. ENTERPRISES" className="h-12 w-12 rounded-md shadow" />
          <div>
            <div className="text-xl font-heading text-navy font-bold">DIVNO J. ENTERPRISES</div>
            <div className="text-xs text-gray-500 italic">Moving our world forward</div>
          </div>
        </div>

        {/* desktop */}
        <nav className="hidden md:flex items-center">
          {LINKS.map(l => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}
          <a href="/contact" className="ml-4 inline-block bg-navy text-white px-4 py-2 rounded-full shadow hover:opacity-95">Contact</a>
        </nav>

        {/* mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md border"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke="#0A1A44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open && (
            <div className="absolute right-4 top-16 bg-white rounded-md shadow p-4 w-48">
              {LINKS.map(l => (
                <div key={l.to} className="mb-2">
                  <NavLink to={l.to} onClick={() => setOpen(false)} className="text-gray-700 block">{l.label}</NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
