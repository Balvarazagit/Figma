import "./TrustedSection.css";

import logo1 from "../../../assets/T1.png";
import logo2 from "../../../assets/T2.png";
import logo3 from "../../../assets/T3.png";
import logo4 from "../../../assets/T4.png";
import logo5 from "../../../assets/T5.png";
import logo6 from "../../../assets/T6.png";

const TrustedSection = () => {
  return (
    <section className="trusted">
      <span className="badge">Client Trust & Partnerships</span>

      <h2>Trusted by <span>+160,000</span> companies and clients</h2>

      <div className="logos">
        {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, i) => (
          <div className="logo-card" key={i}>
            <img src={logo} alt="Company logo" />
            <p>Company</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
