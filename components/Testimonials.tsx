"use client";

import { testimonialItems } from "@/constants";
import { useMediaQuery } from "@mantine/hooks";
import { Quote } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  const small = useMediaQuery("(max-width: 48em)");
  const medium = useMediaQuery("(max-width: 80em)");

  return (
    <section className="wrapper">
      <SectionTitle title="Testimonials" />
      <Swiper
        slidesPerView={small ? 1 : medium ? 2 : 3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="h-[400px] md:h-[500px]"
      >
        {testimonialItems.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-full">
            <div className="h-full flex flex-col gap-5 md:gap-10 bg-primary rounded-xl p-5 relative">
              <div className="w-12 aspect-square rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <Quote className="text-neutral-content rotate-180" />
              <p className="text-neutral-content text-xl md:text-2xl">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-5 absolute left-5 bottom-5">
                <span className="h-8 w-px bg-neutral-content" />
                <div className="flex flex-col text-neutral-content">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
