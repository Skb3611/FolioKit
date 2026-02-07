import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import ImageSection from "./images-section";
import ComponentSection from "./components-section";
const Landing = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 min-h-screen">
      <Hero />
      <ComponentSection/>
    </section>
  );
};

export default Landing;
