'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen gradient-page-bg">
      <Nav />

      <section className="w-full py-15 gradient-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1F44' }}>
            Get In Touch
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
            Ready to transform your business? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#0A1F44' }}>
                Contact Information
              </h2>
              <p className="text-sm  mb-5 leading-relaxed" style={{ color: '#666' }}>
                We're here to help. Reach out to us through any of the following channels, or fill out the form 
                and we'll get back to you promptly.
              </p>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-xl gradient-card hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg gradient-icon-navy flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold " style={{ color: '#0A1F44' }}>Email</h3>
                    <a href="mailto:GlobeInform@gmail.com" className="text-sm  hover:opacity-80 transition-opacity" style={{ color: '#1E4DB7' }}>
                      GlobeInform@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3  rounded-xl gradient-card hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg gradient-icon-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#0A1F44' }}>Phone</h3>
                      <a href="tel:+233247041099" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#1E4DB7' }}>
                      +233 24 704 1099
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-3 rounded-xl gradient-card hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg gradient-icon-navy flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#0A1F44' }}>Address</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
                      4 Saxel Street<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-3 rounded-xl gradient-card hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg gradient-icon-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#0A1F44' }}>Business Hours</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#0A1F44' }}>
                Send Us a Message
              </h2>
              <div className="p-7 rounded-2xl shadow-lg gradient-contact-card">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#1E4DB7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0A1F44' }}>Message Sent!</h3>
                <p className="mb-6" style={{ color: '#666' }}>Thank you for contacting us. We will get back to you soon.</p>
                <button
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({ name: '', email: '', message: '' });
                    setFormError('');
                  }}
                  className="px-5 py-2 rounded-lg font-semibold transition-all duration-300 text-white gradient-btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormError('');
                  setFormStatus('loading');
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(formData),
                    });
                    const data = await response.json();
                    if (!response.ok) throw new Error(data.error || 'Failed to send message');
                    setFormStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                  } catch (error) {
                    setFormStatus('error');
                    setFormError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
                  }
                }}
              >
                {formError && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-red-600 text-sm">{formError}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4DB7] focus:ring-offset-2 outline-none transition-all"
                    style={{ borderColor: '#ddd' }}
                    placeholder="Your Name"
                    disabled={formStatus === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4DB7] focus:ring-offset-2 outline-none transition-all"
                    style={{ borderColor: '#ddd' }}
                    placeholder="your.email@example.com"
                    disabled={formStatus === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#1A1A1A' }}>Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4DB7] focus:ring-offset-2 outline-none transition-all resize-none"
                    style={{ borderColor: '#ddd' }}
                    placeholder="Tell us about your project or inquiry..."
                    disabled={formStatus === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-7 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white gradient-btn-primary disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
