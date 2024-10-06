import Image from "next/image";

interface ServiceDetailsProps {
  service: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  };
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <section className="h-[calc(100vh-4rem)] grid grid-cols-2 gap-10">
      <div className="w-full h-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={1280}
          height={1920}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-10 pr-10">
        {/* PACKAGE DETAILS */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
          <p>{service.description}</p>
          <span className="w-full h-px bg-base-200" />
          <h2 className="text-2xl md:text-3xl font-bold">${service.price}</h2>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
