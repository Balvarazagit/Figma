import "./ServiceOverview.css";
import right from '../../../assets/right.png'

const ServiceOverview = ({ overview, approach, approachTitle }) => {
  return (
    <section className="service-overview">
      <div className="service-overview-container">

        {/* LEFT CONTENT */}
        <div className="overview-left">
          {overview.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="overview-right">
          <h3>{approachTitle}</h3>

          <ul>
            {approach.map((item, index) => (
              <li key={index}>
                <span className="check"><img src={right} /></span>
                <div>
                  <strong>{item.title}</strong> – {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ServiceOverview;
