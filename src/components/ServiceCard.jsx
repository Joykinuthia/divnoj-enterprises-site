import React from 'react';

export default function ServiceCard({ title, children }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-5">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
}
