import "./AboutHero.css";

const AboutHero = ({
  tagline = "End-to-End Digital Solutions for Modern Businesses",
  title = "End-to-End Solutions",
  highlight = "That Turn Ideas Into Impact.",
  description = "We help brands grow by connecting strategy, design, development, and marketing into one seamless system — built for clarity, scale, and real impact.",
  buttonText = "Start Your End-to-End Journey",
  image,
  altText = "Hero Image",
}) => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">

        <div className="about-hero-content">
          <span className="tagline">{tagline}</span>

          <h1>
            {title} <br />
            <span>{highlight}</span>
          </h1>

          <p>{description}</p>

          {buttonText && (
            <button className="hero-btn">
              {buttonText} →
            </button>
          )}
        </div>

        <div className="about-hero-image">
          <img src={image} alt={altText} />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
