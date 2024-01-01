import { useParams } from "react-router-dom";
import Button from "../../reusable-ui/Button";

export default function OrderPage() {
   const { firstName } = useParams();

   return (
      <div>
         <div>Bonjour {firstName}</div>
         <Button path="/" label="Déconnexion" />
      </div>
   );
}
