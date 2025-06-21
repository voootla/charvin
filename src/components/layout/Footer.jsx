import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
             <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              {/* <UtensilsCrossed className="h-8 w-8 text-brand-yellow" /> */}
              <div>
                <span className="block font-display text-2xl font-black leading-none">CHARVIN</span>
                <span className="block text-xs font-light tracking-widest">A CREATIVE COMPANY</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              Your one-stop platform for diverse culinary brands. From fresh salads and juices to gourmet coffee and pizza, we bring creativity to the table.
            </p>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block text-brand-yellow">Our Brands</span>
            <div className="space-y-2 text-gray-300">
              <p>Charvin Salads</p>
              <p>Charvin Juices</p>
              <p>Charvin Coffee</p>
              <p>Charvin Pizza</p>
              <p>Charvin Wraps</p>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block text-brand-yellow">Company</span>
            <div className="space-y-2 text-gray-300">
              <Link to="/about" className="block hover:text-brand-yellow transition-colors">About Us</Link>
              <p className="cursor-pointer hover:text-brand-yellow transition-colors">Careers</p>
              <p className="cursor-pointer hover:text-brand-yellow transition-colors">Partner With Us</p>
              <p className="cursor-pointer hover:text-brand-yellow transition-colors">Contact</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-purple-light mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Charvin - A Creative Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;