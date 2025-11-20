import React from 'react';

const faqs = [
  { q: 'How long does cargo clearance take?', a: 'Clearance time varies depending on documentation accuracy, customs inspections, and cargo type. We work to ensure the fastest possible clearance.' },
  { q: 'What documents do I need for importation?', a: 'Commercial invoice, packing list, bill of lading/airway bill, ID or PIN certificate, and any required permits depending on the product.' },
  { q: 'Do you offer door-to-door delivery?', a: 'Yes. We provide full logistics solutions from the port/airport to your desired location.' },
  { q: 'Do you handle both imports and exports?', a: 'Yes, we handle all types of cargo movement in and out of Kenya.' },
  { q: 'Can you help estimate customs duties?', a: 'Absolutely. We guide clients on applicable taxes and assist with duty estimation.' }
];

export default function FAQSection(){
  return (
    <div>
      {faqs.map((f, idx) => (
        <details key={idx} className="mb-3 bg-white p-4 rounded shadow-sm">
          <summary className="font-medium">{f.q}</summary>
          <p className="mt-2 text-gray-600">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
