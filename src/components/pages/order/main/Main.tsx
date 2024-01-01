import styled from "styled-components";
import Body from "./Body";

export default function Main() {
   return (
      <MainStyled>
         <div className="basket">basket</div>
         <Body />
      </MainStyled>
   );
}

const MainStyled = styled.div`
   flex: 1;
   height: 100%;
   background-color: yellow;
   display: grid;
   grid-template-columns: 25% 1fr;

   .basket {
      background-color: red;
   }
`;
