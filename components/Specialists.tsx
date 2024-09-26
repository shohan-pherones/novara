import { specialistItems } from "@/constants";
import SectionTitle from "./SectionTitle";
import SpecialistItem from "./SpecialistItem";
import ViewMoreButton from "./ViewMoreButton";

const Specialists = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Specialists" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {specialistItems.map((specialist) => (
          <SpecialistItem key={specialist.id} specialist={specialist} />
        ))}
      </div>
      <ViewMoreButton route="/specialists" label="View More Specialists" />
    </section>
  );
};

export default Specialists;
