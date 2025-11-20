import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2" style={{fontFamily:'Poppins, Inter'}}>{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
}
