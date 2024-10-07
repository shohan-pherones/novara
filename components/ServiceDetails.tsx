"use client";

import { DURATION_FACTOR } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceDetailsProps {
  service: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  };
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  const [duration, setDuration] = useState<string>("1");
  const [updatedPrice, setUpdatedPrice] = useState<number>(service.price);
  const [serviceClass, setServiceClass] = useState<string>("economy");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    if (duration === "1") {
      setUpdatedPrice(service.price);
      setServiceClass("economy");
    } else {
      setUpdatedPrice(service.price * +duration * DURATION_FACTOR);
      setServiceClass("economy");
    }
  }, [duration, service.price]);

  useEffect(() => {
    if (serviceClass === "economy") {
      setUpdatedPrice((prev) => prev * 1);
    } else if (serviceClass === "deluxe") {
      setUpdatedPrice((prev) => prev * 2);
    } else {
      setUpdatedPrice((prev) => prev * 3);
    }
  }, [serviceClass, service.price]);

  return (
    <section className="h-[calc(100vh-4rem)] grid grid-cols-2 gap-10">
      <div className="w-full h-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={1280}
          height={1920}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-10 pr-10">
        {/* PACKAGE DETAILS */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
          <p>{service.description}</p>
          <h2 className="text-2xl md:text-3xl font-bold">${updatedPrice}</h2>
        </div>
        {/* PACKAGE CUSTOMIZATIONS */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-semibold">
            Customize your beauty package
          </h3>
          <div className="flex gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pick your service duration</span>
              </div>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="select select-bordered"
              >
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pick your service class</span>
              </div>
              <select
                value={serviceClass}
                onChange={(e) => setServiceClass(e.target.value)}
                className="select select-bordered"
              >
                <option value="economy">Economy</option>
                <option value="deluxe">Deluxe</option>
                <option value="superior">Superior</option>
              </select>
            </label>
          </div>
        </div>
        {/* PACKAGE BOOKING TIMETABLE */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-semibold">
            Select your timetable
          </h3>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Choose a suitable date</span>
            </div>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
