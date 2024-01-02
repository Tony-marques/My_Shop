import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";
import { IoMdPhonePortrait } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../../theme";
import Button from "../../../../../reusable-ui/Button";

export default function AddPhoneForm() {
   const inputsConfig = [
      {
         placeholder: "Nom du produit (ex: Super Burger)",
         Icon: <IoMdPhonePortrait />,
         $variant: "small",
         className: "full-width",
      },
      {
         placeholder:
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
         Icon: <BsFillCameraFill />,
         $variant: "small",
         className: "full-width",
      },
      {
         placeholder: "Prix",
         Icon: <MdOutlineEuro />,
         $variant: "small",
         className: "full-width",
      },
   ];

   return (
      <AddPhoneFormStyled>
         <div className="imagePreview">
            <p>Aucune image</p>
         </div>
         <div className="form">
            {inputsConfig.map(({ placeholder, Icon, $variant, className }) => {
               return (
                  <InputText
                     placeholder={placeholder}
                     Icon={Icon}
                     $variant={$variant}
                     className={className}
                  />
               );
            })}
         </div>
         <div className="buttons">
            <Button $variant="small" label="Ajouter un nouveau téléphone" />
         </div>
      </AddPhoneFormStyled>
   );
}

const AddPhoneFormStyled = styled.div`
   /* background-color: blue; */
   display: grid;
   grid-template-columns: 30% 1fr;
   grid-template-rows: 70% 1fr;
   height: 100%;
   width: 80%;
   padding: 25px 30px 20px 60px;
   grid-column-gap: 8px;

   .imagePreview {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: 1 / 1 / 2 / 2;


      p {
         border: 1px solid ${theme.colors.secondary};
         width: 215px;
         height: 120px;
         border-radius: ${theme.borderRadius.round};
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }

   .full-width {
      width: 100%;
   }

   .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      grid-area: 1 / 2 / 2 / 3;

   }

   .buttons {
      grid-area: 2 / 2 / 3 / 3;
   }
`;
