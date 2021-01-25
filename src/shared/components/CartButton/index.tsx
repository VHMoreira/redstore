import React from "react";
import { CartButton } from "./cart-button.style";
import { FiShoppingCart } from "react-icons/fi";

const Cartbutton: React.FC = () => {
    return (
        <CartButton>
            <FiShoppingCart size={20} />
            <span>Carrinho</span>
        </CartButton>
    );
};

export default Cartbutton;