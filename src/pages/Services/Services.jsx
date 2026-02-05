import Navbar from "../../components/Navbar/Navbar";
import AboutHero from "../../section/AboutUs/AboutHero/AboutHero";
import Footer from "../../components/Footer/Footer";
import "./Services.css";
import ServicesSection from "../../section/Home/ServicesSection/ServicesSection";
import Technologies from "../../section/Services/Technologies/Technologies";
import E2ESection from "../../section/Services/E2ESection/E2ESection";
import Industries from "../../section/Services/Industries/Industries";
import servicesImg from "../../assets/about.png";

const Services = () => {
  return (
    <>
      <div className="about">
        <Navbar />
        <AboutHero
        tagline="Our End-to-End Services"
        title="Services Designed to Deliver"
        highlight="End-to-End Results."
        description="We offer a complete range of digital services — from strategy and branding to design, development, and marketing — all delivered through one connected, execution-focused system."
        buttonText="Get a Free Consultation"
        image={servicesImg}
        altText="Our Services"
      />
      </div>
      <ServicesSection/>
      <Technologies/>
      <E2ESection/>
      <Industries/>
      <Footer />
    </>
  );
};

export default Services;
