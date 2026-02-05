import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import WorkHero from "../../section/Work/WorkHero/WorkHero.jsx";
import FeaturedWork from "../../section/Work/FeaturedWork/FeaturedWork.jsx";
import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="work-hero-bg">
        <Navbar />
        <WorkHero />
      </div>

      <FeaturedWork />
      <Footer />
    </>
  );
};

export default Work;
