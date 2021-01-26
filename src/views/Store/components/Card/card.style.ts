import styled from 'styled-components';

export const CardContainer = styled.div`
    padding: 1.5em;
    /* width: 100%; */
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid #dedede;

    >img{
        width: 10rem;
        height: 10rem;
    }

    >span{
        font-size: 1em;
        width: 100%;

        & + span{
            margin-top: 10px;
            font-size: 1.4em;
            font-weight: 700;
        }
    }
`;