import { ChangeEvent, ReactElement } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface Props {
   onChange: (Event: ChangeEvent<HTMLInputElement>) => void;
   required: boolean;
   value: string;
   name: string;
   placeholder: string;
   Icon?: ReactElement;
}

export default function InputText({ onChange, Icon, ...othersProps }: Props) {
   return (
      <InputTextStyled>
         {Icon && Icon}
         <input type="text" onChange={onChange} {...othersProps} />
      </InputTextStyled>
   );
}

const InputTextStyled = styled.div`
   border-radius: 5px;
   height: 55px;
   background-color: ${theme.colors.white};
   padding: 18px 24px;
   width: 400px;
   display: flex;
   align-items: center;
   gap: 13px;
   margin: 18px 0;

   svg {
      font-size: 25px;
      color: ${theme.colors.primary};
   }

   input {
      flex: 1;
      border: none;
      padding: 10px;

      &::placeholder {
         color: #d3d3d3;
      }
   }
`;
