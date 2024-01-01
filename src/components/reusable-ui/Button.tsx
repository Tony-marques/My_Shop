import styled from "styled-components";
import { theme } from "../../theme";
import {  ReactElement } from "react";

interface Props {
   Icon?: ReactElement;
   label: string;
   onClick: () => void;
}

export default function Button({ label, Icon, onClick }: Props) {
   return (
      <ButtonStyled onClick={onClick}>
         <span>{label}</span>
         {Icon && Icon}
      </ButtonStyled>
   );
}

const ButtonStyled = styled.button`
   width: 100%;
   padding: 18px 24px 18px 24px;
   border-radius: 5px;
   border: 1px solid ${theme.colors.primary};
   cursor: pointer;
   background-color: ${theme.colors.primary};
   color: ${theme.colors.white};
   font-size: 15px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: Arial;
   font-weight: 700;
   transition: all 0.3s;

   &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
   }
`;
