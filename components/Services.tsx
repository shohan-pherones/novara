import { serviceItems } from "@/constants";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import Link from "next/link";

const Services = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {serviceItems.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/services" className="btn btn-outline">
          View More Services
        </Link>
      </div>
    </section>
  );
};

export default Services;
