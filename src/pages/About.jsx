import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About(){
  return (
    <div className="page">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-8">
          <h2 className="text-3xl font-heading text-navy text-center font-bold mb-4">
            <span className="font-bold">About</span> <span className="italic text-accent-orange">Us</span>
          </h2>
          <p className="mb-4"><em className="text-navy">We are a professional clearing and forwarding company based in Nairobi, Kenya</em>, dedicated to providing seamless, reliable, and cost-effective logistics solutions. Whether you’re importing or exporting, we handle your cargo with <strong>precision</strong>, <strong>integrity</strong>, and <strong>transparency</strong> from start to finish.</p>
          <p className="mb-4">With an experienced team and strong networks at the port, airport, and border points, we ensure your goods move smoothly across the supply chain—with reduced delays, accurate documentation, and timely updates.</p>
          <p className="mb-6">Our focus is on building long-term relationships through <strong>trust</strong>, <em>communication</em>, and consistent service excellence.</p>

          <h3 className="text-2xl font-heading mb-2 font-semibold">
            <span className="font-semibold">Our</span> <span className="italic text-accent-orange">Mission</span>
          </h3>
          <p className="mb-4">To provide fast, reliable, and transparent clearing and forwarding services that simplify international trade for businesses in Kenya.</p>

          <h3 className="text-2xl font-heading mb-2 font-semibold">
            <span className="font-semibold">Our</span> <span className="italic text-accent-orange">Vision</span>
          </h3>
          <p className="mb-4">To become one of Kenya’s most trusted and efficient logistics partners, known for innovation, outstanding customer service, and a commitment to integrity.</p>

          <h3 className="text-2xl font-heading mb-2 font-semibold">
            <span className="font-semibold">Core</span> <span className="italic text-accent-orange">Values</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Integrity</strong> — honesty & ethics in all we do.</li>
            <li><strong>Transparency</strong> — clear communication & updates.</li>
            <li><strong>Reliability</strong> — dependable delivery & service.</li>
            <li><strong>Professionalism</strong> — high standards & respect.</li>
            <li><strong>Efficiency</strong> — reduce delays & cost where possible.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
