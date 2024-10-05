import { serviceItems } from "@/constants";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import ViewMoreButton from "./ViewMoreButton";

const Services = ({ isServicesPage }: { isServicesPage?: boolean }) => {
  return (
    <section id="browse" className="wrapper">
      <SectionTitle title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {isServicesPage &&
          serviceItems.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        {!isServicesPage &&
          serviceItems
            .slice(0, 8)
            .map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
      </div>
      {!isServicesPage && (
        <ViewMoreButton route="/services" label="View More Services" />
      )}
    </section>
  );
};

export default Services;
