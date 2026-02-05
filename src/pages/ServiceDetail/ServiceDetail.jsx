import { useParams } from "react-router-dom";
import AboutHero from "../../section/AboutUs/AboutHero/AboutHero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import services from "../../data/servicesData"; 
import ServiceOverview from "./ServiceOverview/ServiceOverview";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import ServiceProcess from "./ServiceProcess/ServiceProcess";
import TrustedSection from "../../section/Home/TrustedSection/TrustedSection";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <>
    <div className="about">
      <Navbar />
      <AboutHero
        tagline={service.tagline}
        title={service.title}
        highlight={service.highlight}
        description={service.description}
        buttonText="Get Started"
        image={service.image}
        altText={service.title}
      />
</div>
<ServiceOverview
  overview={service.overview}
  approach={service.approach}
  approachTitle={service.approachTitle}
/>
{service.whatWeOffer && (
  <WhatWeOffer
    title={service.whatWeOfferTitle}
    offers={service.whatWeOffer}
  />
)}
{service.serviceProcess && (
  <ServiceProcess process={service.serviceProcess} />
)}
      <TrustedSection />
      <Footer />
    </>
  );
};

export default ServiceDetail;
