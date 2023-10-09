import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import EventCards from "../../components/EventCards/EventCards";
import Footer from "../../shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const events = useLoaderData();
  console.log(events)

  return (
    <div className="space-y-4">
      <p>home</p>
      <Banner />
      <EventCards events={events} />
      <WhyChooseUs />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
