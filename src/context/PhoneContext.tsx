import { ReactNode, createContext, useContext } from "react";
import { usePhone } from "../hooks/usePhone";
import { Phone } from "../interfaces/phone.interface";

const PhoneContext = createContext<PhoneContextInterface | null>(null);

interface PhoneContextInterface {
   phones: Phone[];
}

interface Props {
   children: ReactNode;
}

export const PhoneContextProvider = ({ children }: Props) => {
   const { phones } = usePhone();

   const value: PhoneContextInterface = { phones };

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
