import { galleryItems } from "@/constants";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Gallery = () => {
  return (
    <section className="bg-base-content">
      <div className="wrapper">
        <SectionTitle title="Gallery" isBackgroundDark />
        <div className="columns-3xs">
          {galleryItems.map((item) => (
            <div key={item.id} className="mb-4">
              <Image
                src={item.image}
                alt={item.alt}
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
