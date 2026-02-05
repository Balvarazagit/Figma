import "./E2ESection.css";
import teamImg from "../../../assets/about_E2E.png"; // apni image yaha lagao

const E2ESection = () => {
  return (
    <section className="e2e">
      <div className="e2e-wrapper">

        {/* LEFT IMAGE */}
        <div className="e2e-image">
          <img src={teamImg} alt="Team discussion" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="e2e-content">
          <span className="e2e-badge">E2E Advantage</span>

          <h2>
            Why Businesses Choose <br />
            <span>Our End-to-End Services</span>
          </h2>

          <p className="e2e-desc">
            We take full ownership of your digital journey — from strategy and
            design to development, launch, and growth. With one dedicated team
            handling everything, you get faster execution, better alignment,
            and measurable business outcomes.
          </p>

          <div className="e2e-points">
            <div className="point">
              <h4>Single Team, Complete Ownership</h4>
              <p>
                No hand-offs, no miscommunication. Strategy, design,
                development, and marketing work together as one unified system.
              </p>
            </div>

            <div className="point">
              <h4>Built to Scale With Your Business</h4>
              <p>
                Our solutions are designed for long-term growth, performance,
                and flexibility — so your product evolves as your business
                grows.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default E2ESection;
