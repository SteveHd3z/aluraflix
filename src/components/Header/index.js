import styled from "styled-components";
import { colorSecundario } from "../Ui/Variables";

const Header=styled.header`
    background-color: #000000;
    height: 94px;
    border-bottom: 1px solid;
    border-bottom-color: ${colorSecundario} ; 
    display   : flex ;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 40px;
`;

export default Header