import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-screen md:w-[80vw] md:h-[80vh] h-[60vw] mx-auto">
      <div className="bg-alpha md:p-5 p-[2%] flex flex-col items-start justify-around w-[90%] md:w-[65%] h-[80%] md:h-[55%]  absolute md:top-[20%] top-[10%] left-[5%] rounded-3xl">
        <h1 className="font-bold md:text-[2rem] text-[1.5rem]">
          Hungry? We Got You.
        </h1>
        <p className="text-sm sm:text-lg">
          Order from a wide variety of cuisines to find exactly what you are
          looking for. Fast delivery, right to your door.
        </p>

        <a href="#menu">
          <button className="bg-[#FC8019] px-5 sm:py-2 py-1 hover:scale-105 transition-all rounded-md text-white font-semibold text-[1rem] md:text-xl">
            Menu
          </button>
        </a>
      </div>
      <img
        src={assets.header}
        alt="header"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
