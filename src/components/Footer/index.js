import styled from "styled-components";
import { colorSecundario } from "../Ui/Variables";

const Footer=styled.footer`
    background-color: #000000;
    height: 90px;
    border-top: 2px solid;
    border-top-color: ${colorSecundario} ; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`;

export default Footer