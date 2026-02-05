import "./ContactHero.css";
import contactImg from "../../../assets/about.png";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact_content">
      {/* HERO TEXT */}
      <h1>
        Ready to Discuss Your <br /> <span>Next Project</span>
      </h1>
      <p>
        Share your idea, requirement, or challenge — we’ll get back to you with
        the right direction and next steps.
      </p>
</div>
      {/* IMAGE + FORM SECTION */}
      <div className="contact_box">
        {/* LEFT IMAGE */}
        <div className="contact_box-image">
          <img src={contactImg} alt="team discussion" />
        </div>

        {/* RIGHT FORM */}
        <form className="contact_box-form">
          <div className="form-group full">
            <label>Full Name *</label>
            <input type="text" placeholder="ex. john doe" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="ex. +1 123 456 7890" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="email@xyz.com" />
          </div>

          <div className="form-group">
            <label>Service Required *</label>
            <select>
              <option>Select Your Service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Mobile App</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Budget *</label>
            <select>
              <option>Select Your Range</option>
              <option>$500 – $1000</option>
              <option>$1000 – $5000</option>
              <option>$5000+</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Project Details *</label>
            <textarea placeholder="Tell us more about your idea..." />
          </div>

          <button className="send-btn">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default ContactHero;
