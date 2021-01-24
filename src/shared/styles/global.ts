import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        background: #dedede;
        color: #383838;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        font-weight: 500;
    }
    h1{
        font-weight: 700;
        font-family: 'Ubuntu';
        font-size: 30px;
    }
    h1, span{
        cursor: default;
    }
    a{
        text-decoration: none;
        color: #FFF;
    }
    button{
        cursor: pointer;
    }
`;