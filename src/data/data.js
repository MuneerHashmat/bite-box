import menu_1 from "./data-assets/menu_1.png";
import menu_2 from "./data-assets/menu_2.png";
import menu_3 from "./data-assets/menu_3.png";
import menu_4 from "./data-assets/menu_4.png";
import menu_5 from "./data-assets/menu_5.png";
import menu_6 from "./data-assets/menu_6.png";
import menu_7 from "./data-assets/menu_7.png";
import menu_8 from "./data-assets/menu_8.png";
import menu_9 from "./data-assets/menu_9.png";

import food_1 from "./data-assets/food_1.png";
import food_2 from "./data-assets/food_2.png";
import food_3 from "./data-assets/food_3.png";
import food_4 from "./data-assets/food_4.png";
import food_5 from "./data-assets/food_5.png";
import food_6 from "./data-assets/food_6.png";
import food_7 from "./data-assets/food_7.png";
import food_8 from "./data-assets/food_8.png";
import food_9 from "./data-assets/food_9.png";
import food_10 from "./data-assets/food_10.png";
import food_11 from "./data-assets/food_11.png";
import food_12 from "./data-assets/food_12.png";
import food_13 from "./data-assets/food_13.png";
import food_14 from "./data-assets/food_14.png";
import food_15 from "./data-assets/food_15.png";
import food_16 from "./data-assets/food_16.png";
import food_17 from "./data-assets/food_17.png";
import food_18 from "./data-assets/food_18.png";
import food_19 from "./data-assets/food_19.png";
import food_20 from "./data-assets/food_20.png";
import food_21 from "./data-assets/food_21.png";
import food_22 from "./data-assets/food_22.png";
import food_23 from "./data-assets/food_23.png";
import food_24 from "./data-assets/food_24.png";
import food_25 from "./data-assets/food_25.png";
import food_26 from "./data-assets/food_26.png";
import food_27 from "./data-assets/food_27.png";
import food_28 from "./data-assets/food_28.png";
import food_29 from "./data-assets/food_29.png";
import food_30 from "./data-assets/food_30.png";
import food_31 from "./data-assets/food_31.png";
import food_32 from "./data-assets/food_32.png";
import food_33 from "./data-assets/food_33.jpg";
import food_34 from "./data-assets/food_34.jpg";
import food_35 from "./data-assets/food_35.jpg";
import food_36 from "./data-assets/food_36.jpg";
import { generateRandomRating } from "./../utils/utils";

export const menuItems = [
  {
    menu_name: "Sandwich",
    menu_image: menu_4,
  },
  {
    menu_name: "Cake",
    menu_image: menu_5,
  },
  {
    menu_name: "Pure Veg",
    menu_image: menu_6,
  },
  {
    menu_name: "Pasta",
    menu_image: menu_7,
  },
  {
    menu_name: "Noodles",
    menu_image: menu_8,
  },
  {
    menu_name: "Salad",
    menu_image: menu_1,
  },
  {
    menu_name: "Rolls",
    menu_image: menu_2,
  },
  {
    menu_name: "Deserts",
    menu_image: menu_3,
  },
  {
    menu_name: "Sea Food",
    menu_image: menu_9,
  },
].map((item) => {
  return { ...item, active: false };
});

export const foodItems = [
  {
    id: "13",
    name: "Chicken Sandwich",
    image: food_13,
    price: 230,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "14",
    name: "Vegan Sandwich",
    image: food_14,
    price: 180,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "15",
    name: "Grilled Sandwich",
    image: food_15,
    price: 160,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "16",
    name: "Bread Sandwich",
    image: food_16,
    price: 240,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "17",
    name: "Cup Cake",
    image: food_17,
    price: 140,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "18",
    name: "Vegan Cake",
    image: food_18,
    price: 120,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "19",
    name: "Butterscotch Cake",
    image: food_19,
    price: 200,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "20",
    name: "Sliced Cake",
    image: food_20,
    price: 150,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "21",
    name: "Garlic Mushroom ",
    image: food_21,
    price: 140,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "22",
    name: "Fried Cauliflower",
    image: food_22,
    price: 220,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "23",
    name: "Mix Veg Pulao",
    image: food_23,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "24",
    name: "Rice Zucchini",
    image: food_24,
    price: 120,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "25",
    name: "Cheese Pasta",
    image: food_25,
    price: 120,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "26",
    name: "Tomato Pasta",
    image: food_26,
    price: 180,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "27",
    name: "Creamy Pasta",
    image: food_27,
    price: 160,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "28",
    name: "Chicken Pasta",
    image: food_28,
    price: 240,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "29",
    name: "Buttter Noodles",
    image: food_29,
    price: 140,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "30",
    name: "Veg Noodles",
    image: food_30,
    price: 120,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "31",
    name: "Somen Noodles",
    image: food_31,
    price: 200,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "32",
    name: "Cooked Noodles",
    image: food_32,
    price: 150,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "1",
    name: "Greek salad",
    image: food_1,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "2",
    name: "Veg salad",
    image: food_2,
    price: 80,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "3",
    name: "Clover Salad",
    image: food_3,
    price: 50,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 150,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    price: 160,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "7",
    name: "Chicken Rolls",
    image: food_7,
    price: 200,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "8",
    name: "Veg Rolls",
    image: food_8,
    price: 170,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    price: 220,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    price: 170,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    price: 120,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "33",
    name: "Fish Curry",
    image: food_33,
    price: 240,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sea Food",
  },
  {
    id: "34",
    name: "Scampi Shrimp",
    image: food_34,
    price: 280,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sea Food",
  },
  {
    id: "35",
    name: "Fish and Chips",
    image: food_35,
    price: 200,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sea Food",
  },
  {
    id: "36",
    name: "Fish Tacos",
    image: food_36,
    price: 190,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sea Food",
  },
].map((item) => {
  return { ...item, rating: generateRandomRating() };
});
