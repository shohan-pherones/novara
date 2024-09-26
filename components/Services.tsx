import { serviceItems } from "@/constants";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import ViewMoreButton from "./ViewMoreButton";

const Services = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {serviceItems.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
      <ViewMoreButton route="/services" label="View More Services" />
    </section>
  );
};

export default Services;
