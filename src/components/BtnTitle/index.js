import styled from "styled-components";

const BtnTitle=styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props)=>props.tipo!=='body'? '296px' : 'auto'};
    height: ${(props)=>props.tipo==='body' ? '60px' : '92px'};
    padding: ${(props)=>props.tipo === 'body' && '0 15px 0 15px'};
    background-color: ${(props)=>props.color};
    margin-bottom: 45px;
    color: rgba(245, 245, 245, 1);
    font-size: ${(props)=>props.tipo==='body' ? '35px' : '60px'};
    font-weight: 600;
    line-height: 70px;
    letter-spacing: 0em;
`;

export default BtnTitle;