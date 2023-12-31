import { ChangeEvent, FormEvent, useState } from "react";
import InputText from "../../reusable-ui/InputText";
import { useNavigate } from "react-router-dom";

export default function HomeForm() {
   const [firstName, setFirstName] = useState<string>("");
   const navigate = useNavigate();

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFirstName(event.target.value);
   };

   const handleRedirect = () => {
      navigate(`/order/${firstName}`);
   };

   return (
      <form onSubmit={handleSubmit} method="POST">
         <InputText
            required
            value={firstName}
            name="firstName"
            placeholder={"Entrez votre prénom"}
            onChange={handleChange}
         />
         <button onClick={handleRedirect}>Accéder à votre espace</button>
      </form>
   );
}
