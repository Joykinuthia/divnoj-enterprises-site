// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="page min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        {/* Heading with same style as Home/About */}
        <h2 className="text-3xl font-heading text-center font-bold italic mb-8 text-orange-500">
          Contact Us
        </h2>

        {/* Contact form wrapper */}
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow">
          <p className="text-navy mb-6 text-center">
            Reach out to us for inquiries, quotes, or support. 
            Our team is ready to provide reliable clearing and forwarding assistance.
          </p>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

