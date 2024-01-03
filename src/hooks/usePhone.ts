import { useState } from "react";
import { data2 } from "../data/data";
import { Phone } from "../interfaces/phone.interface";

export const usePhone = () => {
   const [phones, setPhones] = useState<Phone[]>(data2);

   const handleAddPhone = (phoneToAdd: Phone) => {
      setPhones([
         {
            ...phoneToAdd,
            id: Math.round(Math.random() * new Date().getTime()),
         },
         ...phones,
      ]);
   };

   const handleDeletePhone = (idToPhoneDelete?: string | number) => {
      const filteredPhones = phones.filter(
         (phone) => phone.id !== idToPhoneDelete
      );
      setPhones(filteredPhones);
   };

   const regeneratePhones = () => {
      setPhones(data2);
   };

   return {
      phones,
      handleAddPhone,
      handleDeletePhone,
      regeneratePhones,
   };
};
