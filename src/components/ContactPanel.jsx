import React from "react";

export default function ContactPanel() {
  return (
    <aside className="w-full md:w-1/3 bg-white rounded-md shadow p-6">
      <h3 className="text-xl font-heading text-navy font-semibold mb-4">Get in touch</h3>

      <p className="text-sm mb-4">We're here to help with customs clearance, freight forwarding, warehousing and transport. Reach out and we'll respond promptly.</p>

      <div className="space-y-3 text-sm">
        <div>
          <div className="font-semibold">Phone</div>
          <div>0726 876 555</div>
        </div>

        <div>
          <div className="font-semibold">Email</div>
          <div>divnojenterprises@gmail.com</div>
        </div>

        <div>
          <div className="font-semibold">Address</div>
          <div>Industrial Area, Nairobi, Kenya</div>
        </div>
      </div>

      <div className="mt-6">
        <a href="/contact" className="inline-block bg-navy text-white px-4 py-2 rounded-md">Contact us</a>
      </div>
    </aside>
  );
}
