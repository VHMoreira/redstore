import styled from 'styled-components';

export const CartListContainer = styled.div`
    padding: 10px;
    margin: 10px 50px 0px 10px;
    width: 100%;
    max-width: 400px;
    height: 70vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 10px;

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