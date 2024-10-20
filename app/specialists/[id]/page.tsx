import SpecialistDetails from "@/components/SpecialistDetails";
import { specialistItems } from "@/constants";
import { notFound } from "next/navigation";

const SpecialistDetailsPage = ({ params }: { params: { id: string } }) => {
  const specialist = specialistItems.find(
    (specialist) => specialist.id === +params.id
  );

  if (!specialist) {
    return notFound();
  }

  return (
    <main>
      <SpecialistDetails specialist={specialist} />
    </main>
  );
};

export default SpecialistDetailsPage;
