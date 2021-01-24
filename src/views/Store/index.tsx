import React from "react";
import Card from "./components/Card";
import { Container, GridList, HeaderInput } from "./store.style";

const Store: React.FC = () => {
    return (
        <Container>
            <header>
                Red Store
                <HeaderInput />
            </header>
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
        </Container>
    );
};

export default Store;