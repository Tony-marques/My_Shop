import { useState } from "react";
import { toast } from "react-toastify";

export const useAdmin = () => {
   const [isModeAdmin, setIsModeAdmin] = useState<boolean>(false);

   const toggleAdminMode = () => {
      setIsModeAdmin(!isModeAdmin);
      if (!isModeAdmin) {
         toast.info("Mode admin activé");
      }
   };

   return {
      isModeAdmin,
      toggleAdminMode,
   };
};
