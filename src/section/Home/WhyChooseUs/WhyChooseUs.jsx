import "./WhyChooseUs.css";
import teamImg from "../../../assets/whychoose.png";
import icon1 from "../../../assets/whychoose1.png";
import icon2 from "../../../assets/whychoose2.png";
import icon3 from "../../../assets/whychoose3.png";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT IMAGE */}
        <div className="why-image">
          <img src={teamImg} alt="Team discussion" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content">
          <span className="why-tag">Why choose us</span>

          <h2>
            Modern design and development <br />
            for real-world solutions
          </h2>

          <div className="why-list">

            <div className="why-item">
              <div className="icon"> <img src={icon1} alt="Icon 1" /></div>
              <div className="icon_content">
                <h4>Understand Your Needs</h4>
                <p>
                  We listen, learn, and get to know your goals to create the best plan for you.
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="why-item">
              <div className="icon"> <img src={icon2} alt="Icon 2" /></div>
              <div>
                <h4>Create Your Solution</h4>
                <p>
                We design and build ideas that fit your vision and make an impact. will grow your business                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="why-item">
              <div className="icon"> <img src={icon3} alt="Icon 3" /></div>
              <div>
                <h4>Perfect & Deliver</h4>
                <p>
                We carefully refine every detail to ensure everything is perfect, delivering results that exceed your expectations                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="divider_why"></div>


    </section>
  );
};

export default WhyChooseUs;
