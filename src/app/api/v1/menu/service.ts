import { MenuItems } from "../../../models/data";

/**
 * 
 * @param idArray 
 * @returns 
 * 
 * For internal business logic.
 * 
 * Filter starts with internal Array to cover scenarios
 * where the menu items in the order are similar e.g [kuku, kuku, kuku]
 * Order is ignored if any of the menu items is not available
 */
export const filterItemsByIds = (idArray: number[]) => {
  let menuItemArray = [];

  idArray.filter((id) =>
    MenuItems.filter((real) => {
      if (real.id === id) {
        menuItemArray.push(real);
        return true;
      }
    })
  );

  if (menuItemArray.length < idArray.length) {
    let error: Error = new Error();
    error.message = "Some menu items were not found";
    error.name = "NOT_FOUND";
    throw error;
  }

  return menuItemArray;
};
