import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  return (
    <div className="space-y-4">
      <p>home</p>
      <Banner />
      <WhyChooseUs />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
