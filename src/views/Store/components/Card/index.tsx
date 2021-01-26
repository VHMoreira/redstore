import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { ButtonAccent } from "../AccentButton/accent-button.style";
import { CardContainer } from "./card.style";

interface Props {
    name: string;
    img: string;
    value: number;
}

const Card: React.FC<Props> = ({ img, name, value }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <CardContainer>
            <img
                alt={name}
                src={img} />
            <span>{name}</span>
            <span>R$ {value.toString().replace('.', ',')}</span>
            <ButtonAccent onClick={() => addToCart({ name, value })}>
                Adicionar ao Carrinho
            </ButtonAccent>
        </CardContainer>
    );
};

export default Card;