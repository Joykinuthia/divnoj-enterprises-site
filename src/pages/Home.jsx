import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import ValuesSection from '../components/ValuesSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import ContactPanel from '../components/ContactPanel';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <section className="container mx-auto px-4 py-12">
          <SectionHeader title="About Divnoj Enterprises"/>
          <p className="text-gray-700 mb-4">We are a professional clearing and forwarding company based in Nairobi, Kenya, dedicated to providing seamless, reliable, and cost-effective logistics solutions. Whether you’re importing or exporting, we handle your cargo with precision, integrity, and transparency from start to finish.</p>
          <p className="text-gray-700 mb-6">With an experienced team and strong networks at the port, airport, and border points, we ensure your goods move smoothly across the supply chain—with reduced delays, accurate documentation, and timely updates.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ServiceCard title="Customs Clearance">We handle all customs documentation and procedures to ensure quick clearance of your cargo at the port, airport, or border points.</ServiceCard>
            <ServiceCard title="Freight Forwarding">Coordination of air, sea and road transport to ensure safe, timely and cost-effective delivery.</ServiceCard>
            <ServiceCard title="Import & Export Docs">We manage permits, declarations, invoices and compliance documents for smooth entry or exit of goods.</ServiceCard>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 bg-slate-50">
          <SectionHeader title="Why Choose Us" />
          <WhyChooseUs />
        </section>

        <section className="container mx-auto px-4 py-12">
          <SectionHeader title="Our Core Values" />
          <ValuesSection />
        </section>

        <section className="container mx-auto px-4 py-12 bg-slate-50">
          <SectionHeader title="Frequently Asked Questions" />
          <FAQSection />
        </section>

        <section className="container mx-auto px-4 py-12" id="contact">
          <SectionHeader title="Contact Us" subtitle="Fill out the form and our team will contact you shortly." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactPanel />
              <div className="bg-white p-4 rounded shadow-sm mt-4">
                <h5 className="font-semibold mb-2">Office Location</h5>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
