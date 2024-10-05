import Hero from "@/components/Hero";
import Specialists from "@/components/Specialists";
import { heroItems } from "@/constants";

const SpecialistsPage = () => {
  return (
    <main>
      <Hero
        image={heroItems.specialists.image}
        headline={heroItems.specialists.headline}
        description={heroItems.specialists.description}
        ctaLabel={heroItems.specialists.ctaLabel}
        ctaRoute={heroItems.specialists.ctaRoute}
      />
      <Specialists isSpecialistsPage />
    </main>
  );
};

export default SpecialistsPage;
