import React from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === '/'}
      className={({ isActive }) =>
        `mr-6 px-1 py-1 transition-colors duration-150 nav-link ${isActive ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
          <div>
            <div className="font-semibold text-lg" style={{ fontFamily: 'Poppins, Inter' }}>Divnoj Enterprises Ltd</div>
            <div className="text-xs text-gray-500">Moving our world forward</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center">
          {LINKS.map((l) => (
            <NavItem key={l.to} to={l.to} label={l.label} />
          ))}

          <a href="/#contact" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Contact</a>
        </nav>

        {/* mobile contact button */}
        <div className="md:hidden">
          <a href="/#contact" className="inline-block bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors">Contact</a>
        </div>
      </div>
    </header>
  );
}
