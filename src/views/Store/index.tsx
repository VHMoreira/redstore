import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { useToggle } from "../../hooks/useToogle";
import Cartbutton from "./components/CartButton";
import CartList from "./components/CartList";
import ModalConfirm from "../../shared/components/ModalConfirm";
import Card from "./components/Card";
import { Container, Content, GridList, HeaderInput } from "./store.style";

const Store: React.FC = () => {

    const { pokemons, loadStore } = useContext(StoreContext);
    const { active, enabled, disabled } = useToggle(false);

    useEffect(() => {
        loadStore()
    }, []);

    return (
        <>
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
                    <CartList setIsOpen={enabled} />
                </Content>
            </Container>
            {active && <ModalConfirm isOpen={active} setIsOpen={disabled} />}
        </>
    );
};

export default Store;