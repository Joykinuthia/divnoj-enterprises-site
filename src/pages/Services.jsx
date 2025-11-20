import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Customs Clearance",
      desc: "We handle all customs documentation and procedures to ensure quick clearance at ports, airports, and border points. We help prevent delays and penalties."
    },
    {
      title: "Freight Forwarding (Air, Sea & Road)",
      desc: "Coordination of local & international transport using trusted carriers for safe and cost-effective delivery."
    },
    {
      title: "Import & Export Documentation",
      desc: "We prepare permits, declarations, invoices, and compliance documents for smooth cargo movement."
    },
    {
      title: "Transport & Logistics",
      desc: "Reliable local/regional transport to final delivery with tracking and handling."
    },
    {
      title: "Warehousing Solutions",
      desc: "Secure short- and long-term storage with professional stock handling."
    },
    {
      title: "Customs Consultancy",
      desc: "Expert advice on duties, taxes, HS codes, and customs requirements to avoid costly mistakes."
    }
  ];

  return (
    <div className="page">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-heading text-center font-bold text-orange-500 mb-6">
            Our Services
          </h2>
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded shadow transition-transform duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold italic mb-2 bg-clip-text text-transparent 
                            bg-gradient-to-r from-yellow-400 via-orange-500 to-[#8B4513] 
                            hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
                {s.title}
              </h3>
              <p className="text-navy">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
