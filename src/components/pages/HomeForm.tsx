import React, { ChangeEvent, FormEvent, useState } from "react";
import InputText from "../reusable-ui/InputText";

export default function HomeForm() {
   const [firstName, setFirstName] = useState<string>("");

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      alert(`Bonjour ${firstName}`);
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFirstName(event.target.value);
   };
   return (
      <form onSubmit={handleSubmit}>
         <InputText
            required
            value={firstName}
            name="firstName"
            placeholder={"Entrez votre prénom"}
            onChange={handleChange}
         />
         <button>Accéder à votre espace</button>
      </form>
   );
}
