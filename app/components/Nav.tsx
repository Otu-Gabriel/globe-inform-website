'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300"
      style={{ boxShadow: scrollY > 10 ? '0 4px 6px rgba(10, 31, 68, 0.1)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/globeinformlogo1.png" alt="Globe Inform" width={80} height={80} />
            <span className="text-2xl font-bold" style={{ color: '#0A1F44' }}>Globe Inform</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium transition-all duration-300 hover:opacity-80" style={{ color: '#1A1A1A' }}>Home</Link>
            <Link href="/about" className="font-medium transition-all duration-300 hover:opacity-80" style={{ color: '#1A1A1A' }}>About Us</Link>
            <Link href="/products" className="font-medium transition-all duration-300 hover:opacity-80" style={{ color: '#1A1A1A' }}>Products</Link>
            <Link href="/services" className="font-medium transition-all duration-300 hover:opacity-80" style={{ color: '#1A1A1A' }}>Services</Link>
            <Link href="/contact" className="font-medium transition-all duration-300 hover:opacity-80" style={{ color: '#1A1A1A' }}>Contact</Link>
          </div>
          <div className="hidden md:block">
          <Link href="/contact">
              <button className="px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold gradient-btn-primary cursor-pointer">Get In Touch</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#0A1F44' }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                style={{ color: '#1A1A1A' }}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                style={{ color: '#1A1A1A' }}
              >
                About Us
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                style={{ color: '#1A1A1A' }}
              >
                Products
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                style={{ color: '#1A1A1A' }}
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                style={{ color: '#1A1A1A' }}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-2">
                <button className="w-full px-6 py-3 rounded-lg transition-all duration-300 font-semibold gradient-btn-primary text-white">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
