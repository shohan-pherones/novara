import ServiceDetails from "@/components/ServiceDetails";
import { serviceItems } from "@/constants";
import { notFound } from "next/navigation";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  const service = serviceItems.find((item) => item.id === +params.id);

  if (!service) return notFound();

  return (
    <main>
      <ServiceDetails service={service} />
    </main>
  );
};

export default ServiceDetailsPage;
