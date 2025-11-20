import React from "react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="font-heading text-xl">DIVNO J. ENTERPRISES</h3>
          <p className="max-w-md text-sm mt-2">Reliable clearing & forwarding services — customs clearance, freight forwarding, warehousing, transport & consultancy.</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">Phone: <strong>0726 876 555</strong></p>
          <p className="text-sm">Email: <strong>divnojenterprises@gmail.com</strong></p>
        </div>

        <div>
          <h4 className="font-semibold">Hours</h4>
          <p className="text-sm mt-2">Mon - Sat: 08:00 - 18:00</p>
        </div>
      </div>
      <div className="border-t border-navy/30 text-center py-4 text-sm">&copy; {new Date().getFullYear()} DIVNO J. ENTERPRISES. All rights reserved.</div>
    </footer>
  );
}
