import { useParams } from "react-router-dom";
import "./WorkDetail.css";
import work1 from "../../assets/feature1.png";
import work2 from "../../assets/feature2.png";
import work3 from "../../assets/feature3.png";
import work4 from "../../assets/feature4.png";
import work5 from "../../assets/feature5.png";
import work6 from "../../assets/feature6.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const workData = {
  "neuron-iq": {
    title: "NeuronIQ",
    title2: "AI-Powered Hiring Assistant",
    subtitle:
      "NeuronIQ is an AI-powered hiring platform that helps companies streamline recruitment through intelligent candidate screening, analytics, and automation.",
    img: work1,
  },
  "echo-analytics": {
    title: "Echo",
    title2: " AI Analytics Platform",
    subtitle:
      "Echo transforms complex data into intuitive dashboards that empower businesses to make faster, data-driven decisions.",
    img: work2,
  },
  "fin-smart": {
    title: "FinSmart",
    title2: "Digital Banking",
    subtitle:
      "FinSmart is a secure digital banking experience designed for scalability and trust.",
    img: work3,
  },
  eduflow: {
    title: "EduFlow",
    title2: "LMS Platform",
    subtitle:
      "EduFlow focuses on learner-first UX for distraction-free education.",
    img: work4,
  },
  "health-plus": {
    title: "HealthPlus",
    title2: "Healthcare Platform",
    subtitle:
      "HealthPlus delivers modern healthcare experiences with compliance.",
    img: work5,
  },
  shopease: {
    title: "ShopEase",
    title2: "E-Commerce Platform",
    subtitle:
      "ShopEase is a high-performance e-commerce solution optimized for conversions.",
    img: work6,
  },
};

const WorkDetail = () => {
  const { slug } = useParams();
  const work = workData[slug];

  if (!work) return <h2 className="not-found">Work not found</h2>;

  return (
    <>
      <div className="work">
        <Navbar />
        <section className="work-detail">

          {/* HERO */}
          <div className="work-hero">
            <h1>{work.title}-<span>{work.title2}</span></h1>
            <p>{work.subtitle}</p>
          </div>
        </section>
      </div>
      <section className="work-content">
  <div className="content-wrapper"> {/* Add this wrapper */}
    <div className="work-image-wrapper">
      <img src={work.img} alt={work.title} />
    </div>

    {/* CHALLENGE */}
    <div className="work-section">
      <h2>The Challenge</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum lobortis risus, sed consequat sem lobortis ut. Duis ut enim non magna laoreet sagittis tincidunt eu libero. Morbi commodo, arcu vitae vestibulum finibus, ex magna aliquet lacus, gravida imperdiet tortor sem vitae ante. Vivamus est nisi, molestie ut tortor vitae, tincidunt aliquet augue. Phasellus sed velit quis dui blandit auctor. Pellentesque a lobortis lorem. Aliquam et risus velit.
      </p>
    </div>

    {/* IMAGE GRID */}
    <div className="work-image-grid">
      <div className="grid-card">
        <img src={work.img} alt="Preview 1" />
      </div>
      <div className="grid-card">
        <img src={work.img} alt="Preview 2" />
      </div>
    </div>

    {/* RESULTS */}
    <div className="work-section">
      <h2>The Results</h2>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum lobortis risus, sed consequat sem lobortis ut. Duis ut enim non magna laoreet sagittis tincidunt eu libero. Morbi commodo, arcu vitae vestibulum finibus, ex magna aliquet lacus, gravida imperdiet tortor sem vitae ante. Vivamus est nisi, molestie ut tortor vitae, tincidunt aliquet augue. Phasellus sed velit quis dui blandit auctor. Pellentesque a lobortis lorem.
      </p>
      <br/>
      <p> Aliquam et risus velit. Duis nec justo mattis, malesuada tortor quis, sagittis eros. Aenean efficitur neque euismod lobortis mattis. Vestibulum non finibus eros, eu finibus ante. Nunc feugiat molestie pellentesque. Donec blandit vitae ipsum nec ullamcorper. Fusce dapibus tortor et orci interdum, quis fermentum nisl pretium. </p>
    </div>
  </div> {/* Close wrapper */}
</section>
      <Footer />
    </>
  );
};

export default WorkDetail;
