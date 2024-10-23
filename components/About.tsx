import { aboutPhotoItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const About = () => {
  return (
    <section className="wrapper">
      {/* PHOTOS */}
      <div className="flex items-center justify-center gap-5 md:gap-10">
        {aboutPhotoItems.map((item, idx) => (
          <div
            key={item.id}
            className={cn(
              "w-80 aspect-[4/5] overflow-hidden rounded-xl",
              idx % 2 === 1 && "translate-y-5"
            )}
          >
            <Image
              src={item.image}
              alt="Beauty salon and spa services"
              width={720}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
