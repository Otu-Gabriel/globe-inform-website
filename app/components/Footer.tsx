import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 gradient-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Globe Inform</h3>
            <p className="text-blue-200 mb-4">Smart Solutions for Complex Problems</p>
            <p className="text-blue-300 text-sm">Globe Inform Computer Systems Ltd</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Insurance Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Tax Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Database Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="mailto:info@globeinform.com" className="hover:text-white transition-colors">
                  info@globeinform.com
                </a>
              </li>
              <li>
                <a href="tel:+233241234567" className="hover:text-white transition-colors">
                  +233 24 123 4567
                </a>
              </li>
              <li>4 Saxel Street, Accra, Ghana</li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Globe Inform Computer Systems Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
