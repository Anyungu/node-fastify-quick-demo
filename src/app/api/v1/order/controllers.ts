import { Orders } from "../../../models/data";
import { fetchHotelById } from "../hotel/service";
import { filterItemsByIds } from "../menu/service";

/* ----------------
Business Logic for the Order Methods
------------------- */

/**
 * 
 * @param request 
 * @param reply 
 *  
 * Function will build the an array with full details about the hotel and menu items in order
 */
export const fetchOrders = (request: any, reply: any) => {
  let finalArray = [];
  for (let i = 0; i < Orders.length; i++) {
    finalArray.push({
      id: Orders[i].id,
      hotel: fetchHotelById(Orders[i].hotel_id),
      menuItems: filterItemsByIds(Orders[i].items),
    });
  }
  reply.send(finalArray);
};

export const fetchOrderById = (request: any, reply: any) => {
  const order = Orders.find((h) => h.id == request.params["id"]);

  if (typeof order === "undefined") {
    let error: Error = new Error();
    error.message = "Order Not Found";
    error.name = "NOT_FOUND";
    throw error;
  }
  reply.send({
    id: order.id,
    hotel: fetchHotelById(order.hotel_id),
    menuItems: filterItemsByIds(order.items),
  });
};

/**
 * 
 * @param request 
 * @param reply 
 * 
 * Function will check if the provided hotel and menu items actually exist
 */
export const createOrder = (request: any, reply: any) => {
  fetchHotelById(request.body["hotel_id"]);
  filterItemsByIds(request.body["menu_items_id"]);
  const order = {
    id: Math.max(...Orders.map((order) => order.id)) + 1,
    hotel_id: request.body["hotel_id"],
    items: request.body["menu_items_id"],
  };
  Orders.push(order);
  reply.send({ message: "Created" });
};
