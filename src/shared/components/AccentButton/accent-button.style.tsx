import styled from 'styled-components';

export const ButtonAccent = styled.button`
    margin-top: 10px;
    width: 100%;
    padding: 2px;
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.fontLight};
    border-radius: 5px;
    border: 0px;
`; 