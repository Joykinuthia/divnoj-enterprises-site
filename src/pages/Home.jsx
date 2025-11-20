import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading text-navy text-center mb-6">
          <span className="font-semibold">Why Choose</span>{' '}
          <span className="italic text-accent-orange">DIVNO J. ENTERPRISES</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-navy mb-2">Experienced Team</h3>
            <p>Experts in customs procedures, documentation and freight coordination.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="italic text-navy mb-2">Transparent Pricing</h3>
            <p>No hidden fees. Clear quotes and accurate invoicing.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-bold text-navy mb-2">Timely Deliveries</h3>
            <p>Processes optimised to reduce delays and meet agreed timelines.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
