import styled from "styled-components";

export default function Main() {
   return (
      <MainStyled>
         <div className="basket">basket</div>
         <div className="body">body</div>
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

   .body {
      background-color: blue;
   }
`;
