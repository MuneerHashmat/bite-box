export const generateRandomRating = () => {
  const randomDecimal = Math.random();
  const rating = 4 + randomDecimal;
  return rating.toFixed(1);
};

const getRandomPrice=()=> {
  const min = 150;
  const max = 300;

  const minIndex = min / 10; // 15
  const maxIndex = max / 10; // 30

  const randomIndex = Math.floor(
    Math.random() * (maxIndex - minIndex + 1)
  ) + minIndex;

  return randomIndex * 10;
}

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export const modifyFoodItem=(foodItem)=>{
  return {
    id: foodItem.idMeal,
    name: foodItem.strMeal,
    image: foodItem.strMealThumb,
    price: getRandomPrice(),
    rating: generateRandomRating(),
    category: foodItem.strCategory,
  }
}
