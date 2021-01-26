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
    margin-left: 10px;
    border-radius: 5px;
    border: 0px solid black;
    color: ${(props) => props.theme.colors.fontDark};
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;

    @media(max-width: 900px) {
        flex-direction: column;
        position: sticky;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
    }
    /* align-items: center; */
`;

export const GridList = styled.div`
    width: 100%;
    margin-top: 5px;
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
	/* grid-auto-columns: 100px; */

    @media(max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;
