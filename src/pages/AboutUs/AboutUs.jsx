import Navbar from "../../components/Navbar/Navbar";
import AboutHero from "../../section/AboutUs/AboutHero/AboutHero";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";
import ImpactStats from "../../section/AboutUs/ImpactStats/ImpactStats";
import AboutE2E from "../../section/AboutUs/AboutE2E/AboutE2E";
import TrustedSection from "../../section/Home/TrustedSection/TrustedSection";
import TeamSection from "../../section/AboutUs/TeamSection/TeamSection";
import Testimonials from "../../section/Home/Testimonials/Testimonials";
import aboutImg from "../../assets/About.png";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <Navbar />
        <AboutHero image={aboutImg} />
      </div>

      <ImpactStats />
      <AboutE2E />
      <TrustedSection />
      <TeamSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutUs;
