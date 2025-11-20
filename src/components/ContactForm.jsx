import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus('Please fill name, email and message.');
      return;
    }

    // Build a mailto link to open the user's email client with the filled content.
    const subject = encodeURIComponent(`Contact from website: ${name}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      `Message:`,
      message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:divnojenterprisesltd@gmail.com?subject=${subject}&body=${body}`;

    // Attempt to open mail client
    window.location.href = mailto;
    setStatus('Opening your mail client...');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4" id="contact-form">
      <input name="name" placeholder="Full Name" className="p-2 border rounded" required />
      <input name="email" type="email" placeholder="Email Address" className="p-2 border rounded" required />
      <input name="phone" placeholder="Phone Number" className="p-2 border rounded" />
      <textarea name="message" placeholder="Message" className="p-2 border rounded md:col-span-2" rows={5} required />
      <button type="submit" className="md:col-span-2 bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
      {status && <div className="md:col-span-2 text-sm text-gray-600">{status}</div>}
    </form>
  );
}
