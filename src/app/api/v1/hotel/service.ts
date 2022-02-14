import {Hotels} from '../../../models/data'

/**
 * 
 * @param id 
 * @returns 
 * 
 * Internal business logic for use by other functions internally
 */
export const fetchHotelById = (id: number) => {
    const hotel = Hotels.find((h) => h.id == id);
  
    if (typeof hotel === "undefined") {
      let error: Error = new Error();
      error.message = `Hotel with ID ${id} not found`
      error.name = 'NOT_FOUND'
      throw error
    }

    return hotel
  };