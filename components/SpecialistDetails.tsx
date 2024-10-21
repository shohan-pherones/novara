import { TService } from "@/validators";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";

type TSpecialist = {
  id: number;
  name: string;
  image: string;
  bio: string;
  packages: TService[];
};

interface SpecialistDetailsProps {
  specialist: TSpecialist;
}

const SpecialistDetails = ({ specialist }: SpecialistDetailsProps) => {
  return (
    <section className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src={specialist.image}
            alt={specialist.name}
            width={1080}
            height={1920}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="xl:col-span-2 flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">{specialist.name}</h2>
          <p className="max-w-xl">{specialist.bio}</p>
        </div>
      </div>
      {specialist?.packages?.length > 0 && (
        <div className="mt-10">
          <SectionTitle title="Available Packages" />
          <div className="grid__container">
            {specialist.packages.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SpecialistDetails;
