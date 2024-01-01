import React from "react";
import { useAdminContext } from "../../../../../context/AdminContext";

export default function Panels() {
   const { selectedTab } = useAdminContext();

   return (
      <div className="panels">
         {selectedTab === "add" && <div>Ajouter</div>}
         {selectedTab === "edit" && <div>Modifier</div>}
      </div>
   );
}
