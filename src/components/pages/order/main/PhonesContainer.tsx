import styled from "styled-components";
import { usePhoneContext } from "../../../../context/PhoneContext";
import Card from "./Card";
import { formatPrice } from "../../../../utils/around";
import { useState } from "react";
import { Phone } from "../../../../interfaces/phone.interface";
import { useAdminContext } from "../../../../context/AdminContext";

const EMPTY_PHONE = {
   title: "",
   imageSource: "",
   price: "",
   id: "",
   quantity: 0,
   isAvailable: true,
   isAdvertised: true,
};

export default function PhonesContainer() {
   const { handleSelectedTab } = useAdminContext();
   const { phones } = usePhoneContext();
   const [phoneSelected, setPhoneSelected] = useState<Phone | undefined>(
      EMPTY_PHONE
   );

   const handleClick = (id: number | string) => {
      const selectedPhone = phones.find((phone) => phone.id === id);
      setPhoneSelected(selectedPhone);

      handleSelectedTab("edit");
   };

   return (
      <PhonesContainerStyled>
         {phones &&
            phones.map(({ id, imageSource, title, price }) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     imageSource={
                        imageSource ? imageSource : "/assets/coming-soon.png"
                     }
                     title={title}
                     price={formatPrice(price)}
                     onClick={() => handleClick(id)}
                     $isSelected={phoneSelected?.id === id}
                  />
               );
            })}
      </PhonesContainerStyled>
   );
}

const PhonesContainerStyled = styled.div`
   display: grid;
   padding: 50px 50px 150px;
   min-height: 100%;
   justify-items: center;
   grid-template-columns: repeat(3, 1fr);
   grid-row-gap: 60px;
   box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

   .test {
      background-color: red;
   }
`;
