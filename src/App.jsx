import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Pillars from "./components/Pillars.jsx";
import Manifesto from "./components/Manifesto.jsx";
import Services from "./components/Services.jsx";
import Videos from "./components/Videos.jsx";
import Steps from "./components/Steps.jsx";
import Faq from "./components/Faq.jsx";
import Location from "./components/Location.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import WhatsFloat from "./components/WhatsFloat.jsx";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Manifesto />
        <Services />
        <Videos />
        <Steps />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsFloat />
    </div>
  );
}
