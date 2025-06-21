
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function Navbar() {
  const { toast } = useToast();
  const location = useLocation();

  const handleContactClick = () => {
    toast({
      title: "🚧 Contact feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#locations", label: "Locations" },
    { href: "/#services", label: "Services" },
    { href: "/menu", label: "Menu" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="font-display text-2xl font-bold text-gray-900">CHARVIN</span>
            <span className="text-sm text-gray-600 font-medium hidden sm:inline">A CREATIVE COMPANY</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href} 
                className={`font-medium transition-colors
                  ${(location.pathname + location.hash === link.href) || (location.pathname === link.href && link.href === "/menu")
                    ? 'text-amber-600' 
                    : 'text-gray-700 hover:text-amber-600'}`
                }
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={handleContactClick} className="coffee-gradient text-white hover:opacity-90">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
