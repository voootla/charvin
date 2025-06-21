import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function Navbar() {
  const { toast } = useToast();
  
  const handleActionClick = (feature) => {
    toast({
      title: `🚧 ${feature} is coming soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* <UtensilsCrossed className="h-8 w-8 text-brand-purple" /> */}
              <div>
                <span className="block font-display text-3xl font-black text-brand-purple leading-none">CHARVIN</span>
                <span className="block text-xs font-semibold text-brand-purple-light tracking-widest">A CREATIVE COMPANY</span>
              </div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
             <Link to="/" className="font-semibold text-brand-purple hover:text-brand-purple-light transition-colors">Our Brands</Link>
             <Link to="/about" className="font-semibold text-brand-purple hover:text-brand-purple-light transition-colors">About Us</Link>
            <Button onClick={() => handleActionClick('Contact')} className="bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-bold px-6 py-3">
              Contact
            </Button>
          </div>
          <div className="md:hidden">
             <Button onClick={() => handleActionClick('Mobile Menu')} variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-brand-purple" />
             </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;