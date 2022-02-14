import { MenuItems } from "../../../models/data";

/* ----------------
Business Logic for the Menu Methods
------------------- */

export const fetchMenuItems = (request: any, reply: any) => {
  reply.send(MenuItems);
};

export const fetchMenuItemById = (request: any, reply: any) => {
  const menuItem = MenuItems.find((h) => h.id == request.params["id"]);

  if (typeof menuItem === "undefined") {
    let error: Error = new Error();
    error.message = "Menu Item Not Found";
    error.name = "NOT_FOUND";
    throw error;
  }
  reply.send(menuItem);
};

export const createMenuItem = (request: any, reply: any) => {
  const menuItem = {
    id: Math.max(...MenuItems.map((menuItem) => menuItem.id)) + 1,
    name: request.body["name"],
    price: request.body["price"],
  };
  MenuItems.push(menuItem);
  reply.send({ message: "Created" });
};
