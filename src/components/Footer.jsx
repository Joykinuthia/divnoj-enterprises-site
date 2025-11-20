import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#001F3F] to-[#4B2E1E] text-white mt-16 relative overflow-hidden">
      
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div className="space-y-3">
          <h3 className="font-heading text-2xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide hover:text-yellow-300 hover:drop-shadow-xl transition-all duration-300 cursor-default">
            DIVNO J. ENTERPRISES LTD
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
            We provide reliable clearing & forwarding services including customs clearance,
            freight forwarding, warehousing, transport, and consultancy.  
            Your cargo, handled with professionalism and care.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-yellow-400 tracking-wide hover:text-yellow-300 transition duration-300">
            Contact Information
          </h4>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li>
              <span className="font-semibold">Phone:</span> 
              <a href="tel:+254726876555" className="hover:text-yellow-300 transition-colors duration-300 ml-1">0726 876 555</a> / 
              <a href="tel:+254736398377" className="hover:text-yellow-300 transition-colors duration-300 ml-1">0736 398 377</a>
            </li>
            <li>
              <span className="font-semibold">Email:</span> 
              <a href="mailto:divnojenterprises@gmail.com" className="hover:text-yellow-300 transition-colors duration-300 ml-1">divnojenterprises@gmail.com</a>
            </li>
            <li>
              <span className="font-semibold">Website:</span> 
              <a href="https://www.divnojenterprises.co.ke" className="hover:text-yellow-300 transition-colors duration-300 ml-1">www.divnojenterprises.co.ke</a>
            </li>
            <li>
              <span className="font-semibold">Address:</span> Industrial Area, Nairobi, Kenya
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-yellow-400 tracking-wide hover:text-yellow-300 transition duration-300">
            Working Hours
          </h4>
          <ul className="space-y-1 text-sm leading-relaxed">
            <li>
              <span className="font-semibold">Mon – Sat:</span> 08:00 hrs – 18:00 hrs
            </li>
            <li>
              <span className="font-semibold">Sundays & Holidays:</span> Closed
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-6 py-4 text-center text-sm text-white/80 tracking-wide">
        &copy; {new Date().getFullYear()} DIVNO J. ENTERPRISES LTD. All rights reserved.
      </div>

      {/* 🌟 Hover & Glow Effects */}
      <style>
        {`
          footer h3, footer h4, footer a {
            transition: all 0.3s ease;
          }

          footer h3:hover {
            text-shadow: 0 0 12px rgba(255, 215, 0, 0.8);
            transform: scale(1.03);
          }

          footer h4:hover {
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
          }

          footer a:hover {
            text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
          }
        `}
      </style>
    </footer>
  );
}

