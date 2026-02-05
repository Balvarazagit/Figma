import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        From Idea to Impact,
        <br />
        <span>A Single Seamless Flow.</span>
      </h1>

      <p>
        We turn ideas into impact because attention is the real currency.
      </p>

      <div className="buttons">
        <button className="primary">Discover Our Process →</button>
        <button className="secondary">See Our Work</button>
      </div>
    </section>
  );
};

export default Hero;
