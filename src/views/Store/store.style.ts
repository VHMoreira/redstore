import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    >header{
        background-color: ${(props) => props.theme.colors.accent};
        color: ${(props) => props.theme.colors.fontLight};
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
`;

export const HeaderInput = styled.input`
    flex: 1;
    width: 100%;
    max-width: 300px;
    padding: 5px;
    border-radius: 5px;
    border: 0px solid black;
    color: ${(props) => props.theme.colors.fontDark};
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const GridList = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
