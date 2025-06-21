import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import brandsData from '@/data/brandsData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const BrandCard = ({ brand }) => {
  return (
    <motion.div variants={fadeInUp} className="w-full">
      <Link to={`/brand/${brand.id}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col h-full">
          <div className="p-6 bg-brand-beige relative">
            <img-replace class="w-full h-48 object-contain" alt={`${brand.name} product shot`} src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" />
            <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center ${brand.colorScheme.primary} shadow-md`}>
              {/* <brand.icon className="h-6 w-6 text-white" /> */}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div>
              <h3 className="font-display text-2xl font-black text-brand-purple">{brand.name}</h3>
              <p className={`text-sm font-semibold ${brand.colorScheme.secondary} mb-3`}>{brand.slogan}</p>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{brand.description}</p>
            <Button 
              asChild
              className="w-full bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-lg py-6 mt-auto"
            >
              <div className="w-full text-center">View Menu</div>
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-28 pb-16"
    >
      <section className="text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl font-black text-brand-purple leading-tight"
        >
          A World of Flavors.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-xl md:text-2xl text-brand-purple-light max-w-3xl mx-auto"
        >
          Charvin brings you a curated collection of in-house culinary brands. Your next favorite meal is just a discovery away.
        </motion.p>
      </section>

      <motion.section 
        id="brands"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandsData.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl font-black text-brand-purple">A Creative Company</h2>
        <p className="mt-4 text-lg text-brand-purple-light leading-relaxed">
          Charvin specializes in creating high-quality café experiences tailored for healthcare and corporate environments. We design comforting, hygienic, and refreshing dining experiences with proven expertise.
        </p>
        <Button asChild size="lg" className="mt-8 bg-brand-purple hover:bg-brand-purple-light text-white rounded-full font-bold px-8 py-4">
            <Link to="/about">Learn More About Us</Link>
        </Button>
      </motion.section>
    </motion.div>
  );
}

export default HomePage;