import { names } from "./nextElementInList";

export const nameVariant = (currentName:string) => {
    if (currentName === names[0]) {
      return "text-corered"
    } else if (currentName === names[1]) {
      return "text-yellow-600"
    } else if (currentName === names[2]) {
      return "text-blue-600"
    } else {
      return "text-green-600"
    }
  };