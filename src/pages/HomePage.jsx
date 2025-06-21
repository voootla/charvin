
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Users, Award, MapPin, Phone, Mail, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const hospitals = [
  "Rainbow Hospitals",
  "Star Hospitals",
  "Basavatarakam Indo American Cancer Hospital & Research Institute",
  "Yashoda Hospitals",
  "Malla Reddy Health City"
];

const features = [
  {
    icon: Heart,
    title: "Healthcare Focused",
    description: "Specialized café experiences designed specifically for healthcare environments"
  },
  {
    icon: Users,
    title: "Patient & Staff Care",
    description: "Serving patients, visitors, and medical staff with comfort and quality"
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Successfully operating in renowned hospitals and premium locations"
  },
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "High-quality coffee and refreshments with hygienic standards"
  }
];

function HomePage() {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Contact feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="font-display text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Premium <span className="gradient-text">Café</span> Experiences
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Specializing in high-quality café solutions tailored for healthcare environments. 
                  Providing comfort, hygiene, and exceptional service to patients, visitors, and medical staff.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  asChild
                  size="lg" 
                  className="coffee-gradient text-white hover:opacity-90 px-8 py-3 text-lg"
                >
                  <Link to="/menu">View Our Menu</Link>
                </Button>
                <Button 
                  onClick={handleContactClick}
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
                >
                  Partner With Us
                </Button>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">Trusted by 5+ Major Hospitals</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/06b17ca2-34b7-4cd5-ad67-380f2d83713a/14e9c9af11bb7ef0a6f1e8e77c240061.jpg"
                  alt="Charvin café interior with modern design and comfortable seating"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="coffee-gradient rounded-full p-3">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5+ Hospital Locations</p>
                    <p className="text-sm text-gray-600">Serving healthcare communities</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Charvin</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of healthcare environments and deliver café solutions that prioritize comfort, hygiene, and quality.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="coffee-gradient rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hospital Partners Section */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Hospital Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving renowned healthcare institutions with premium café experiences
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="coffee-gradient rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{hospital}</h3>
                    <p className="text-sm text-gray-600">Active café operations</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white"
            {...fadeInUp}
          >
            <h3 className="font-display text-2xl font-bold mb-4">Also Operating at Premium Locations</h3>
            <p className="text-lg mb-6 opacity-90">
              Including Prestige High Fields under the BARISTA brand - bringing quality coffee to gated communities
            </p>
            <div className="flex justify-center">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/06b17ca2-34b7-4cd5-ad67-380f2d83713a/fa618b27dadc6379c31845109934fa09.jpg"
                alt="Charvin branded coffee cup showcasing quality and branding"
                className="w-32 h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="gradient-text">Charvin</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Charvin is a creative company specializing in creating high-quality café experiences 
                tailored specifically for healthcare environments. Our operations are designed to provide 
                patients, visitors, and staff with a comforting, hygienic, and refreshing coffee experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have proven expertise in successfully setting up and managing coffee outlets in 
                renowned hospitals, ensuring that every cup served meets the highest standards of 
                quality and hygiene that healthcare environments demand.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-600">Hospital Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-gray-600">Quality Focused</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img  
                  className="w-full h-[500px] object-cover"
                  alt="Healthcare café environment with patients and staff enjoying coffee"
                  src="https://images.unsplash.com/photo-1604025042047-749639ab8a14" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Partner With <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring premium café experiences to your healthcare facility? Let's discuss how we can serve your community.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="coffee-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">Ready to discuss your café needs</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="coffee-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">Send us your requirements</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="coffee-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">See our operations firsthand</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center"
            {...fadeInUp}
          >
            <Button 
              onClick={handleContactClick}
              size="lg" 
              className="coffee-gradient text-white hover:opacity-90 px-12 py-4 text-lg"
            >
              Get In Touch Today
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;
