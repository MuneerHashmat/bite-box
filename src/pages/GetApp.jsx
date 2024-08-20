import assets from "../assets/assets";

const GetApp = () => {
  return (
    <div className="bg-[#fc8019] h-screen sm:h-full flex sm:flex-row flex-col justify-center items-center gap-4 pt-[90px] sm:pb-10">
      <div className="flex flex-col gap-1 items-center text-white font-bold text-md sm:text-xl">
        <h1>Get the official app</h1>
        <img src={assets.phone} className="sm:w-[300px] w-[200px]" />
      </div>

      <div className="flex flex-col gap-2">
        <a
          href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN"
          target="_blank"
        >
          <img src={assets.playstore} className="sm:h-[60px] h-[30px]" />
        </a>
        <a
          href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"
          target="_blank"
        >
          <img src={assets.appstore} className="sm:h-[63px] h-[32px]" />
        </a>
      </div>
    </div>
  );
};

export default GetApp;
