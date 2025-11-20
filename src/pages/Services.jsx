import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services(){
  const services = [
    {
      title: "Customs Clearance",
      desc: "We handle all customs documentation and procedures to ensure quick clearance at ports, airports and border points. We help prevent delays and penalties."
    },
    {
      title: "Freight Forwarding (Air, Sea & Road)",
      desc: "Coordination of local & international transport using trusted carriers for safe and cost-effective delivery."
    },
    {
      title: "Import & Export Documentation",
      desc: "We prepare permits, declarations, invoices and compliance documents for smooth cargo movement."
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
      desc: "Expert advice on duties, taxes, HS codes and customs requirements to avoid costly mistakes."
    }
  ];

  return (
    <div className="page">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-heading text-navy text-center font-bold">Our Services</h2>
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold text-navy mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


