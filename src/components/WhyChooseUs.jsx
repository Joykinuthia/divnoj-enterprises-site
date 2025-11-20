import React from 'react';

const points = [
  { title: 'Experienced Professionals', desc: 'Our team has extensive expertise in customs processes, logistics, and documentation.' },
  { title: 'Clear Communication', desc: 'We keep you informed at every stage—from shipping to clearance and delivery.' },
  { title: 'Timely Deliveries', desc: 'Our processes are built to minimize delays and ensure reliable timelines.' },
  { title: 'Customized Solutions', desc: 'We tailor our services to meet the unique needs of individuals, SMEs, and corporate clients.' },
  { title: 'Affordability & Transparency', desc: 'Fair pricing with no hidden fees. You always know what you’re paying for.' }
];

export default function WhyChooseUs(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {points.map((p, i) => (
        <div key={i} className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-semibold mb-2">{p.title}</h4>
          <p className="text-gray-600 text-sm">{p.desc}</p>
        </div>
      ))}
    </div>
  )
}
