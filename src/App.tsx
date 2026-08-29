import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AudienceSection from "./components/AudienceSection";
import Accreditation from "./components/Accreditation";
import Courses from "./components/Courses";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import Insights from "./components/Insights";
import CTABand from "./components/CTABand";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white font-sans text-ink">
      <Nav />
      <Hero />
      <AudienceSection layout="tabs" />
      <Accreditation />
      <Courses />
      <Founder />
      <Testimonials />
      <Insights />
      <CTABand />
      <Footer />
    </div>
  );
}

export default App;
