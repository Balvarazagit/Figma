import "./WhatWeOffer.css";

const WhatWeOffer = ({ title, offers }) => {
  return (
    <section className="what-we-offer">
      <div className="offer-container">

        <h2>{title}</h2>

        <div className="offer-grid">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <h4>{offer.heading}</h4>
              <ul>
                {offer.items.map((item, i) => (
                  <li key={i}>+ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;
