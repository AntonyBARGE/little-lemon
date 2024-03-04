import Footer from "../../components/footer/Footer";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Highlights from "../../components/home/highlights/Highlights";
import Testimonials from "../../components/home/testimonials/Testimonials";
import NavBar from "../../components/navbar/Nav";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default Home;
