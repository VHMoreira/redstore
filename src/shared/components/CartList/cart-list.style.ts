import styled from 'styled-components';

export const CartListContainer = styled.div`
    padding: 10px;
    width: 100%;
    max-width: 400px;
    height: 70vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;

    >section{
        flex: 1;
        margin-top: 10px;
        overflow-y: scroll;
        list-style: none;
    }

    >footer{
        display: flex;
        align-items: center;
        justify-content: center;

        >span{
            margin-left: 10px;
        }
    }
`;

export const CartListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 10px 0;

    div{
        span{
            margin-right: 10px;
        }
    }

    &+li{
        border-top: 1px solid black;
    }
`;