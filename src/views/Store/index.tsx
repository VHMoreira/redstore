import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import Cartbutton from "../../shared/components/CartButton";
import CartList from "../../shared/components/CartList";
import Card from "./components/Card";
import { Container, Content, GridList, HeaderInput } from "./store.style";

const Store: React.FC = () => {

    const { pokemons, loadStore } = useContext(StoreContext);

    useEffect(() => {
        loadStore()
    }, []);

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
                    {pokemons.length > 1 && pokemons.map(p => <Card key={p.name} img={p.img} name={p.name} value={p.value} />)}
                </GridList>
                <CartList />
            </Content>
        </Container>
    );
};

export default Store;