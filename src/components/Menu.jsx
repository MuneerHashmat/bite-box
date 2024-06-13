import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { menuItems } from "../data/data";
import { CustomLeftArrow, CustomRightArrow } from "../utils/CustomArrows";
import { responsive } from "../utils/utils";
import { foodItems } from "../data/data";
import { useState } from "react";
import DishCard from "./DishCard";

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentItems, setCurrentItems] = useState(8);

  const foodArray = foodItems.filter((item) => {
    return currentCategory ? item.category == currentCategory : item;
  });
  return (
    <div className="mt-10" id="menu">
      <h1 className="md:ml-[10vw] text-2xl text-center md:text-left md:text-[2rem]">
        What are you craving?
      </h1>
      <div className="mt-6 w-[60vw] mx-auto relative">
        <Carousel
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {menuItems.map((item) => (
            <div
              key={item.menu_name}
              onClick={() => setCurrentCategory(item.menu_name)}
              style={{
                color: currentCategory == item.menu_name ? "#FC8019" : "black",
                textDecoration:
                  currentCategory == item.menu_name ? "underline" : "none",
              }}
              className="flex flex-col gap-2 items-center hover:cursor-pointer hover:text-[#FC8019]"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-[100px] hover:brightness-75"
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <hr className=" w-[90vw] md:w-[80vw] mx-auto border border-gray-300 my-5" />
      {!currentCategory && (
        <h1 className="ml-[10vw] text-2xl md:text-[2rem]">Popular foods</h1>
      )}
      <div className="mt-3 md:mt-5 mb-5 w-[80vw] mx-auto flex flex-wrap justify-center items-center gap-[1rem]">
        {(currentCategory ? foodArray : foodItems.slice(0, currentItems)).map(
          (item) => (
            <DishCard key={item.id} dish={item} />
          )
        )}
      </div>

      {currentItems == 8 && !currentCategory ? (
        <div className="w-screen flex items-center justify-center mt-7">
          <button
            onClick={() => setCurrentItems(foodItems.length)}
            className="bg-[#FC8019] text-white rounded-md text-xl px-2 py-1 hover:scale-105 transition-all"
          >
            View full menu
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
