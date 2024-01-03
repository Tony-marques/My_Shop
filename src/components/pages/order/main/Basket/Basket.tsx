import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";

export default function Basket() {
   return (
      <BasketStyled>
         <BasketHeader />
         <BasketBody />
         <BasketFooter />
      </BasketStyled>
   );
}

const BasketStyled = styled.div`
   background-color: pink;
   display: flex;
   flex-direction: column;
`;
