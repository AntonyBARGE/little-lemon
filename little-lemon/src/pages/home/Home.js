import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Highlights from "../../components/home/highlights/Highlights";
import Testimonials from "../../components/home/testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default Home;
