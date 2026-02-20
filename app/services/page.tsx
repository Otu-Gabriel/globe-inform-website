'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import ServiceChart from '../components/ServiceChart';

export default function ServicesPage() {
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

      {/* Page header */}
      <section className="w-full py-14 gradient-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0A1F44' }}>
            Our Services
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-on-scroll gradient-card">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 gradient-icon-navy text-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>IT Consulting</h3>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                Expert guidance to optimize your technology infrastructure, streamline processes, and drive digital transformation.
              </p>
            </div>

            <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-on-scroll gradient-card-blue">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 gradient-icon-teal text-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>Insurance Applications</h3>
              <p className="leading-relaxed mb-4" style={{ color: '#666' }}>Specialized software for the insurance industry:</p>
              <ul className="space-y-2" style={{ color: '#666' }}>
                <li className="flex items-center"><span className="mr-2" style={{ color: '#1E4DB7' }}>✓</span> Life Insurance Systems</li>
                <li className="flex items-center"><span className="mr-2" style={{ color: '#1E4DB7' }}>✓</span> Non-Life Insurance Solutions</li>
                <li className="flex items-center"><span className="mr-2" style={{ color: '#1E4DB7' }}>✓</span> Pension Management Systems</li>
                <li className="flex items-center"><span className="mr-2" style={{ color: '#1E4DB7' }}>✓</span> Financial Services Applications</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-on-scroll gradient-card-teal">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 gradient-icon-teal text-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>Tax Systems</h3>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                Comprehensive tax management solutions for compliance, automation, and accurate reporting.
              </p>
            </div>

            <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-on-scroll md:col-span-2 lg:col-span-1 gradient-card-blue">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 gradient-icon-teal text-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>Database Analytics</h3>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                Transform data into actionable insights with advanced analytics and visualization.
              </p>
            </div>

            <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-on-scroll md:col-span-2 lg:col-span-1 gradient-card">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 gradient-icon-navy text-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>Software Development</h3>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                Custom software solutions from concept to deployment — scalable, secure, and efficient.
              </p>
            </div>

            <div className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-on-scroll md:col-span-2 lg:col-span-1 gradient-card-teal">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:rotate-12 gradient-icon-teal text-white">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>Enterprise Solutions</h3>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                End-to-end enterprise solutions that integrate with your existing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 gradient-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-on-scroll">
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A1F44' }}>Our Expertise</h2>
              <ProgressBar label="Insurance Systems" percentage={95} color="#1E4DB7" delay={0} />
              <ProgressBar label="Tax Management" percentage={92} color="#00B3A4" delay={200} />
              <ProgressBar label="Database Analytics" percentage={88} color="#1E4DB7" delay={400} />
              <ProgressBar label="Enterprise Integration" percentage={90} color="#0A1F44" delay={600} />
              <ProgressBar label="IT Consulting" percentage={94} color="#00B3A4" delay={800} />
            </div>
            <div className="fade-in-on-scroll">
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A1F44' }}>Service Distribution</h2>
              <ServiceChart
                data={[
                  { label: 'Insurance Apps', value: 35, color: '#1E4DB7' },
                  { label: 'Tax Systems', value: 25, color: '#00B3A4' },
                  { label: 'Analytics', value: 20, color: '#0A1F44' },
                  { label: 'Consulting', value: 20, color: '#1E4DB7' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 gradient-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-lg mb-6" style={{ color: '#1A1A1A' }}>Need a custom solution?</p>
          <Link href="/contact">
            <button className="px-6 py-2 md:px-7 md:py-3 rounded-lg text-sm md:text-lg font-semibold text-white gradient-btn-primary transition-all duration-300 transform hover:scale-105 shadow-lg">Contact Us</button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
