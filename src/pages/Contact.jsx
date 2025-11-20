// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactPanel from "../components/ContactPanel";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="page min-h-screen bg-clean-bg">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-heading text-navy text-center font-bold mb-8">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <ContactPanel />
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
