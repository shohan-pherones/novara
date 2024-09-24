import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
  service: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  };
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="card bg-base-100 w-full shadow">
      <figure className="w-full h-48">
        <Image
          src={service.image}
          alt={service.title}
          width={1280}
          height={720}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.description}</p>
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">${service.price}</h2>
          <Link href={`/services/${service.id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
