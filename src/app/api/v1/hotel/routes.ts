import { getSingleHotelOpts, getHotelsOpts, createHotelOpts } from "./schema";
import { fetchHotelById, fetchHotels, createHotel } from "./controllers";

/* ----------------
Hotel route aggregations
contains the schema and the business logic handler
Applies for all similar files
------------------- */
export const hotelRoutes = (fastify: any, options: any, next: any) => {
  fastify.get("/one/:id", getSingleHotelOpts, fetchHotelById);

  fastify.get("/all", getHotelsOpts, fetchHotels);

  fastify.post("/create", createHotelOpts, createHotel);

  next();
};
