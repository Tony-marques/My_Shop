import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";
import NavbarRight from "./NavbarRight";

export default function Navbar() {
   return (
      <NavbarStyled>
         <Logo $variant="small" />
         <NavbarRight />
      </NavbarStyled>
   );
}

const NavbarStyled = styled.div`
   background-color: ${theme.colors.secondary};
   height: 98px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
`;
