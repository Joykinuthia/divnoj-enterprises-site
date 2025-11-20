import React from 'react';

const values = [
  'Integrity',
  'Transparency',
  'Reliability',
  'Professionalism',
  'Efficiency'
];

export default function ValuesSection(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {values.map((v, i) => (
        <div key={i} className="bg-white p-4 rounded shadow-sm text-center">
          <div className="font-semibold">{v}</div>
        </div>
      ))}
    </div>
  )
}
