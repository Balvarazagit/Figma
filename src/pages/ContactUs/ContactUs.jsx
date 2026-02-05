import Navbar from "../../components/Navbar/Navbar";
import ContactHero from "../../section/ContactUs/ContactHero/ContactHero";
import ContactInfo from "../../section/ContactUs/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";
import AboutHero from "../../section/AboutUs/AboutHero/AboutHero";

const ContactUs = () => {
  return (
    <>
      {/* BACKGROUND WRAPPER */}
       <div className="contact">
              <Navbar />
              <ContactHero />
            </div>

      {/* REST SECTIONS */}
      <ContactInfo />
      <Footer />
    </>
  );
};

export default ContactUs;
