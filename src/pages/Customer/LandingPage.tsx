import FeaturedProducts from "../../components/Customer/LandingPage/FeaturedProducts";
import HairTypes from "../../components/Customer/LandingPage/HairTypes";
import Hero from "../../components/Customer/LandingPage/Hero";
import SavingsPlan from "../../components/Customer/LandingPage/SavingsPlan";
import Testimonials from "../../components/Customer/LandingPage/Testimonials";
import WhyChooseUs from "../../components/Customer/LandingPage/WhyChooseUs";
import WigsCollection from "../../components/Customer/LandingPage/WigsCollection";

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
