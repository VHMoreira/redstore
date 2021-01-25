import React from "react";
import Cartbutton from "../../shared/components/CartButton";
import CartList from "../../shared/components/CartList";
import Card from "./components/Card";
import { Container, Content, GridList, HeaderInput } from "./store.style";

const Store: React.FC = () => {
    return (
        <Container>
            <header>
                <img src="https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_FIRE.png" alt="logo" />
                <HeaderInput />
                <div>
                    <Cartbutton />
                </div>
            </header>
            <Content>
                <GridList>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </GridList>
                <CartList />
            </Content>
        </Container>
    );
};

export default Store;