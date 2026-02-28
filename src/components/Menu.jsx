import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CustomLeftArrow, CustomRightArrow } from "../utils/CustomArrows";
import { modifyFoodItem, responsive } from "../utils/utils";
import { useEffect, useState } from "react";
import DishCard from "./DishCard";
import loading_animation from "../assets/loader-animation.gif";
import { RestartAlt, Search } from "@mui/icons-material";

const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState(null);
  const [foodItems, setFoodItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const initialText = "Trending Dishes";
  const [menuText, setMenuText] = useState(initialText);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      const data = await response.json();
      console.log(data);
      setCategories(
        data.categories.map((category) => ({
          menu_name: category.strCategory,
          menu_image: category.strCategoryThumb,
        })),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInitialFoodItems = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=",
      );
      const data = await response.json();
      setFoodItems(data.meals.map((meal) => modifyFoodItem(meal)));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFoodItemsByCategory = async (category) => {
    setLoading(true);
    category.length > 0 && setMenuText(`Category: ${category}`);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setFoodItems(data.meals.map((meal) => modifyFoodItem(meal)));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchFoodItem = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMenuText(`Search results for: ${searchTerm}`);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      );
      const data = await response.json();
      data.meals ? setFoodItems(data.meals.map((meal) => modifyFoodItem(meal))) : setFoodItems([]);
      setSearchTerm("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    setCurrentCategory("");
    setSearchTerm("");
    setMenuText(initialText);
    fetchInitialFoodItems();
  };

  useEffect(() => {
    fetchCategories();
    fetchInitialFoodItems();
  }, []);

  useEffect(() => {
    fetchFoodItemsByCategory(currentCategory);
  }, [currentCategory]);

  if (!categories || !foodItems) {
    return (
      <div className="w-screen min-h-screen mt-10 flex justify-center">
        <img
          src={loading_animation}
          alt="Loading..."
          className="w-[150px] h-[150px]"
        />
      </div>
    );
  }
  return (
    <div className="mt-20" id="menu">
      <div className="mt-6 sm:w-[70vw] md:w-[75vw] w-[80vw] mx-auto relative flex flex-col gap-[30px] md:gap-[40px]">
        <h1 className="text-2xl !text-center md:text-left md:text-[2rem]">
          What are you craving?
        </h1>
        <Carousel
          responsive={responsive}
          infinite={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {categories.map((item) => (
            <div
              key={item.menu_name}
              onClick={() => setCurrentCategory(item.menu_name)}
              style={{
                color: currentCategory == item.menu_name ? "#FC8019" : "black",
                textDecoration:
                  currentCategory == item.menu_name ? "underline" : "none",
              }}
              className="flex flex-col gap-0 items-center hover:cursor-pointer hover:text-[#FC8019]"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className=" size-[100px] hover:brightness-75 object-cover rounded-full"
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center gap-2 sm:gap-4">
          <form
            onSubmit={searchFoodItem}
            className="flex justify-between border border-gray-400 p-2 w-full lg:w-[70%]"
          >
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Search for a food item"
              required
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <Search />
            </button>
          </form>
          <button
            onClick={resetFilters}
            className="px-2 bg-[#FC8019] text-white rounded-md"
          >
            <RestartAlt />
          </button>
        </div>
      </div>
      <hr className=" w-[90vw] md:w-[80vw] mx-auto border border-gray-300 my-5" />

      <h1 className="ml-[10vw] text-2xl md:text-[2rem]">{menuText}</h1>

      {loading ? (
        <div className="w-screen min-h-screen mt-10 flex justify-center">
          <img
            src={loading_animation}
            alt="Loading..."
            className="w-[150px] h-[150px]"
          />
        </div>
      ) : (
        <div className="w-full min-h-[500px]">
          { foodItems.length===0  ? (
            <h1 className="mt-5 text-center text-xl text-red-600">No Food Items Found!</h1>
          ) : (
            <div className="mt-3 md:mt-5 mb-5 w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[20px]">
              {foodItems.map((item) => (
                <DishCard key={item.id} dish={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
