import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

export default function Services(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <SectionHeader title="Our Services" subtitle="Comprehensive clearing, forwarding and logistics services" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="Customs Clearance">We handle all customs documentation and procedures to ensure quick clearance of your cargo at the port, airport, or border points. Our team ensures accuracy to prevent delays, penalties, or unnecessary charges.</ServiceCard>
          <ServiceCard title="Freight Forwarding (Air, Sea & Road)">We coordinate local and international transportation of goods using trusted partners, ensuring safe, timely, and cost-effective delivery.</ServiceCard>
          <ServiceCard title="Import & Export Documentation">We manage all paperwork required for smooth entry or exit of goods, including permits, declarations, invoices, and compliance documents.</ServiceCard>
          <ServiceCard title="Transport & Logistics">We provide reliable transportation solutions for both local and regional deliveries, ensuring your cargo reaches its final destination in good condition and on schedule.</ServiceCard>
          <ServiceCard title="Warehousing Solutions">We offer secure storage options for short-term and long-term needs, ensuring your goods are handled professionally and stored safely.</ServiceCard>
          <ServiceCard title="Customs Consultancy">We guide clients on regulations, taxes, requirements, and best practices to ensure compliance and avoid costly mistakes.</ServiceCard>
        </div>
      </main>
      <Footer />
    </div>
  )
}

