import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import AccentButton from "../AccentButton";
import { CartListContainer, CartListItem } from "./cart-list.style";

const CartList: React.FC = () => {
    return (

        <CartListContainer>
            <header>
                <h1>
                    Carrinho
                </h1>
            </header>

            <section>
                <CartListItem>

                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>
                <CartListItem>
                    <div>
                        <span>
                            2x
                        </span>
                        <span>
                            Charizard
                        </span>
                    </div>
                    <span>
                        R$ 400,00
                    </span>
                </CartListItem>

            </section>

            <footer>
                <AccentButton style={
                    { padding: 20 }
                }>
                    <FiShoppingCart size={20} />
                    Realizar Compra
                </AccentButton>
            </footer>
        </CartListContainer>
    );
};

export default CartList;