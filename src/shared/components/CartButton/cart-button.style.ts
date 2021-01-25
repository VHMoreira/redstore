import styled from 'styled-components';

export const CartButton = styled.button`
    padding: 10px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.fontLight};
    border: 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    >span{
        text-align: center;
        margin-left: 5px;
        cursor: pointer;
    }
`; 