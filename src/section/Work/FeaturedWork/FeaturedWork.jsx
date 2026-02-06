import "./FeaturedWork.css";
import { useNavigate } from "react-router-dom";
import work1 from "../../../assets/Feature1.png";
import work2 from "../../../assets/Feature2.png";
import work3 from "../../../assets/Feature3.png";
import work4 from "../../../assets/Feature4.png";
import work5 from "../../../assets/Feature5.png";
import work6 from "../../../assets/Feature6.png";

const works = [
  {
    slug: "neuron-iq",
    img: work1,
    title: "NeuronIQ – AI-Powered Hiring Assistant",
    desc: "An intelligent hiring platform designed to streamline candidate screening and improve recruitment efficiency using AI-driven insights.",
  },
  {
    slug: "echo-analytics",
    img: work2,
    title: "Echo – AI Analytics Platform Design",
    desc: "A powerful analytics dashboard that transforms complex data into clear, actionable insights for smarter decision-making.",
  },
  {
    slug: "fin-smart",
    img: work3,
    title: "FinSmart – Digital Banking Experience",
    desc: "A secure and intuitive digital banking platform focused on seamless transactions, trust, and performance at scale.",
  },
  {
    slug: "eduflow",
    img: work4,
    title: "EduFlow – Learning Management System",
    desc: "A distraction-free EdTech platform designed to enhance learning outcomes through clean UX and scalable architecture.",
  },
  {
    slug: "health-plus",
    img: work5,
    title: "HealthPlus – Patient Care Platform",
    desc: "A patient-first healthcare solution built with accessibility, compliance, and ease of use at its core.",
  },
  {
    slug: "shopease",
    img: work6,
    title: "ShopEase – E-Commerce Web App",
    desc: "A modern e-commerce experience optimized for conversions, speed, and seamless shopping journeys.",
  },
];

const FeaturedWork = () => {
  const navigate = useNavigate();

  return (
    <section className="featured-work">
      <div className="work-grid">
        {works.map((item, index) => (
          <div
            className="work-card"
            key={index}
            onClick={() => navigate(`/work/${item.slug}`)}
          >
            <img src={item.img} alt={item.title} />

            <div className="work-info">
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

              <span className="arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
