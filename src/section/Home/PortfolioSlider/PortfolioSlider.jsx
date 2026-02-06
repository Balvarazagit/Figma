import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./PortfolioSlider.css";

import img1 from "../../../assets/Portfolio1.png";
import img2 from "../../../assets/Portfolio2.png";
import img3 from "../../../assets/Portfolio3.png";
import img4 from "../../../assets/Portfolio4.png";
import img5 from "../../../assets/Portfolio5.png";

const projects = [
  {
    title: "NeuroIQ – AI-Powered Hiring Assistant",
    desc: "Streamlined UX for smarter candidate filtering and team collaboration.",
    image: img1,
  },
  {
    title: "Echo – AI Analytics Platform Design",
    desc: "Data-rich dashboards with a clean interface for better decision-making.",
    image: img2,
  },
  {
    title: "Nanobot – AI Chat Experience",
    desc: "Conversational AI interface designed to boost engagement.",
    image: img3,
  },
  {
    title: "NeuroIQ – Mobile Experience",
    desc: "Mobile-first AI-powered hiring solution.",
    image: img4,
  },
  {
    title: "Echo – Website Redesign",
    desc: "Bold, modern website for analytics platform.",
    image: img5,
  },
];

export default function PortfolioSlider() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <span className="badge">Featured portfolio</span>
        <div className="header-row">
          <h2>Explore our latest branding and design projects</h2>
          <button className="view-all">View All Portfolio →</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={1.2}
        navigation
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
        className="portfolio-swiper"
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio-card">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
