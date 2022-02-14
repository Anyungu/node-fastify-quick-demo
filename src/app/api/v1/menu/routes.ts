import { getSingleMenuItemOpts, getMenuItemsOpts, createMenuItemOpts } from "./schema";
import { fetchMenuItemById, fetchMenuItems, createMenuItem } from "./controllers";

export const menuItemRoutes = (fastify: any, options: any, next: any) => {
  fastify.get("/one/:id", getSingleMenuItemOpts, fetchMenuItemById);

  fastify.get("/all", getMenuItemsOpts, fetchMenuItems);

  fastify.post("/create", createMenuItemOpts, createMenuItem);

  next();
};
