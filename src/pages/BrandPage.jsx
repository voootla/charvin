import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import brandsData from '@/data/brandsData';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const MenuItem = ({ item, colorScheme }) => {
    return (
        <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between"
        >
            <h4 className="font-bold text-lg text-brand-purple">{item.name}</h4>
            <p className={`font-semibold text-lg ${colorScheme.secondary}`}>₹{item.price}</p>
        </motion.div>
    )
}

function BrandPage() {
  const { brandId } = useParams();
  const brand = brandsData.find(b => b.id === brandId);

  if (!brand) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-brand-yellow">
        <h1 className="text-4xl font-bold text-brand-purple mb-4">Brand Not Found</h1>
        <p className="text-lg text-brand-purple-light mb-8">Oops! We couldn't find the brand you're looking for.</p>
        <Button asChild className="bg-brand-purple hover:bg-brand-purple-light text-white">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back Home
          </Link>
        </Button>
      </div>
    );
  }

  const { name, slogan, description, icon: Icon, colorScheme, menu, ingredients, locations } = brand;

  return (
    <>
      <Helmet>
        <title>{name} | Charvin</title>
        <meta name="description" content={`Explore ${name}: ${description}`} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Button asChild variant="outline" className="mb-8 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Brands
                </Link>
              </Button>
            </motion.div>

            <motion.header 
              variants={fadeInUp}
              className={`p-8 rounded-2xl text-white ${colorScheme.primary} mb-12 shadow-2xl`}
            >
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
                <Icon className="h-20 w-20 text-white flex-shrink-0" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-black">{name}</h1>
                  <p className="text-xl opacity-90">{slogan}</p>
                  <p className="mt-2 opacity-80">{description}</p>
                </div>
              </div>
            </motion.header>
            
            <div className="grid lg:grid-cols-5 gap-12">
                <main className="lg:col-span-3">
                    {menu.categories.map(category => (
                      <motion.section 
                        key={category.name}
                        className="mb-12"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                      >
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-brand-purple mb-6">{category.name}</motion.h2>
                        <div className="grid grid-cols-1 gap-4">
                          {category.items.map(item => (
                            <MenuItem key={item.name} item={item} colorScheme={colorScheme} />
                          ))}
                        </div>
                      </motion.section>
                    ))}
                </main>
                <aside className="lg:col-span-2">
                    <motion.div 
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sticky top-28"
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                             <div className="flex items-center gap-3 mb-4">
                                <Leaf className={`w-6 h-6 ${colorScheme.secondary}`} />
                                <h3 className="text-2xl font-bold text-brand-purple">Key Ingredients</h3>
                            </div>
                            <ul className="space-y-2">
                                {ingredients.map(i => <li key={i} className="text-gray-600 font-medium">- {i}</li>)}
                            </ul>
                        </div>
                         <div className="bg-white p-6 rounded-2xl shadow-lg">
                             <div className="flex items-center gap-3 mb-4">
                                <MapPin className={`w-6 h-6 ${colorScheme.secondary}`} />
                                <h3 className="text-2xl font-bold text-brand-purple">Available At</h3>
                            </div>
                            <ul className="space-y-2">
                                {locations.map(l => <li key={l} className="text-gray-600 font-medium">- {l}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                </aside>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default BrandPage;