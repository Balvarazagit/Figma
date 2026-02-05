import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work";
import WorkDetail from "./pages/WorkDetail/WorkDetail";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work/>}/>
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>

    </>
  );
}

export default App;
