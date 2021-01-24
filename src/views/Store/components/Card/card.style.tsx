import styled from 'styled-components';

export const CardContainer = styled.div`
    flex: 1;
    padding: 1.5em;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid #dedede;
    border-color

    & + &{

    }

    >img{
        width: 10rem;
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