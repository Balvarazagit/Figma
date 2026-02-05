import "./ContactInfo.css";
import locationIcon from "../../../assets/location.png";
import phoneIcon from "../../../assets/phone.png";
import emailIcon from "../../../assets/mail.png";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="contact-info-grid">

        <div className="contact-info-card">
          <div className="icon">
            <img src={locationIcon} alt="Location" />
          </div>
          <div className="content">
            <h4>Our Address</h4>
            <p>1234 Elm Street, Suite 567, Springfield</p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="icon">
            <img src={phoneIcon} alt="Phone" />
          </div>
          <div className="content">
            <h4>Phone</h4>
            <p>+91 123 456 789</p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="icon">
            <img src={emailIcon} alt="Email" />
          </div>
          <div className="content">
            <h4>Email</h4>
            <p>support@example.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
