import { Hotels } from "../../../models/data";

/* ----------------
Business Logic for the Hotel Methods
------------------- */

export const fetchHotels = (request: any, reply: any) => {
  reply.send(Hotels);
};

export const fetchHotelById = (request: any, reply: any) => {
  const hotel = Hotels.find((h) => h.id == request.params["id"]);

  if (typeof hotel === "undefined") {
    let error: Error = new Error();
    error.message = "Hotel Not Found";
    error.name = "NOT_FOUND";
    throw error;
  }
  reply.send(hotel);
};

export const createHotel = (request: any, reply: any) => {
  const hotel = {
    id: Math.max(...Hotels.map((hotel) => hotel.id)) + 1,
    name: request.body["name"],
    location: request.body["location"],
  };
  Hotels.push(hotel);
  reply.send({ message: "Created" });
};
