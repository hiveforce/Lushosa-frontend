import FeaturedProducts from "../components/LandingPage/FeaturedProducts";
import HairTypes from "../components/LandingPage/HairTypes";
import Hero from "../components/LandingPage/Hero";
import SavingsPlan from "../components/LandingPage/SavingsPlan";
import Testimonials from "../components/LandingPage/Testimonials";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import WigsCollection from "../components/LandingPage/WigsCollection";

function LandingPage() {
  return (
    <div>
      <Hero />
      <HairTypes />
      <FeaturedProducts />
      <SavingsPlan />
      <Testimonials />
      <WhyChooseUs />
      <WigsCollection />
    </div>
  );
}

export default LandingPage;
