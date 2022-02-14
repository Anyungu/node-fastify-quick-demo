import { getSingleOrderOpts, getOrdersOpts, createOrderOpts } from "./schema";
import { fetchOrderById, fetchOrders, createOrder } from "./controllers";

export const orderRoutes = (fastify: any, options: any, next: any) => {
  fastify.get("/one/:id", getSingleOrderOpts, fetchOrderById);

  fastify.get("/all", getOrdersOpts, fetchOrders);

  fastify.post("/create", createOrderOpts, createOrder);

  next();
};
