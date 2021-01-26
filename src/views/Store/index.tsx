import React, { useCallback, useContext, useEffect, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { useToggle } from "../../hooks/useToogle";
import CartList from "./components/CartList";
import ModalConfirm from "../../shared/components/ModalConfirm";
import Card from "./components/Card";
import { Container, Content, GridList, HeaderInput } from "./store.style";
import { Pokemon } from "../../models/Pokemon";
import { CartButton } from "./components/CartButton/cart-button.style";
import { FiShoppingCart } from "react-icons/fi";

const Store: React.FC = () => {

    const { pokemons, loadStore } = useContext(StoreContext);
    const { active, enabled, disabled } = useToggle(false);
    const { active: listOpened, enabled: openList, disabled: closeList, toggle } = useToggle(true);
    const [pokemonsSearch, setPokemonsSearch] = useState<Pokemon[]>([]);

    useEffect(() => {
        loadStore();
    }, [loadStore]);

    useEffect(() => {
        setPokemonsSearch(pokemons);
    }, [pokemons]);

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
                        <CartButton onClick={toggle}>
                            <FiShoppingCart size={20} />
                            <span>Carrinho</span>
                        </CartButton>
                    </div>
                </header>
                <Content>
                    <GridList>
                        {pokemonsSearch.length > 1 && pokemonsSearch.map(p => <Card key={p.name} img={p.img} name={p.name} value={p.value} />)}
                    </GridList>
                    {listOpened && <CartList closeList={closeList} setIsOpen={enabled} />}
                </Content>
            </Container>
            {active && <ModalConfirm isOpen={active} setIsOpen={disabled} />}
        </>
    );
};

export default Store;