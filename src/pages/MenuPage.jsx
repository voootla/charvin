
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, Coffee, Utensils, PlusCircle } from 'lucide-react';
import menuData from '@/data/menuData';

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

const MenuItemCard = ({ item, categoryType }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-semibold text-gray-800">{item.name}</h3>
          {categoryType === 'food' && item.vegNonVeg && (
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              item.vegNonVeg.toLowerCase() === 'veg' ? 'bg-green-100 text-green-700' : 
              item.vegNonVeg.toLowerCase() === 'non-veg' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
            }`}>
              {item.vegNonVeg}
            </span>
          )}
        </div>
        {item.description && <p className="text-sm text-gray-600 mb-3">{item.description}</p>}
      </div>
      <p className="font-semibold text-lg text-amber-700 mt-auto">₹{item.price}</p>
    </motion.div>
  );
};

const MenuSection = ({ title, items, categoryType, icon: IconComponent }) => {
  if (!items || items.length === 0) return null;
  return (
    <motion.section 
      className="mb-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="flex items-center mb-8">
        {IconComponent && <IconComponent className="h-8 w-8 text-amber-600 mr-3" />}
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">{title}</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <MenuItemCard key={index} item={item} categoryType={categoryType} />
        ))}
      </div>
    </motion.section>
  );
};


function MenuPage() {
  return (
    <>
      <Helmet>
        <title>Our Menu - Charvin</title>
        <meta name="description" content="Explore Charvin's delicious menu featuring a wide range of beverages and food items." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Delicious Menu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafted with care, from energizing coffees to satisfying bites.
            </p>
          </motion.div>

          <MenuSection title="Beverages" icon={Coffee} items={[]} categoryType="beverages" />
          {menuData.beverages.categories.map(category => (
             <MenuSection key={category.name} title={category.name} items={category.items} categoryType="beverages" />
          ))}
          {menuData.beverages.addOns && menuData.beverages.addOns.length > 0 && (
            <MenuSection title="Beverage Add-Ons" items={menuData.beverages.addOns} categoryType="beverages" icon={PlusCircle} />
          )}

          <div className="my-16 border-t border-gray-200"></div>

          <MenuSection title="Food Menu" icon={Utensils} items={[]} categoryType="food" />
           {menuData.food.categories.map(category => (
             <MenuSection key={category.name} title={category.name} items={category.items} categoryType="food" />
          ))}

        </div>
      </motion.div>
    </>
  );
}

export default MenuPage;
