import { theme } from "../../../theme";
import styled from "styled-components";

export default function OrderPage() {
   return (
      <OrderPageStyled>
         <div className="container">
            <div className="navbar">Navbar</div>
            <div className="main">Main</div>
         </div>
      </OrderPageStyled>
   );
}

const OrderPageStyled = styled.div`
   background-color: ${theme.colors.secondary};
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   .container {
      display: flex;
      flex-direction: column;
      width: 1400px;
      height: 95vh;
      background-color: red;

      .navbar {
         background-color: pink;
         height: 98px;
      }
      .main {
         background-color: blue;
         flex: 1;
      }
   }
`;
