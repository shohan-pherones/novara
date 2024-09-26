import Image from "next/image";
import Link from "next/link";

interface SpecialistItemProps {
  specialist: {
    id: number;
    name: string;
    image: string;
    bio: string;
  };
}

const SpecialistItem = ({ specialist }: SpecialistItemProps) => {
  return (
    <div className="card bg-base-100 w-full shadow">
      <figure className="w-full h-96">
        <Image
          src={specialist.image}
          alt={specialist.name}
          width={720}
          height={1280}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{specialist.name}</h2>
        <p>{specialist.bio}</p>
        <div className="card-actions justify-end">
          <Link
            href={`/specialists/${specialist.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialistItem;
