'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutPage() {
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
      {/* <section className="w-full py-16 gradient-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1F44' }}>
            About Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#666' }}>
            Globe Inform Computer Systems Ltd — Smart solutions for complex problems
          </p>
        </div>
      </section> */}

      {/* About Us - Information Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0A1F44' }}>
              Who We Are
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
              Learn more about Globe Inform Computer Systems Ltd
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-in-on-scroll p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 gradient-card">
              <div className="w-14 h-14 rounded-xl gradient-icon-navy flex items-center justify-center mb-6 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0A1F44' }}>
                Our Company
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                Globe Inform Computer Systems Ltd (GICSL) is a leading IT consulting and software project firm dedicated to delivering smart solutions for complex operational challenges. With over 15 years of experience, we specialize in transforming intricate problems into innovative, reliable technology solutions.
              </p>
            </div>
            <div className="fade-in-on-scroll p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 gradient-card-blue">
              <div className="w-14 h-14 rounded-xl gradient-icon-teal flex items-center justify-center mb-6 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0A1F44' }}>
                Our Expertise
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                Our expertise spans across insurance applications (life, non-life, pension, and finance), comprehensive tax management systems, and advanced database analytics. We combine deep industry knowledge with cutting-edge technology to help organizations streamline operations, enhance efficiency, and drive digital transformation.
              </p>
            </div>
            <div className="fade-in-on-scroll p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 gradient-card-teal">
              <div className="w-14 h-14 rounded-xl gradient-icon-teal flex items-center justify-center mb-6 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#0A1F44' }}>
                Our Commitment
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                At Globe Inform, we believe in building lasting partnerships with our clients, understanding their unique needs, and delivering solutions that not only meet but exceed expectations. Our team of 50+ experts is committed to excellence, innovation, and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact (stats) */}
      <section className="py-20 relative gradient-section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Impact</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Numbers that speak to our commitment and expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center fade-in-on-scroll p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-blue-200 mt-4 text-lg font-medium">Projects Completed</p>
            </div>
            <div className="text-center fade-in-on-scroll p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <AnimatedCounter end={200} suffix="+" />
              <p className="text-blue-200 mt-4 text-lg font-medium">Happy Clients</p>
            </div>
            <div className="text-center fade-in-on-scroll p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-blue-200 mt-4 text-lg font-medium">Years Experience</p>
            </div>
            <div className="text-center fade-in-on-scroll p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <AnimatedCounter end={50} suffix="+" />
              <p className="text-blue-200 mt-4 text-lg font-medium">Expert Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden gradient-section-about">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #1E4DB7 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00B3A4 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Globe Inform?</h2>
            <p className="text-l text-blue-200 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in-on-scroll p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:rotate-12">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
              <p className="text-blue-200">
                Our team of experienced professionals brings deep industry knowledge and technical expertise to every project.
              </p>
            </div>
            <div className="text-center fade-in-on-scroll p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:rotate-12">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Proven Solutions</h3>
              <p className="text-blue-200">
                We deliver reliable, scalable solutions that have been tested and proven across various industries and use cases.
              </p>
            </div>
            <div className="text-center fade-in-on-scroll p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:rotate-12">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Timely Delivery</h3>
              <p className="text-blue-200">
                We understand the importance of deadlines and commit to delivering projects on time without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl mb-6" style={{ color: '#1A1A1A' }}>
            Ready to work with us?
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 rounded-lg text-lg font-semibold text-white gradient-btn-primary transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
