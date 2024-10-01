"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  return (
    <section className="wrapper">
      <SectionTitle title="Testimonials" />
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-10 bg-primary rounded-xl p-5">
            <div className="w-12 aspect-square rounded-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/28302550/pexels-photo-28302550/free-photo-of-a-woman-sitting-on-a-stool-with-her-hair-in-a-bun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Woman"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <Quote className="text-neutral-content rotate-180" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
