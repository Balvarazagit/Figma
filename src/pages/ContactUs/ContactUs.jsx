import Navbar from "../../components/Navbar/Navbar";
import ContactHero from "../../section/ContactUs/ContactHero/ContactHero";
import ContactInfo from "../../section/ContactUs/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
       <div className="contact">
              <Navbar />
              <ContactHero />
            </div>

      <ContactInfo />
      <Footer />
    </>
  );
};

export default ContactUs;
