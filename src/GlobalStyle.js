import { createGlobalStyle } from "styled-components"; 
import { backgroundBody } from "./components/Ui/Variables";

const GlobalStyle=createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family:'Roboto', sans-serif; 
        background-color    : ${backgroundBody };
    }
`;

export default GlobalStyle