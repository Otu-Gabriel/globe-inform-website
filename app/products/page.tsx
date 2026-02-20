'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Life Insurance Management System',
    description: 'Comprehensive solution for managing life insurance policies, claims, underwriting, and policyholder services. Streamline operations with automated workflows and real-time reporting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ['Policy Management', 'Claims Processing', 'Underwriting', 'Premium Calculation', 'Reporting & Analytics'],
  },
  {
    id: 2,
    name: 'School Management System',
    description: 'Complete educational institution management platform covering student enrollment, academic records, fee management, staff administration, and parent communication.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Student Management', 'Academic Records', 'Fee Management', 'Staff Administration', 'Parent Portal'],
  },
  {
    id: 3,
    name: 'General Insurance System',
    description: 'Robust platform for managing non-life insurance products including motor, property, health, and liability insurance. Handle policies, claims, and renewals efficiently.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Multi-Product Support', 'Claims Management', 'Policy Administration', 'Renewal Processing', 'Risk Assessment'],
  },
  {
    id: 4,
    name: 'Pensions System',
    description: 'End-to-end pension fund management solution for contributions, benefits administration, member services, and compliance reporting. Ensure regulatory compliance and member satisfaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ['Contribution Management', 'Benefits Administration', 'Member Services', 'Compliance Reporting', 'Investment Tracking'],
  },
  {
    id: 5,
    name: 'Tax Management System',
    description: 'Comprehensive tax administration platform for tax calculation, filing, compliance monitoring, and reporting. Simplify complex tax processes with automation and accuracy.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Tax Calculation', 'Filing & Submission', 'Compliance Monitoring', 'Audit Trail', 'Multi-Tax Support'],
  },
  {
    id: 6,
    name: 'Re-insurance Management System',
    description: 'Specialized platform for managing reinsurance contracts, cessions, recoveries, and treaty administration. Optimize reinsurance operations and risk transfer.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    features: ['Treaty Management', 'Cession Processing', 'Recovery Management', 'Risk Transfer', 'Reporting'],
  },
  {
    id: 7,
    name: 'Treasury Management System',
    description: 'Advanced treasury operations platform for cash management, liquidity planning, foreign exchange, and investment tracking. Optimize financial resources and mitigate risks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Cash Management', 'Liquidity Planning', 'FX Management', 'Investment Tracking', 'Risk Management'],
  },
  {
    id: 8,
    name: 'Investment Management System',
    description: 'Comprehensive investment portfolio management solution for asset allocation, performance tracking, compliance monitoring, and client reporting. Maximize returns and manage risk effectively.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: ['Portfolio Management', 'Performance Analytics', 'Asset Allocation', 'Compliance Monitoring', 'Client Reporting'],
  },
];

export default function ProductsPage() {
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

      {/* Page Header */}
      <section className="w-full py-16 gradient-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1F44' }}>
            Our Products & Applications
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666' }}>
            Comprehensive software solutions designed to streamline operations, enhance efficiency, and drive business growth across various industries.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="fade-in-on-scroll p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 gradient-card"
              >
                <div className="w-16 h-16 rounded-lg gradient-icon-navy flex items-center justify-center mb-6 text-white transition-transform duration-300 hover:rotate-12">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1F44' }}>
                  {product.name}
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: '#666' }}>
                  {product.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: '#1E4DB7' }}>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm" style={{ color: '#666' }}>
                        <span className="mr-2" style={{ color: '#00B3A4' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact">
                  <button className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white gradient-btn-primary hover:shadow-lg transform hover:scale-105">
                    Request Demo
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            We also develop custom software solutions tailored to your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg text-lg font-semibold bg-white text-[#0A1F44] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] transition-all duration-300 transform hover:scale-105">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
