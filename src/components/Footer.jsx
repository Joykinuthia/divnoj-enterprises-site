import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-200 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Divnoj Enterprises Ltd</h4>
          <p>Nairobi, Kenya</p>
          <img src="/assets/logo.png" alt="logo" className="h-12 mt-4" />
        </div>

        <div>
          <h5 className="font-semibold mb-2">Business Hours</h5>
          <p className="text-sm">Mon – Fri: 8:00 AM – 5:00 PM</p>
          <p className="text-sm">Sat: 9:00 AM – 1:00 PM</p>
          <p className="text-sm">Sun & Public Holidays: Closed</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Contacts</h5>
          <p className="text-sm">Email: <a href="mailto:divnojenterprisesltd@gmail.com" className="text-gray-300">divnojenterprisesltd@gmail.com</a></p>
          <p className="text-sm">Phone: <a href="tel:0726876555" className="text-gray-300">0726 876 555</a></p>
          <h5 className="font-semibold mt-4 mb-2">Quick Links</h5>
          <nav className="text-sm">
            <a href="/" className="block text-gray-300">Home</a>
            <a href="/about" className="block text-gray-300">About</a>
            <a href="/services" className="block text-gray-300">Services</a>
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Divnoj Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
