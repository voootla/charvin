import { Salad, GlassWater, Coffee, Pizza, Sandwich } from 'lucide-react';

const brandsData = [
  {
    id: 'salad-bar',
    name: 'Charvin Salads',
    slogan: 'Crafted for Freshness',
    description: 'Crisp salads, wholesome grain bowls, and nourishing ingredients to fuel your day with vitality.',
    icon: Salad,
    colorScheme: {
      primary: 'bg-green-600',
      secondary: 'text-green-600',
      lightBg: 'bg-green-50'
    },
    ingredients: ['Locally Sourced Greens', 'Organic Vegetables', 'Artisanal Dressings', 'Premium Proteins'],
    locations: ['Rainbow Hospitals', 'Star Hospitals', 'CapitaLand IT Parks'],
    menu: {
      categories: [
        {
          name: "Signature Salads",
          items: [
            { name: "Classic Caesar", price: 250 },
            { name: "Greek Goddess", price: 270 },
            { name: "Quinoa Power Bowl", price: 300 },
          ]
        },
        {
          name: "Custom Bowls",
          items: [
            { name: "Build Your Own Salad", price: 320 },
            { name: "Build Your Own Grain Bowl", price: 320 },
          ]
        }
      ]
    }
  },
  {
    id: 'juice-bar',
    name: 'Charvin Juices',
    slogan: 'Pure Liquid Wellness',
    description: 'Cold-pressed juices, vibrant smoothies, and healthy shots made from 100% natural fruits and vegetables.',
    icon: GlassWater,
    colorScheme: {
      primary: 'bg-orange-500',
      secondary: 'text-orange-500',
      lightBg: 'bg-orange-50'
    },
    ingredients: ['Freshly Squeezed Fruits', 'No Added Sugar', 'Superfood Boosters', 'Pure Himalayan Water'],
    locations: ['Yashoda Hospitals', 'Prestige High Fields', 'Malla Reddy Health City'],
    menu: {
      categories: [
        {
          name: "Cold-Pressed Juices",
          items: [
            { name: "The Detoxifier", price: 180 },
            { name: "Sunshine Burst", price: 180 },
            { name: "Green Elixir", price: 190 },
          ]
        },
        {
          name: "Smoothies",
          items: [
            { name: "Berry Bliss", price: 220 },
            { name: "Mango Tango", price: 220 },
            { name: "Peanut Butter Power", price: 240 },
          ]
        }
      ]
    }
  },
  {
    id: 'coffee-shop',
    name: 'Charvin Coffee',
    slogan: 'The Art of the Brew',
    description: 'Artisanal coffee under the BARISTA brand, specialty teas, and delicious pastries for a perfect break.',
    icon: Coffee,
    colorScheme: {
      primary: 'bg-yellow-900',
      secondary: 'text-yellow-900',
      lightBg: 'bg-yellow-50'
    },
    ingredients: ['Single-Origin Beans', 'Expertly Roasted', 'Alternative Milks Available', 'Freshly Baked Goods'],
    locations: ['All Hospital Locations', 'High-Street Outlets', 'CapitaLand IT Parks'],
    menu: {
      categories: [
        {
          name: "Espresso Drinks",
          items: [
            { name: "Cappuccino", price: 150 },
            { name: "Cafe Latte", price: 150 },
            { name: "Flat White", price: 160 },
          ]
        },
        {
          name: "Pastries",
          items: [
            { name: "Butter Croissant", price: 120 },
            { name: "Chocolate Muffin", price: 140 },
          ]
        }
      ]
    }
  },
  {
    id: 'pizza-place',
    name: 'Charvin Pizza',
    slogan: 'A Slice of Perfection',
    description: 'Authentic, handcrafted pizzas with a variety of classic and gourmet toppings. A slice of heaven!',
    icon: Pizza,
    colorScheme: {
      primary: 'bg-red-600',
      secondary: 'text-red-600',
      lightBg: 'bg-red-50'
    },
    ingredients: ['Imported Italian Flour', 'San Marzano Tomatoes', 'Fresh Mozzarella', 'Gourmet Toppings'],
    locations: ['Prestige High Fields', 'Select High-Street Outlets'],
    menu: {
       categories: [
        {
          name: "Classic Pizzas",
          items: [
            { name: "Margherita", price: 350 },
            { name: "Pepperoni", price: 400 },
            { name: "Farmhouse Veggie", price: 380 },
          ]
        },
        {
          name: "Gourmet Pizzas",
          items: [
            { name: "Truffle Mushroom", price: 450 },
            { name: "BBQ Chicken", price: 450 },
          ]
        }
      ]
    }
  },
  {
    id: 'wraps-brand',
    name: 'Charvin Wraps',
    slogan: 'Globally Inspired, Locally Wrapped',
    description: 'Flavor-packed wraps made with fresh ingredients. The perfect grab-and-go meal for a busy lifestyle.',
    icon: Sandwich,
    colorScheme: {
      primary: 'bg-teal-500',
      secondary: 'text-teal-500',
      lightBg: 'bg-teal-50'
    },
    ingredients: ['Whole Wheat Tortillas', 'Lean Proteins', 'Crisp Vegetables', 'House-made Sauces'],
    locations: ['CapitaLand IT Parks', 'Star Hospitals'],
    menu: {
      categories: [
        {
          name: "Classic Wraps",
          items: [
            { name: "Paneer Tikka Wrap", price: 220 },
            { name: "Chicken Shawarma Wrap", price: 250 },
            { name: "Falafel & Hummus Wrap", price: 230 },
          ]
        },
        {
          name: "Signature Wraps",
          items: [
            { name: "Spicy Mexican Bean", price: 240 },
            { name: "Smoked Chicken & Avocado", price: 260 },
          ]
        }
      ]
    }
  }
];

export default brandsData;