import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/around";
import Card from "./Card";
import { usePhoneContext } from "../../../../context/PhoneContext";

export default function Body() {
   const { phones } = usePhoneContext();

   return (
      <BodyStyled>
         {phones &&
            phones.map(({ id, imageSource, title, price }) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     imageSource={imageSource ? imageSource : "/assets/coming-soon.png"}
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
