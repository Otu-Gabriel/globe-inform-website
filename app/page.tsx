'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AnimatedCounter from './components/AnimatedCounter';

export default function Home() {
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

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden gradient-hero-bg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full animate-float bg-gradient-to-br from-[#1E4DB7] to-[#00B3A4]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full animate-float bg-gradient-to-tl from-[#00B3A4] to-[#0A1F44]" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-on-scroll">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up"
              style={{ color: '#0A1F44' }}
            >
              Globe Inform Computer Systems Ltd
              <span className="block text-3xl mt-2 bg-gradient-to-r from-[#1E4DB7] to-[#00B3A4] bg-clip-text text-transparent">(GICSL)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ color: '#1A1A1A' }}>
              Smart Solutions for Complex Problems
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ color: '#666' }}>
              Leading IT consulting and software development firm specializing in insurance applications,
              tax systems, and database analytics. We transform complex challenges into innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link href="/services">
                <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white gradient-btn-primary">
                  Explore Our Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-all duration-300 transform hover:scale-105 gradient-btn-outline border-[#1E4DB7] text-[#1E4DB7] bg-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* About Us Section */}
      <section className="py-20 gradient-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A1F44' }}>
                About Globe Inform
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#1A1A1A' }}>
                Globe Inform Computer Systems Ltd <span className=" bg-gradient-to-r from-[#1E4DB7] to-[#00B3A4] bg-clip-text text-transparent">(GICSL) </span> 
                is a leading IT consulting and software project firm 
                dedicated to delivering smart solutions for complex operational challenges. With over 15 years 
                of experience, we specialize in transforming intricate problems into innovative, reliable 
                technology solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#1A1A1A' }}>
                Our expertise spans across insurance applications (life, non-life, pension, and finance), 
                comprehensive tax management systems, and advanced database analytics. We combine deep 
                industry knowledge with cutting-edge technology to help organizations streamline operations, 
                enhance efficiency, and drive digital transformation.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#1A1A1A' }}>
                At Globe Inform, we believe in building lasting partnerships with our clients, understanding 
                their unique needs, and delivering solutions that not only meet but exceed expectations. 
                Our team of 50+ experts is committed to excellence, innovation, and timely delivery.
              </p>
              <Link href="/about">
                <button className="px-8 py-4 rounded-lg text-lg font-semibold text-white gradient-btn-primary transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More About Us
                </button>
              </Link>
            </div>
            <div className="fade-in-on-scroll">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#0A1F44] via-[#1E4DB7] to-[#00B3A4] relative">
                  {/* Placeholder for professional image - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      {/* <svg className="w-32 h-32 mx-auto mb-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg> */}
                      <Image src="/globeinformlogo1.png" alt="Globe Inform" width={300} height={150} />
                      <p className="text-white/90 text-lg font-medium">Globe Inform Computer Systems Ltd
                      <span className="block  mt-2 bg-gradient-to-r from-[#e2e8f7] to-[#acdeda] bg-clip-text text-transparent">(GICSL)</span>
                      </p>
                      <p className="text-white/70 text-sm mt-2">Smart Solutions for Complex Problems</p>
                    </div>
                  </div>
                  {/* Uncomment below and add your image path */}
                  {/* <Image
                    src="/team-professional.jpg"
                    alt="Globe Inform Professional Team"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      {/* <section className="py-16 gradient-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/about" className="fade-in-on-scroll p-8 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1F44' }}>About Us</h3>
              <p className="text-sm" style={{ color: '#666' }}>Our impact, expertise, and why clients choose us</p>
            </Link>
            <Link href="/services" className="fade-in-on-scroll p-8 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1F44' }}>Services</h3>
              <p className="text-sm" style={{ color: '#666' }}>IT consulting, insurance apps, tax systems, analytics</p>
            </Link>
            <Link href="/contact" className="fade-in-on-scroll p-8 rounded-2xl gradient-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1F44' }}>Contact</h3>
              <p className="text-sm" style={{ color: '#666' }}>Get in touch for a conversation</p>
            </Link>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
