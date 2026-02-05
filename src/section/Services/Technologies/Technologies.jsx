import "./Technologies.css";
import workflow from "../../../assets/workflow.png";
import reactIcon from "../../../assets/react.png";
import nextIcon from "../../../assets/next.png";
import flutterIcon from "../../../assets/flutter.png";
// import tailwindIcon from "../../assets/tailwind.png";
// import nodeIcon from "../../assets/node.png";
// import figmaIcon from "../../assets/figma.png";
// import mongoIcon from "../../assets/mongo.png";

const Technologies = () => {
  const techs = [
    workflow,
    reactIcon,
    workflow,
    nextIcon,
    reactIcon,
    flutterIcon,
    reactIcon,
  ];

  return (
    <section className="technologies">
      <div className="tech-wrapper">
        <span className="tech-badge">Technology & Platforms</span>

        <h2>Technologies We Use to Build</h2>
        <p>
          We work with proven, industry-standard technologies to design, build,
          and scale digital products. Our stack is chosen for performance,
          flexibility, security, and long-term maintainability.
        </p>

        <div className="tech-grid">
          {techs.map((icon, index) => (
            <div className="tech-circle" key={index}>
              <img src={icon} alt="tech" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
