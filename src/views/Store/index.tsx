import React, { useCallback, useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { useToggle } from "../../hooks/useToogle";
import Cartbutton from "./components/CartButton";
import CartList from "./components/CartList";
import ModalConfirm from "../../shared/components/ModalConfirm";
import Card from "./components/Card";
import { Container, Content, GridList, HeaderInput } from "./store.style";
import { Pokemon } from "../../models/Pokemon";

const Store: React.FC = () => {

    const { pokemons, loadStore } = useContext(StoreContext);
    const { active, enabled, disabled } = useToggle(false);
    const [pokemonsSearch, setPokemonsSearch] = useState<Pokemon[]>([]);

    useEffect(() => {
        loadStore()
    }, [loadStore]);

    const filter = useCallback((pokemonName: string) => {

        if (pokemonName === "") {
            return setPokemonsSearch(pokemons);
        }
        const searchName = pokemonName.toLowerCase().split('');
        const filteredPokemons = pokemons.filter((pokemon) => {
            const intersection = searchName.filter(value => pokemon.name.toLowerCase().includes(value));
            return intersection.length === searchName.length && pokemon;
        });
        setPokemonsSearch(filteredPokemons);

    }, [pokemons]);

    return (
        <>
            <Container>
                <header>
                    <img src="https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_FIRE.png" alt="logo" />
                    <div>
                        <HeaderInput onChange={({ currentTarget }) => filter(currentTarget.value)} />
                        <Cartbutton />
                    </div>
                </header>
                <Content>
                    <GridList>
                        {pokemonsSearch.length > 1 && pokemonsSearch.map(p => <Card key={p.name} img={p.img} name={p.name} value={p.value} />)}
                    </GridList>
                    <CartList setIsOpen={enabled} />
                </Content>
            </Container>
            {active && <ModalConfirm isOpen={active} setIsOpen={disabled} />}
        </>
    );
};

export default Store;