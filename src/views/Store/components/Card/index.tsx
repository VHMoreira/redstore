import React from "react";
import { ButtonAccent } from "../../../../shared/components/AccentButton/accent-button.style";
import { CardContainer } from "./card.style";

interface Props {
    name: string;
    img: string;
    value: number;
}

const Card: React.FC<Props> = ({ img, name, value }) => {
    return (
        <CardContainer>
            <img
                alt={name}
                src={img} />
            <span>{name}</span>
            <span>R$ {value}</span>
            <ButtonAccent>
                Adicionar ao Carrinho
            </ButtonAccent>
        </CardContainer>
    );
};

export default Card;