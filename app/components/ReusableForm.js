'use client';

import { useState } from 'react';

import { motion } from "motion/react";
import { fadeInUpOnMount } from '../config/animations';

export default function ReusableForm({ apiUrl, fields }) {
  const [formValues, setFormValues] = useState(
    Object.fromEntries(fields.map((field) => [field.name, '']))
  );
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sanitize = (value) =>
    value.replace(/<\/?[^>]+(>|$)/g, '').trim(); // Strip HTML tags & trim

  const validate = () => {
    const newErrors = {};

    for (const field of fields) {
      const value = sanitize(formValues[field.name]);

      if (!value) {
        newErrors[field.name] = `${field.label} is required.`;
        continue;
      }

      if (field.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Invalid email address.';
      }

      if (field.name === 'mobile' && !/^\+?\d{7,15}$/.test(value)) {
        newErrors.mobile = 'Invalid mobile number.';
      }

      // Add more validation cases if needed
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (data.status === 'mail_sent') {
        setMessage(data.message || 'Message sent successfully.');
        setFormValues(Object.fromEntries(fields.map((f) => [f.name, ''])));
      } else {
        setMessage(data.message || 'Submission failed.');
      }
    } catch (err) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 max-lg:gap-5 lg:gap-10">
        {fields.map((field, idx) => (
          <motion.div
            key={field.name}
            className={field.fullWidth ? 'md:col-span-2' : ''}
            {...fadeInUpOnMount(idx/10)}
          >
            <label className="block text-[#DDE3EA] mb-1">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formValues[field.name]}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-[#8C9AA9] rounded-2xl text-[#DDE3EA]"
                rows="4"
                placeholder={field.label}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formValues[field.name]}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-[#8C9AA9] rounded-2xl text-[#DDE3EA]"
                placeholder={field.label}
              />
            )}
            {errors[field.name] && (
              <p className="!text-red-500 text-sm mt-1 ml-1">
                {errors[field.name]}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.button
        {...fadeInUpOnMount(0.3)}
        type="submit"
        className="button-primary disabled:opacity-50 cursor-pointer"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </motion.button>

      {message && <p className="mt-4 text-[#DDE3EA]">{message}</p>}
    </form>
  );
}