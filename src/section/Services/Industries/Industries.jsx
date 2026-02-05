import "./Industries.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import aiIcon from "../../../assets/ai.png";
import fintechIcon from "../../../assets/fintech.png";
import edtechIcon from "../../../assets/edtech.png";
import healthIcon from "../../../assets/healthcare.png";

const industries = [
  {
    icon: aiIcon,
    title: "AI & Machine",
    desc: "We design intelligent, human-centric experiences for AI products—balancing complex algorithms with clear UX to deliver real-world impact at scale.",
  },
  {
    icon: fintechIcon,
    title: "FinTech",
    desc: "We craft secure, compliant, and high-performance financial experiences that build trust, improve conversions, and scale with your business.",
  },
  {
    icon: edtechIcon,
    title: "EdTech",
    desc: "We design engaging, distraction-free learning platforms across web, mobile, and LMS—focused on clarity, usability, and learner outcomes.",
  },
  {
    icon: healthIcon,
    title: "Healthcare",
    desc: "We build patient-first digital experiences that meet compliance standards while prioritizing accessibility, trust, and ease of use.",
  },
];

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries-wrapper">

        <span className="badge">Industries We Serve</span>

        <h2>
          End-to-End Solutions <br />
          <span>Across Diverse Industries</span>
        </h2>

        <Swiper
          spaceBetween={24}
          slidesPerView={3.5}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            600: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {industries.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="industry-card">
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Industries;
