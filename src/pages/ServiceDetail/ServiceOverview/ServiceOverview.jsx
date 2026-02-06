import "./ServiceOverview.css";
import right from '../../../assets/Right.png'

const ServiceOverview = ({ overview, approach, approachTitle }) => {
  return (
    <section className="service-overview">
      <div className="service-overview-container">

        <div className="overview-left">
          {overview.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

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
