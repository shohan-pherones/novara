import z from "zod";

export const serviceSchema = z.object({
  id: z.number(),
  title: z.string().min(3).max(256),
  image: z.string(),
  description: z.string().min(3).max(1000),
  price: z.number(),
});

export type TService = z.infer<typeof serviceSchema>;

export const bookingSchema = z.object({
  id: z.number().optional(),
  user: z.object({}).optional(),
  service: z.object(serviceSchema.shape),
  duration: z.string(),
  updatedPrice: z.number(),
  serviceClass: z.string(),
  date: z.string(),
  timeslot: z.string(),
});

export type TBooking = z.infer<typeof bookingSchema>;
