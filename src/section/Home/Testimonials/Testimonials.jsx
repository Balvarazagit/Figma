import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Testimonials.css";

import user1 from "../../../assets/testimonial1.png";
import user2 from "../../../assets/testimonial2.png";
import user3 from "../../../assets/testimonial3.png";
import user4 from "../../../assets/testimonial4.png";
import user5 from "../../../assets/testimonial5.png";

const testimonials = [
  {
    name: "Jordan Walk",
    role: "Software Engineer at Briks",
    text:
      "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their  attention to detail",
    img: user1,
  },
  {
    name: "Alisa Olivia",
    role: "CTO at Rivox",
    text:
      "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their  attention to detail",
    img: user2,
  },
  {
    name: "Ema Watson",
    role: "Founder at Rilot",
    text:
      "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their  attention to detail",
    img: user3,
  },
  {
    name: "Jacob Alison",
    role: "Project Manager at Trixo",
    text:
      "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their  attention to detail",
    img: user4,
  },
  {
    name: "Rahul S.",
    role: "Bangalore",
    text:
      "Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their  attention to detail",
    img: user5,
  },
];

export default function Testimonials() {
  return (
    <>
    <section className="testimonial-section">
      <span className="testimonial-badge">Testimonial</span>
      <h2 className="testimonial-title">What Clients Say About Us</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1.2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="text">{item.text}</p>

              <div className="user">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
          <div className="divider_testimonial"></div>

    </>
  );
}
