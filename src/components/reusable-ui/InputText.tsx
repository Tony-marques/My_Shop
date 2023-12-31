import { ChangeEvent } from "react";

interface Props {
   onChange: (Event: ChangeEvent<HTMLInputElement>) => void;
   required: boolean;
   value: string;
   name: string;
   placeholder: string;
}

export default function InputText({ onChange, ...othersProps }: Props) {
   return <input type="text" onChange={onChange} {...othersProps} />;
}
