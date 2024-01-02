import React from "react";
import { useAdminContext } from "../../../../../../context/AdminContext";
import AddPhoneForm from "./AddPhoneForm";

export default function Panels() {
   const { selectedTab } = useAdminContext();

   return (
      <div className="panels">
         {selectedTab === "add" && <AddPhoneForm />}
         {selectedTab === "edit" && <div>Modifier</div>}
      </div>
   );
}
