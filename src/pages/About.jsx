import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="page">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-md shadow p-8">
          {/* Main heading */}
          <h2 className="text-3xl font-heading text-center font-bold mb-6 text-orange-500">
            About Us
          </h2>

          {/* Body paragraphs */}
          <p className="mb-4 text-navy">
            We are a professional clearing and forwarding company based in Nairobi, Kenya,
            dedicated to providing seamless, reliable, and cost-effective logistics solutions.
            Whether you are importing or exporting, we handle your cargo with precision, 
            integrity, and transparency from the beginning to the end.
          </p>

          <p className="mb-4 text-navy">
            With an experienced team and strong networks at the port, airport, different warehouses and border points, 
            we ensure your goods move smoothly across the supply chain, minimizing delays, 
            maintaining accurate documentation, and providing timely updates.
          </p>

          <p className="mb-6 text-navy">
            Our focus is on building long-term relationships through trust, clear communication, 
            and consistent service excellence.
          </p>

          {/* Mission */}
          <h3 className="text-2xl font-heading mb-2 font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#4B2E1E] 
                         hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
            Our Mission
          </h3>
          <p className="mb-4 text-navy">
            To provide fast, reliable, and transparent clearing and forwarding services 
            that simplify international trade for businesses in Kenya.
          </p>

          {/* Vision */}
          <h3 className="text-2xl font-heading mb-2 font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#4B2E1E] 
                         hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
            Our Vision
          </h3>
          <p className="mb-4 text-navy">
            To become one of Kenya’s most trusted and efficient logistics partners, 
            known for innovation, outstanding customer service, and a commitment to integrity.
          </p>

          {/* Core Values */}
          <h3 className="text-2xl font-heading mb-2 font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#4B2E1E] 
                         hover:from-yellow-300 hover:via-orange-400 hover:to-[#A0522D] transition-all duration-300">
            Core Values
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-navy">
            <li><strong>Integrity</strong> — honesty and ethics in all we do.</li>
            <li><strong>Transparency</strong> — clear communication and updates.</li>
            <li><strong>Reliability</strong> — dependable delivery and service.</li>
            <li><strong>Professionalism</strong> — high standards and respect.</li>
            <li><strong>Efficiency</strong> — reducing delays and costs where possible.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}



