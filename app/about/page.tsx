import About from "@/components/About";
import Hero from "@/components/Hero";
import { heroItems } from "@/constants";

const AboutPage = () => {
  return (
    <main>
      <Hero
        image={heroItems.about.image}
        headline={heroItems.about.headline}
        description={heroItems.about.description}
        ctaLabel={heroItems.about.ctaLabel}
        ctaRoute={heroItems.about.ctaRoute}
      />
      <About />
    </main>
  );
};

export default AboutPage;
