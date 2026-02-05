import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../section/Home/Hero/Hero";
import "./Home.css";
import TrustedSection from "../../section/Home/TrustedSection/TrustedSection";
import ServicesSection from "../../section/Home/ServicesSection/ServicesSection";
import StatsSection from "../../section/Home/StatsSection/StatsSection";
import WhyChooseUs from "../../section/Home/WhyChooseUs/WhyChooseUs";
import PortfolioSlider from "../../section/Home/PortfolioSlider/PortfolioSlider";
import WorkingProcess from "../../section/Home/WorkingProcess/WorkingProcess";
import Testimonials from "../../section/Home/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
    <div className="home">
      <Navbar />
      <Hero />
    </div>
      <TrustedSection />
      <ServicesSection />
      <StatsSection/>
      <WhyChooseUs/>
      <PortfolioSlider/>
      <WorkingProcess/>
      <Testimonials/>
      <Footer/>
      </>
  );
};

export default Home;
