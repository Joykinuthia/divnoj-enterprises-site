// src/components/ContactPanel.jsx
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPanel = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center">
          <FaPhone className="text-blue-500 mr-3" />
          <span>+254 712 345 678</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="text-blue-500 mr-3" />
          <span>info@schoolname.ac.ke</span>
        </li>
        <li className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-3" />
          <span>Nairobi, Kenya</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactPanel;
