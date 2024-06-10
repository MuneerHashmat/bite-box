import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" pt-24">
      <Navbar />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
