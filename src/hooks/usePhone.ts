import { useState } from "react";
import { data2 } from "../data/data";
import { Phone } from "../interfaces/phone.interface";



export const usePhone = () => {
   const [phones, setPhones] = useState<Phone[]>(data2);

   return {
      phones,
   };
};
