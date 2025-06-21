
const menuData = {
  beverages: {
    categories: [
      {
        name: "Teas",
        items: [
          { name: "Normal", price: 38 },
          { name: "Ginger", price: 48 },
          { name: "Masala", price: 48 },
          { name: "Ginger Honey (without milk)", price: 57 },
          { name: "Green (without milk)", price: 48 },
        ],
      },
      {
        name: "Hot Classics",
        items: [
          { name: "Cafe Americano", price: 57 },
          { name: "Cappuccino", price: 67 },
          { name: "Flat White", price: 76 },
          { name: "Cafe Mocha", price: 86 },
          { name: "Cafe Latte", price: 86 },
          { name: "Cafe Macchiato", price: 86 },
          { name: "Espresso", price: 57 },
        ],
      },
      {
        name: "Cold Classics",
        items: [
          { name: "Vanilla Mist Latte", price: 114 },
          { name: "Iced Tiramisu Latte", price: 114 },
          { name: "Iced Americano", price: 114 },
          { name: "Iced Cafe Mocha", price: 114 },
        ],
      },
      {
        name: "Signature Hot",
        items: [
          { name: "Orange Zest Latte", price: 105 },
          { name: "Hazelnut Latte", price: 105 },
          { name: "Caramel Latte", price: 105 },
          { name: "Irish Cappuccino", price: 105 },
          { name: "Hot Chocolate", price: 114 },
          { name: "Affogato", price: 114 },
        ],
      },
      {
        name: "Signature Cold",
        items: [
          { name: "Charvin Blast", price: 143 },
          { name: "Charvin Frape", price: 143 },
          { name: "Vanilla Frape", price: 143 },
          { name: "Browine Frappe", price: 162 },
          { name: "Orange Zest Frappe", price: 143 },
          { name: "Mango Affair", price: 143 },
          { name: "Belgian Chocolate Frappe", price: 143 },
        ],
      },
      {
        name: "Classic Milk Shakes",
        items: [
          { name: "Chocolate", price: 114 },
          { name: "Strawberry", price: 114 },
          { name: "Mango", price: 114 },
        ],
      },
      {
        name: "Coolers",
        items: [
          { name: "Classic Mojito", price: 114 },
          { name: "Green Apple Lemonade", price: 114 },
        ],
      },
      {
        name: "ICED Tea",
        items: [
          { name: "Lemon Iced Tea", price: 114 },
          { name: "Peach Iced Tea", price: 114 },
        ],
      },
      {
        name: "Bubble Tea",
        items: [
          { name: "Coffee", price: 162 },
          { name: "Strawberry", price: 162 },
          { name: "Mango", price: 162 },
        ],
      },
       {
        name: "Fresh Juice",
        items: [
          { name: "Pineapple", price: 90 },
          { name: "Watermelon", price: 90 },
          { name: "Orange", price: 90 },
          { name: "Ash Gourd", price: 90 },
        ],
      }
    ],
    addOns: [
      { name: "Espresso Shot", price: 35 },
      { name: "Chocolate Sauce", price: 35 },
      { name: "Caramel", price: 35 },
      { name: "Hazelnut", price: 35 },
      { name: "Vanilla", price: 35 },
      { name: "Irish", price: 35 },
      { name: "Vanilla Scoop", price: 35 },
      { name: "Oat Milk", price: 70 },
      { name: "Almond Milk", price: 70 },
    ],
  },
  food: {
    categories: [
      {
        name: "Quick Bites",
        items: [
          { name: "Plain Croissant", vegNonVeg: "veg", price: 95 },
          { name: "Chocolate Croissant", vegNonVeg: "veg", price: 124 },
          { name: "Garlic Cheese Toastie", vegNonVeg: "Veg", price: 129 },
          { name: "Corn Garlic Toastie", vegNonVeg: "veg", price: 143 },
          { name: "Three Pepper Cheese Toastie", vegNonVeg: "veg", price: 143 },
          { name: "Cheese Chicken Mushroom Toastie", vegNonVeg: "Non-Veg", price: 152 },
          { name: "Veg Puff", vegNonVeg: "veg", price: 86 },
          { name: "Chicken Puff", vegNonVeg: "Non-Veg", price: 100 },
          { name: "Bun Muska", vegNonVeg: "veg", price: 138 },
        ],
      },
      {
        name: "Sandwiches",
        items: [
          { name: "Veggies Delight", vegNonVeg: "veg", price: 129 },
          { name: "Spinach & Corn", vegNonVeg: "Veg", price: 129 },
          { name: "Panner Tikka", vegNonVeg: "veg", price: 143 },
          { name: "Chicken Tikka", vegNonVeg: "Non-Veg", price: 143 },
          { name: "Smoked Chicken", vegNonVeg: "Non-Veg", price: 143 },
          { name: "Chicken Seekh Sandwich", vegNonVeg: "Non-Veg", price: 152 },
          { name: "3 Chicken", vegNonVeg: "Non-Veg", price: 152 },
        ],
      },
      {
        name: "Burgers",
        items: [
          { name: "The Veggie Cheezy Delight", vegNonVeg: "Veg", price: 143 },
          { name: "Chicken Burger", vegNonVeg: "Non-Veg", price: 152 },
        ],
      },
      {
        name: "Pizzas (1 Person)",
        items: [
          { name: "Margherita", vegNonVeg: "Veg", price: 114 },
          { name: "The Garden Feast", vegNonVeg: "Veg", price: 124 },
          { name: "Panner Tikka", vegNonVeg: "Non-Veg", price: 143 },
          { name: "Chicken Tikka", vegNonVeg: "Non-Veg", price: 143 },
          { name: "Three Chicken", vegNonVeg: "Non-Veg", price: 152 },
        ],
      },
      {
        name: "Pastas",
        items: [
          { name: "Alfredo (veg)", vegNonVeg: "Veg", price: 143 },
          { name: "Arrabiata (veg)", vegNonVeg: "Veg", price: 143 },
          { name: "Alfredo (chicken)", vegNonVeg: "Non-Veg", price: 152 },
          { name: "Arrabiata (chicken)", vegNonVeg: "Non-Veg", price: 152 },
        ],
      },
      {
        name: "Salads",
        items: [
          { name: "Veggies Delight", vegNonVeg: "Veg", price: 143 },
          { name: "Smoked Chicken", vegNonVeg: "Non-Veg", price: 152 },
        ],
      },
      {
        name: "Rolls",
        items: [
          { name: "Veggies Delight", vegNonVeg: "veg", price: 119 },
          { name: "Paneer Tikka", vegNonVeg: "veg", price: 129 },
          { name: "Chicken Tikka", vegNonVeg: "Non-Veg", price: 129 },
          { name: "3 Chicken", vegNonVeg: "Non-Veg", price: 129 },
        ],
      },
      {
        name: "Maggie",
        items: [
          { name: "Garden Delight Maggie", vegNonVeg: "veg", price: 86 },
          { name: "Double egg Delight Maggie", vegNonVeg: "Non-Veg", price: 119 },
          { name: "Chicken Delight Maggie", vegNonVeg: "Non-Veg", price: 129 },
          { name: "Triple treat Maggie (chicken,egg and cheese)", vegNonVeg: "Non-Veg", price: 148 },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Brownie", vegNonVeg: "veg", price: 138 },
          { name: "Assorted Pastries", vegNonVeg: "veg", price: 143 },
          { name: "Assorted Muffins", vegNonVeg: "veg", price: 119 },
          { name: "Assorted Cookies", vegNonVeg: "veg", price: 71 },
          { name: "Assorted T Cakes", vegNonVeg: "veg", price: 86 },
          { name: "Assorted Cakes (500 gms)", vegNonVeg: "veg", price: 624 },
          { name: "Assorted Cakes (1000 gms)", vegNonVeg: "veg", price: 1200 },
        ],
      },
    ],
  },
};

export default menuData;
