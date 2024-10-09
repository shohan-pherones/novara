"use client";

import { bookings, DURATION_FACTOR, timeslots } from "@/constants";
import { bookingSchema, TBooking, TService } from "@/validators";
import { ArrowLeft } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ServiceDetails = ({ service }: { service: TService }) => {
  const [duration, setDuration] = useState<string>("1");
  const [updatedPrice, setUpdatedPrice] = useState<number>(service.price);
  const [serviceClass, setServiceClass] = useState<string>("economy");
  const [date, setDate] = useState<string>("");
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const router = useRouter();

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

  useEffect(() => {
    const today = moment(new Date());
    const selectedDate = moment(new Date(date));
    const dateDifference = selectedDate.diff(today, "days");

    if (dateDifference < 0) {
      setSlots([]);
      setSelectedSlot("");
      toast.error(
        "Invalid date selected. Please choose a current or future date."
      );
    } else {
      const matchedBookings = bookings.filter(
        (booking) =>
          booking.date === date &&
          booking.duration === duration &&
          booking.service.id === service.id
      );

      const bookedTimeSlots = matchedBookings.map(
        (booking) => booking.timeslot
      );

      const availableTimeSlots = timeslots[
        duration as keyof typeof timeslots
      ].filter((slot) => !bookedTimeSlots.includes(slot));

      setSlots(availableTimeSlots);
      setSelectedSlot(availableTimeSlots[0]);
    }
  }, [date, duration, service.id]);

  const handleCheckout = async () => {
    if (!date) {
      toast.error(
        "Invalid date selected. Please choose a current or future date."
      );
      return;
    }

    if (!selectedSlot) {
      toast.error("Please pick an available timeslot.");
      return;
    }

    const bookingData = {
      service,
      duration,
      serviceClass,
      updatedPrice,
      date,
      timeslot: selectedSlot,
    } satisfies TBooking;

    const parsedBookingData = await bookingSchema.safeParseAsync(bookingData);

    if (!parsedBookingData.success) {
      toast.error("Data validation failed, please input valid data.");
      return;
    } else {
      console.log(parsedBookingData.data);
    }
  };

  return (
    <section className="grid md:grid-cols-2 md:min-h-screen">
      <div className="w-full h-full overflow-hidden bg-rose-500">
        <Image
          src={service.image}
          alt={service.title}
          width={1280}
          height={1920}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-10 pr-10 wrapper">
        {/* PACKAGE DETAILS */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => router.back()}
            className="btn btn-outline w-fit"
          >
            <ArrowLeft /> Back
          </button>
          <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
          <p>{service.description}</p>
          <h2 className="text-2xl md:text-3xl font-bold">${updatedPrice}</h2>
        </div>
        {/* PACKAGE CUSTOMIZATIONS */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-semibold">
            Customize your beauty package
          </h3>
          <div className="flex flex-col md:flex-row gap-5">
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
          <div className="flex flex-col md:flex-row gap-5">
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
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pick your timeslot</span>
              </div>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="select select-bordered"
              >
                {slots.length > 0 &&
                  slots.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                {slots.length === 0 && <option disabled>No slot found</option>}
              </select>
            </label>
          </div>
        </div>
        <button onClick={handleCheckout} className="btn btn-primary">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default ServiceDetails;
