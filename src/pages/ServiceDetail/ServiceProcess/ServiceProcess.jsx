import "./ServiceProcess.css";

const ServiceProcess = ({ process }) => {
  if (!process) return null;

  return (
    <section className="service-process">
      <span className="process-tag">{process.tag}</span>

      <h2>
        {process.title} <br />
        <span>{process.highlight}</span>
      </h2>

      <div className="process-steps">
        {process.steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="step-circle">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProcess;
