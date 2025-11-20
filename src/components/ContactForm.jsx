// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full"
    >
      <h2 className="text-2xl font-heading font-bold italic text-center text-orange-500 mb-6">
        Send Us a Message
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-navy hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-[#4B2E1E] transition-all duration-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-navy hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-[#4B2E1E] transition-all duration-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-navy hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-400 hover:to-[#4B2E1E] transition-all duration-300">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border border-gray-300 rounded px-3 py-2 text-navy focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 font-bold rounded-md shadow text-white bg-gradient-to-r from-yellow-400 via-orange-400 to-[#4B2E1E] hover:from-orange-400 hover:to-yellow-400 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
