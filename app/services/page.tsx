import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { heroItems } from "@/constants";

const ServicesPage = () => {
  return (
    <main>
      <Hero
        image={heroItems.services.image}
        headline={heroItems.services.headline}
        description={heroItems.services.description}
        ctaLabel={heroItems.services.ctaLabel}
        ctaRoute={heroItems.services.ctaRoute}
      />
      <Services isServicesPage />
    </main>
  );
};

export default ServicesPage;
