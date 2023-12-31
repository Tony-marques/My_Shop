import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
   const { firstName } = useParams();

   return (
      <div>
         <div>Bonjour {firstName}</div>
         <Link to="/">
            <button>Déconnexion</button>
         </Link>
      </div>
   );
}
