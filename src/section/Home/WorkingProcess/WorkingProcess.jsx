import React from "react";
import "./WorkingProcess.css";
import img1 from "../../../assets/working1.png";
import img2 from "../../../assets/working2.png";
import img3 from "../../../assets/working3.png";
import img4 from "../../../assets/working4.png";

const steps = [
  {
    step: "01",
    title: "Discovery & Research",
    desc: "We start by understanding your business goals, audience, and market trends.",
    icon: img1,
  },
  {
    step: "02",
    title: "Design & Development",
    desc: "Our creative team transforms ideas into visually stunning designs and develops.",
    icon: img2,
  },
  {
    step: "03",
    title: "Testing & Refinement",
    desc: "Rigorous testing ensures functionality, usability, and security. We refine every detail to meet.",
    icon: img3,
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "After a successful launch, we offer continuous support & optimization to ensure.",
    icon: img4,
  },
];

export default function WorkingProcess() {
  return (
    <section className="process-section">
      <span className="process-badge">Working Process</span>
      <h2 className="process-title">How We Bring Your Ideas to Life</h2>

      <div className="process-wrapper">
        <div className="process-line" />

        {steps.map((item, index) => (
          <div className="process-card" key={index}>
            <img src={item.icon} alt={item.title} className="process-icon" />

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="process-step-workingprogress">{item.step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
