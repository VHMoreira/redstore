import React from "react";
import { ButtonAccent } from "./accent-button.style";

interface Props {
    style?: any;
}

const AccentButton: React.FC<Props> = ({ children, style }) => {
    return (
        <ButtonAccent style={style}>
            {children}
        </ButtonAccent>
    );
};

export default AccentButton;