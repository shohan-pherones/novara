import { specialistItems } from "@/constants";
import SectionTitle from "./SectionTitle";
import SpecialistItem from "./SpecialistItem";
import ViewMoreButton from "./ViewMoreButton";

const Specialists = ({
  isSpecialistsPage,
}: {
  isSpecialistsPage?: boolean;
}) => {
  return (
    <section id="browse" className="wrapper">
      <SectionTitle title="Specialists" />
      <div className="grid__container">
        {isSpecialistsPage &&
          specialistItems.map((specialist) => (
            <SpecialistItem key={specialist.id} specialist={specialist} />
          ))}
        {!isSpecialistsPage &&
          specialistItems
            .slice(0, 8)
            .map((specialist) => (
              <SpecialistItem key={specialist.id} specialist={specialist} />
            ))}
      </div>
      {!isSpecialistsPage && (
        <ViewMoreButton route="/specialists" label="View More Specialists" />
      )}
    </section>
  );
};

export default Specialists;
