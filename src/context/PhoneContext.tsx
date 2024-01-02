import { ReactNode, createContext, useContext } from "react";
import { usePhone } from "../hooks/usePhone";
import { Phone } from "../interfaces/phone.interface";

const PhoneContext = createContext<PhoneContextInterface | null>(null);

interface PhoneContextInterface {
   phones: Phone[];
   handleAddPhone: (phoneToAdd: Phone) => void;
   handleDeletePhone: (idToPhoneDelete: string | number) => void;
   regeneratePhones: () => void;
}

interface Props {
   children: ReactNode;
}

export const PhoneContextProvider = ({ children }: Props) => {
   const { phones, handleAddPhone, handleDeletePhone, regeneratePhones } =
      usePhone();

   const value: PhoneContextInterface = {
      phones,
      handleAddPhone,
      handleDeletePhone,
      regeneratePhones,
   };

   return (
      <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
   );
};

export const usePhoneContext = () => {
   const context = useContext(PhoneContext);

   if (!context) {
      throw new Error("You're not in PhoneContextProvider");
   }

   return context;
};
