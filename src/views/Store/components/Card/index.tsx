import React from "react";
import { ButtonAccent } from "../../../../shared/components/AccentButton/accent-button.style";
import { CardContainer } from "./card.style";

const Card: React.FC = () => {
    return (
        <CardContainer>
            <img
                alt='bulba'
                src='https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon%20-%20256x256/pokemon_icon_006_00.png' />
            <span>Charmander</span>
            <span>R$ 200</span>
            <ButtonAccent>
                Adicionar ao Carrinho
            </ButtonAccent>
        </CardContainer>
    );
};

export default Card;