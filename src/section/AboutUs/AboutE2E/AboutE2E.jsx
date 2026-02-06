import "./AboutE2E.css";
import aboutImg from "../../../assets/About_E2E.png"; // image use karo

const AboutE2E = () => {
  return (
    <section className="about-e2e">
      <div className="about-e2e-container">

        {/* LEFT IMAGE */}
        <div className="about-e2e-image">
          <img src={aboutImg} alt="About E2E" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-e2e-content">
          <span className="badge">About E2E</span>

          <h2>
            End-to-End Success, <br />
            <span>Built Around Your Business.</span>
          </h2>

          <p className="subtitle">
            From strategy to execution, we deliver end-to-end solutions
            built for clarity, scale, and real impact.
          </p>

          <div className="about-features">

            <div className="feature">
              <h4>Strategize to Lead</h4>
              <p>
                Build a strong foundation with clear strategy, positioning,
                and direction that aligns every decision across your journey.
              </p>
            </div>

            <div className="feature">
              <h4>Optimize for Impact</h4>
              <p>
                We design and build efficient systems that improve performance
                and turn attention into measurable results.
              </p>
            </div>

            <div className="feature">
              <h4>Design with Purpose</h4>
              <p>
                Every decision is intentional—crafted to connect with people,
                communicate value, and support business goals.
              </p>
            </div>

            <div className="feature">
              <h4>Scale End-to-End</h4>
              <p>
                From branding to technology, we help you scale with structured,
                connected solutions that evolve with your business.
              </p>
            </div>

          </div>

          <button className="about-btn">
            Build with E2E →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutE2E;
