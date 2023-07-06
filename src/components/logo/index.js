import styled from "styled-components";

const Logo=styled.img` 
    width: ${(props)=>props.tipo==='header'? '168.5px' : '252.5px'};
    height: ${({tipo})=>tipo=='header'? '40px' : '60px'};
`;

export default Logo