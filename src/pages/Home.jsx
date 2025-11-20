import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Hero />

      <section className="container mx-auto px-6 py-12">
        {/* Orange solid main heading */}
        <h2 className="text-3xl font-heading font-bold italic text-center mb-12 text-orange-500">
          WHY CHOOSE DIVNO J. ENTERPRISES LTD
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature cards with gradient text & hover effect */}
          <div className="p-6 bg-white rounded shadow transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h3 className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#4B2E1E] mb-2
                           hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
              Experienced Team
            </h3>
            <p>Experts in customs procedures, documentation and freight coordination.</p>
          </div>

          <div className="p-6 bg-white rounded shadow transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h3 className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#4B2E1E] mb-2
                           hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
              Transparent Pricing
            </h3>
            <p>No hidden fees. Clear quotes and accurate invoicing.</p>
          </div>

          <div className="p-6 bg-white rounded shadow transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <h3 className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#4B2E1E] mb-2
                           hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
              Timely Deliveries
            </h3>
            <p>Processes optimised to reduce delays and meet agreed timelines.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


