import styled from 'styled-components';
import { colorSecundario } from '../Ui/Variables';

const Icono=styled.i`
    
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center; 
    color   : ${colorSecundario} ;
    margin-right: 25px;
    
    svg{
        height: 40px;
        width: 40px;
        
    }
`;

export default Icono;