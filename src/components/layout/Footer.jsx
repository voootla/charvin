
import React from 'react';
import { Coffee } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="font-display text-2xl font-bold">CHARVIN</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating premium café experiences for healthcare environments with a focus on quality, hygiene, and comfort.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Our Locations</span>
            <div className="space-y-2 text-gray-400">
              <p>Rainbow Hospitals</p>
              <p>Star Hospitals</p>
              <p>Yashoda Hospitals</p>
              <p>Prestige High Fields</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Services</span>
            <div className="space-y-2 text-gray-400">
              <p>Hospital Café Setup</p>
              <p>Premium Coffee Service</p>
              <p>Healthcare Catering</p>
              <p>Brand Partnership</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Charvin - A Creative Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
