import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Hotel as Hospital, Building, Store, Users, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const hospitalPartners = [
  "Rainbow Hospitals",
  "Star Hospitals",
  "Basavatarakam Indo American Cancer Hospital & Research Institute",
  "Yashoda Hospitals",
  "Malla Reddy Health City"
];

const otherLocations = [
  "CapitaLand IT Parks",
  "Prestige High Fields",
  "Various High-Street Locations"
];

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Charvin - A Creative Company</title>
        <meta name="description" content="Learn about Charvin, a specialist in creating high-quality café experiences for healthcare and corporate environments." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-20 bg-brand-beige"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-black text-brand-purple">About Charvin</h1>
            <p className="mt-4 text-xl md:text-2xl text-brand-purple-light max-w-3xl mx-auto">
              Pioneering high-quality café experiences with creativity and care.
            </p>
          </motion.header>

          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                <span className="font-bold text-brand-purple">Charvin</span> specializes in creating high-quality café experiences tailored for demanding environments. Our operations are meticulously designed to provide patients, visitors, and staff with a <span className="font-semibold text-brand-purple-light">comforting, hygienic, and refreshing</span> coffee and dining experience, especially within healthcare.
              </p>
              <p className="leading-relaxed">
                We have proven expertise in successfully setting up and managing sophisticated coffee outlets in renowned hospitals, where we proudly operate under the <span className="font-semibold text-brand-purple-light">BARISTA</span> brand. Our commitment extends beyond hospitals to serve dynamic communities in high-street locations, gated communities, and bustling IT Parks.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img  class="w-full h-96 object-cover" alt="Modern and clean interior of a Charvin cafe in a hospital setting" src="https://images.unsplash.com/photo-1602465159052-bcb2e74d625c" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.section 
            className="mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-display text-center text-4xl md:text-5xl font-black text-brand-purple mb-12">
              Our Key Partnerships
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div variants={fadeInUp}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Hospital className="w-10 h-10 text-brand-purple" />
                    <h3 className="font-display text-3xl font-bold text-brand-purple-light">Healthcare Partners</h3>
                  </div>
                  <ul className="space-y-3">
                    {hospitalPartners.map(partner => (
                      <li key={partner} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{partner}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Building className="w-10 h-10 text-brand-purple" />
                    <h3 className="font-display text-3xl font-bold text-brand-purple-light">Corporate & Community</h3>
                  </div>
                   <ul className="space-y-3">
                    {otherLocations.map(loc => (
                      <li key={loc} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.section>

           <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
           >
            <motion.h2 variants={fadeInUp} className="font-display text-center text-4xl md:text-5xl font-black text-brand-purple mb-12">
              Our Vision
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div variants={fadeInUp}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img  class="w-full h-96 object-cover" alt="A team of Charvin baristas smiling and working together" src="https://images.unsplash.com/photo-1570890178293-32c6736fa013" />
                  </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed">
                  Our goal is to be the creative force behind exceptional food and beverage experiences everywhere. We believe in the power of a great cup of coffee or a wholesome meal to brighten someone's day.
                </p>
                <p className="leading-relaxed">
                  At every Charvin outlet, we are committed to quality, consistency, and a customer-first approach. We are constantly innovating, creating new concepts and brands to meet the evolving tastes of our diverse clientele.
                </p>
              </motion.div>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </>
  );
}

export default AboutPage;