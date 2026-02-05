import "./ImpactStats.css";
import icon1 from "../../../assets/about_hero1.png";
import icon2 from "../../../assets/about_hero2.png";
import icon3 from "../../../assets/about_hero2.png";
import icon4 from "../../../assets/about_hero2.png";

const stats = [
  {
    icon: icon1,
    value: "150+",
    title: "Projects Delivered End-to-End",
    note: "Grounded, believable, outcome-focused",
  },
  {
    icon: icon2,
    value: "20+",
    title: "Years of Combined Experience",
    note: "More credible than “20+” without proof",
  },
  {
    icon: icon3,
    value: "12+",
    title: "Industries Served Across Markets",
    note: "Very believable and professional",
  },
  {
    icon: icon4,
    value: "30+",
    title: "Active & Long-Term Partnerships",
    note: "Much more credible than “5K+”",
  },
];

const ImpactStats = () => {
  return (
    <section className="impact-stats">
      <div className="impact-grid">
        {stats.map((item, index) => (
          <div className="impact-card" key={index}>
            <div className="about_impact_image">
            <img src={item.icon} alt="" />
            </div>
            <div className="about_impact_content">
            <h3>{item.value}</h3>
            <p className="title">{item.title}</p>
            <span>{item.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
