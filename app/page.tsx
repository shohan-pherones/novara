import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import { heroItems } from "@/constants";

const HomePage = () => {
  return (
    <main>
      <Hero
        image={heroItems.home.image}
        headline={heroItems.home.headline}
        description={heroItems.home.description}
        ctaLabel={heroItems.home.ctaLabel}
        ctaRoute={heroItems.home.ctaRoute}
      />
      <Services />
      <Specialists />
      <Gallery />
      <Testimonials />
    </main>
  );
};

export default HomePage;
