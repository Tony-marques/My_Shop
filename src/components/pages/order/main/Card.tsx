import styled, { css } from "styled-components";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../theme";
import { useAdminContext } from "../../../../context/AdminContext";
import { TiDelete } from "react-icons/ti";
import { usePhoneContext } from "../../../../context/PhoneContext";

interface Props {
   id: number | string;
   imageSource: string;
   title: string;
   price: number | string;
   onClick: () => void;
   $isSelected: boolean;
}

interface StyleProps {
   $isSelected: boolean;
}

export default function Card({
   id,
   imageSource,
   title,
   price,
   onClick,
   $isSelected,
}: Props) {
   const { isModeAdmin } = useAdminContext();
   const { handleDeletePhone } = usePhoneContext();

   return (
      <CardStyled $isSelected={$isSelected} onClick={onClick}>
         {isModeAdmin && (
            <div
               className="button-delete"
               onClick={() => handleDeletePhone(id)}
            >
               <TiDelete />
            </div>
         )}
         <div className="image">
            <img src={imageSource} alt="" />
         </div>
         <div className="informations">
            <div className="title">{title}</div>
            <div className="bottom-informations">
               <div className="price">{price}</div>
               <Button label="Ajouter" $variant="small" />
            </div>
         </div>
      </CardStyled>
   );
}

const CardStyled = styled.div<StyleProps>`
   background-color: ${theme.colors.white};
   padding: 10px 20px;
   width: 240px;
   height: 330px;
   display: grid;
   gap: 15px;
   grid-template-rows: 65% 1fr;
   border-radius: ${theme.borderRadius.extraRound};
   overflow-x: hidden;
   box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
   position: relative;

   .image {
      height: 100%;
      display: flex;
      justify-content: center;

      img {
         max-width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }

   .informations {
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .title {
         font-family: "Amatic sc";
         font-size: 36px;
         font-weight: 700;
         color: ${theme.colors.secondary};
         width: 100%;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         bottom: 10px;
         position: relative;
         height: 46px;
      }

      .bottom-informations {
         display: flex;
         justify-content: space-between;
         align-items: center;

         .price {
            font-size: 16px;
            color: ${theme.colors.primary};
         }
      }
   }

   .button-delete {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 30px;
      color: ${theme.colors.primary};
      cursor: pointer;
   }

   ${({ $isSelected }) => ($isSelected ? selectedStyle : "")}
`;

const selectedStyle = css`
   background-color: green;
`;
