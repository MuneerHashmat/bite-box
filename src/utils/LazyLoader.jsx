import loading_animation from "../assets/loader-animation.gif";

const LazyLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={loading_animation} alt="" className="w-[100px] h-[100px]" />
    </div>
  );
};

export default LazyLoader;
