import React, { useState } from 'react';

export default function ContactPanel(){
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const phone = '0726876555';
  const email = 'divnojenterprisesltd@gmail.com';

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard: ' + text);
    } catch(e) {
      // fallback: prompt
      window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="font-semibold mb-3">Contacts</h4>
      <div className="flex gap-3">
        <button onClick={() => setShowPhone(s => !s)} className="px-3 py-2 border rounded">Phone</button>
        <button onClick={() => setShowEmail(s => !s)} className="px-3 py-2 border rounded">Email</button>
      </div>

      <div className="mt-3">
        {showPhone && (
          <div className="mb-2">
            <a href={`tel:${phone}`} className="font-medium text-indigo-600 mr-3">{phone}</a>
            <button onClick={() => copy(phone)} className="text-sm text-gray-500">Copy</button>
          </div>
        )}

        {showEmail && (
          <div>
            <a href={`mailto:${email}`} className="font-medium text-indigo-600 mr-3">{email}</a>
            <button onClick={() => copy(email)} className="text-sm text-gray-500">Copy</button>
          </div>
        )}
      </div>
    </div>
  )
}
