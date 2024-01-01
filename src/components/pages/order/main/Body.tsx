import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { data2 } from "../../../../data/data";
import { formatPrice } from "../../../../utils/around";
import Card from "./Card";

interface Phone {
   id: number;
   imageSource: string;
   title: string;
   price: number;
   quantity: number;
   isAvailable: boolean;
   isAdvertised: boolean;
}

export default function Body() {
   const [phones, setPhones] = useState<Phone[]>(data2);

   return (
      <BodyStyled>
         {phones &&
            phones.map(({ id, imageSource, title, price }) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     imageSource={imageSource}
                     title={title}
                     price={formatPrice(price)}
                  />
               );
            })}
      </BodyStyled>
   );
}

const BodyStyled = styled.div`
   background-color: ${theme.colors.background_white};
   box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-row-gap: 60px;
   padding: 50px 50px 150px;
   min-height: 100%;
   justify-items: center;
   overflow-y: scroll;
   position: relative;
`;
