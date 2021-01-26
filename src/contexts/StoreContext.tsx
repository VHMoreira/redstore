import axios from 'axios';
import React, { createContext, useCallback, useState, useContext } from 'react';
import { Pokemon } from '../models/Pokemon';

interface StoreContextData {
    pokemons: Pokemon[];
    loadStore(): void;
}

interface StoreContextState {
    pokemons: Pokemon[];
}

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

const StoreProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<StoreContextState>({
        pokemons: []
    } as StoreContextState);

    const loadStore = useCallback(async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/type/10');
        const pokemonsFromAPI = data.pokemon.map((p: any) => {
            const pokemon = p.pokemon as { name: string, url: string };
            const name = pokemon.name;
            const aux = pokemon.url.split('/')
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${aux[aux.length - 2]}.png`;
            const value = Math.random() * 1000

            return {
                name,
                img,
                value: value.toFixed(2)
            }
        });


        setData({ pokemons: pokemonsFromAPI });

    }, []);

    return (
        <StoreContext.Provider value={{ pokemons: data.pokemons, loadStore }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider as default, StoreContext };