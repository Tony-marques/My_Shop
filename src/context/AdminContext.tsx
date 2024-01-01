import { createContext, useContext } from "react";
import { useAdmin } from "../hooks/useAdmin";

const AdminContext = createContext<AdminContextInterface | null>(null);

interface AdminContextInterface {
   isModeAdmin: boolean;
   toggleAdminMode: () => void;
}

export const AdminContextProvider = ({ children }) => {
   const { isModeAdmin, toggleAdminMode } = useAdmin();

   const value: AdminContextInterface = {
      isModeAdmin,
      toggleAdminMode,
   };

   return (
      <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
   );
};

export const useAdminContext = () => {
   const context = useContext(AdminContext);

   if (!context) {
      throw new Error("AdminContext must be in AdminContextProvider");
   }

   return context;
};
