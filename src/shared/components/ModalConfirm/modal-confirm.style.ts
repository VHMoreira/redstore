import styled from 'styled-components';

export const ModalConfirmContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    span{
        margin-top: 10px;
        font-size: 2em;
        font-weight: 700;
    }

    button{
        margin-top: 20px;
        max-width: 200px;
    }
`;