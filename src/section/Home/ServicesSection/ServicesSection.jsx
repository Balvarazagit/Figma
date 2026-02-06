import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";
import img1 from "../../../assets/S1.png";
import img2 from "../../../assets/S1.png";
import img3 from "../../../assets/S1.png";
import img4 from "../../../assets/S1.png";

const services = [
  {
    id: "01",
    slug: "branding",
    title: "Branding",
    desc: "We create strong brand identities that connect emotionally with users.",
    image: img1,
  },
  {
    id: "02",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "User-focused UI/UX designs that improve engagement and usability.",
    image: img2,
  },
  {
    id: "03",
    slug: "web-development",
    title: "Web Development",
    desc: "Modern, scalable and high-performance web applications.",
    image: img3,
  },
  {
    id: "04",
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that boost conversions.",
    image: img4,
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="services">
      <div className="services_container">
        <div className="content_services">
          <span className="tag">What We Do</span>
          <h2>Crafting Interfaces that Build Brands</h2>
        </div>

        <div className="list">
          {services.map((item, index) => (
            <div
              key={index}
              className={`item ${active === index ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              <div className="title-row">
                <span className="number">{item.id}</span>
                <h3>{item.title}</h3>
                <span className="arrow">↗</span>
              </div>

              {active === index && <p className="desc">{item.desc}</p>}

              <img
                src={item.image}
                alt={item.title}
                className="hover-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

