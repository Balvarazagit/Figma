import "./TeamSection.css";
import m1 from "../../../assets/Team1.png";
import m2 from "../../../assets/Team2.png";
import m3 from "../../../assets/Team3.png";
import m4 from "../../../assets/Team4.png";
import linkedin from "../../../assets/Linkedin.png";

const team = [
  {
    name: "Maria Carder",
    role: "CEO & Founder",
    img: m1,
  },
  {
    name: "Erin Levin",
    role: "Chief Operating Officer",
    img: m2,
  },
  {
    name: "Kierra Baptista",
    role: "Chief Design Officer",
    img: m3,
  },
  {
    name: "Gustavo Vaccaro",
    role: "UX Researcher & Strategist",
    img: m4,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <span className="team-badge">Team Members</span>
      <h2 className="team-title">Meet Our Expert Members</h2>

      <div className="team-grid">
        {team.map((item, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="team-info">
              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>

              <img src={linkedin} alt="linkedin" className="linkedin" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
