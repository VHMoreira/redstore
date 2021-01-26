import styled from 'styled-components';

export const CartListContainer = styled.div`
    flex: 1;
    padding: 10px;
    margin: 10px 5px 0px 10px;
    width: 100%;
    min-width: 400px;
    height: 70vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 10px;

    @media(max-width: 900px) {
        position: fixed;
        height: 100vh;
        min-width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
    }

    >header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        >svg{
            cursor: pointer;
        }
    }

    >section{
        flex: 1;
        margin-top: 10px;
        overflow-y: scroll;
        list-style: none;
    }

    >footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        >div{
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
            padding: 10px;
            font-weight: 700;
        }

        >span{
            margin-left: 10px;
        }
    }
`;

export const CartListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: grey;

    div{
        span{
            margin-right: 10px;
        }
    }

    &+li{
        border-top: 1px solid gray;
    }
`;