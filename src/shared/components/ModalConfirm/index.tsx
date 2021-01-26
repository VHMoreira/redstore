import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ButtonAccent } from "../../../views/Store/components/AccentButton/accent-button.style";
import { ModalConfirmContainer } from "./modal-confirm.style";

interface Props {
    isOpen: boolean
    setIsOpen(): void;
}

const ModalConfirm: React.FC<Props> = ({ isOpen, setIsOpen }) => {

    return (

        <ModalConfirmContainer>
            <FiCheckCircle size={50} color='lightgreen' />
            <span>Obrigado!! Seu pedido logo será entregue</span>
            <ButtonAccent onClick={setIsOpen}>
                Finalizar
            </ButtonAccent>
        </ModalConfirmContainer>
    );
};

export default ModalConfirm;