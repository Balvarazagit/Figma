import "./StatsSection.css";

const stats = [
  {
    tag: "User Experiences Crafted",
    value: "180+",
    desc: "Projects Delivered Digital products redesigned for seamless interaction.",
  },
  {
    tag: "Client Success Score",
    value: "98%",
    desc: "Usability Rating Earning top ratings for functional and intuitive design.",
  },
  {
    tag: "Conversion Rate Lift",
    value: "15%",
    desc: "Avg. Increase Optimizing interfaces to turn visitors into loyal customers.",
  },
];

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <span className="stat-tag">{item.tag}</span>
            <div className="stat-content">
            <h3 className="stat-value">{item.value}</h3>
            <p className="stat-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider_stat"></div>
    </section>
  );
};

export default StatsSection;
