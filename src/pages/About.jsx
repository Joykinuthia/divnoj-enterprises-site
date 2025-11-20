import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ValuesSection from '../components/ValuesSection';
import ContactPanel from '../components/ContactPanel';

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <SectionHeader title="About"/>

        <p className="text-gray-700 mb-4">We are a professional clearing and forwarding company based in Nairobi, Kenya, dedicated to providing seamless, reliable, and cost-effective logistics solutions. Whether you’re importing or exporting, we handle your cargo with precision, integrity, and transparency from start to finish.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Our Mission</h3>
        <p className="text-gray-700">“To provide fast, reliable, and transparent clearing and forwarding services that simplify international trade for businesses in Kenya.”</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Our Vision</h3>
        <p className="text-gray-700">“To become one of Kenya’s most trusted and efficient logistics partners, known for innovation, outstanding customer service, and a commitment to integrity.”</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Slogan</h3>
        <p className="text-gray-700">Moving our world forward</p>

        <section className="mt-8">
          <SectionHeader title="Our Core Values" />
          <ValuesSection />
        </section>

        <section className="container mx-auto px-4 py-8">
          <SectionHeader title="Contacts" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactPanel />
            <div className="bg-white p-4 rounded shadow-sm">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-sm">Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p className="text-sm">Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
