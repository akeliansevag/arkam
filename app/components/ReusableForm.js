'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from "motion/react";
import { fadeInUpOnMount } from '../config/animations';

// WARNING: including your secret client-side exposes it publicly!
const RECAPTCHA_SECRET = '6LeF610rAAAAAGPfOUIzrRRlYKoCBCuNBGw0JHo4';

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
    }
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
      // Submit your form data only; captcha already verified onChange
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
    } catch {
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

      {/* reCAPTCHA Checkbox with immediate verification */}
      <div className="mt-6">
        <div className="transform  bg-transparent">
          <ReCAPTCHA
            sitekey={recaptchaSiteKey}
            ref={recaptchaRef}
            onChange={async (token) => {
              setRecaptchaToken(token);
              setErrors({ ...errors, recaptcha: '' });
              // immediate verification
              try {
                const res = await fetch(
                  `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`,
                  { method: 'POST' }
                );
                const data = await res.json();
                if (!data.success) {
                  setErrors(prev => ({
                    ...prev,
                    recaptcha: 'Captcha verification failed. Please try again.'
                  }));
                  recaptchaRef.current.reset();
                  setRecaptchaToken(null);
                }
              } catch {
                setErrors(prev => ({
                  ...prev,
                  recaptcha: 'Captcha verification error.'
                }));
                recaptchaRef.current.reset();
                setRecaptchaToken(null);
              }
            }}
          />
        </div>
      </div>
      {errors.recaptcha && (
        <p className="!text-red-500 text-sm mt-1">
          {errors.recaptcha}
        </p>
      )}

      <motion.button
        {...fadeInUpOnMount(0.3)}
        type="submit"
        className="button-primary disabled:opacity-50 cursor-pointer mx-auto block"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </motion.button>

      {message && <p className="mt-4 text-[#DDE3EA] text-center">{message}</p>}
    </form>
  );
}