'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from "motion/react";
import { fadeInUpOnMount } from '../config/animations';
import { redirect } from 'next/navigation';

export default function ReusableForm({ apiUrl, fields, recaptchaSiteKey }) {
  const [formValues, setFormValues] = useState(
    Object.fromEntries(fields.map((field) => [field.name, '']))
  );
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const sanitize = (value) =>
    value.replace(/<\/?[^>]+(>|$)/g, '').trim();

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      const value = sanitize(formValues[field.name]);
      if (!value) {
        newErrors[field.name] = `${field.label} is required.`;
      }
      if (field.name === 'email' && value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const publicDomains = [
          'gmail.com',
          'yahoo.com',
          'hotmail.com',
          'outlook.com',
          'icloud.com',
          'aol.com',
          'live.com',
          'msn.com',
          'protonmail.com',
          'gmx.com',
          'zoho.com',
        ];

        const emailDomain = value.split('@')[1]?.toLowerCase();

        if (!emailPattern.test(value)) {
          newErrors.email = 'Invalid email address.';
        } else if (publicDomains.includes(emailDomain)) {
          newErrors.email = 'Company Email Required. Please use your official company email address to proceed. Personal email addresses are not accepted.';
        }
      }
      if (
        field.name === 'mobile' &&
        value &&
        !/^\+?\d{7,15}$/.test(value)
      ) {
        newErrors.mobile = 'Invalid mobile number.';
      }
    });
    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please confirm you are not a robot.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validate()) return;

    setLoading(true);
    try {
      // 1) Verify reCAPTCHA via your API route
      const verifyRes = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: recaptchaToken }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok || !verifyData.success) {
        setErrors((prev) => ({
          ...prev,
          recaptcha: 'Captcha verification failed. Please try again.',
        }));
        recaptchaRef.current.reset();
        setRecaptchaToken(null);
        setLoading(false);
        return;
      }

      const formData = new FormData();
      Object.entries(formValues).forEach(([key, val]) => {
        formData.append(key, val);
      });
      // CF7 requires these hidden fields
      formData.append('_wpcf7_unit_tag', 'rte');

      // 2) Submit form data
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      const data = await response.json();
      if (data.status === 'mail_sent') {
        redirect('/contact-us');
        setMessage(data.message || 'Message sent successfully.');
        setFormValues(
          Object.fromEntries(fields.map((f) => [f.name, '']))
        );
      } else {
        setMessage(data.message || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      setMessage('An error occurred. Please try again.');
    } finally {
      recaptchaRef.current.reset();
      setRecaptchaToken(null);
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
            {...fadeInUpOnMount(idx / 10)}
          >
            <label className="block text-[#DDE3EA] mb-1">
              {field.label}
            </label>
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

      {/* reCAPTCHA Checkbox */}
      <div className="mt-6">
        <ReCAPTCHA
          sitekey={recaptchaSiteKey}
          ref={recaptchaRef}
          onChange={(token) => {
            setRecaptchaToken(token);
            setErrors({ ...errors, recaptcha: '' });
          }}
        />
      </div>
      {errors.recaptcha && (
        <p className="!text-red-500 text-sm mt-2">
          {errors.recaptcha}
        </p>
      )}

      <motion.button
        {...fadeInUpOnMount(0.3)}
        type="submit"
        className="button-primary disabled:opacity-50 mx-auto block"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </motion.button>

      {message && (
        <p className="mt-4 text-[#DDE3EA]">{message}</p>
      )}
    </form>
  );
}