import React, { useContext, useMemo } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { ButtonAccent } from "../AccentButton/accent-button.style";
import { CartListContainer, CartListItem } from "./cart-list.style";

interface Item {
    // id: string;
    quantity: number;
    name: string;
    value: number;
}

interface Props {
    setIsOpen(): void;
}

const CartList: React.FC<Props> = ({ setIsOpen }) => {
    const { items, resetCart } = useContext(CartContext);

    const total = useMemo(() => items.reduce((acc, current) => acc + current.value, 0), [items]);

    return (

        <CartListContainer>
            <header>
                <h1>
                    Resumo do Pedido
                </h1>
            </header>

            <section>
                {items.map((item: Item) =>
                    <CartListItem key={item.name}>
                        <div>
                            <span>
                                {item.quantity}x
                        </span>
                            <span>
                                {item.name}
                            </span>
                        </div>
                        <span>
                            R$ {item.value.toFixed(2).replace('.', ',')}
                        </span>
                    </CartListItem>)}
            </section>

            <footer>
                <div>
                    Total: {`R$ ${total.toFixed(2).replace('.', ',')}`}
                </div>
                <ButtonAccent onClick={() => {
                    setIsOpen();
                    resetCart();
                }} style={
                    { padding: 20 }
                }>
                    Finalizar Compra
                </ButtonAccent>
            </footer>
        </CartListContainer>
    );
};

export default CartList;