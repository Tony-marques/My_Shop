import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/around";

interface Props {
   id: number;
   imageSource: string;
   title: string;
   price: number | string;
}

export default function Card({ id, imageSource, title, price }: Props) {
   console.log(formatPrice(price));

   return (
      <CardStyled key={id}>
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

const CardStyled = styled.div`
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

   .image {
      height: 100%;

      img {
         max-width: 100%;
         height: 100%;
         object-fit: cover;
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
`;
