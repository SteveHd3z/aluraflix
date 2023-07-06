import styled from 'styled-components'


const Button=styled.button`

    min-width: 180px;
    height: 54px;
    background-color: ${({variant,datos})=>datos.map(btn=>btn.tipo===variant && btn.background)};
    border: 1px solid  ${(props)=>props.variant === 'newVideo' && '#ffffff'};

    font-family: Source Sans Pro;
    font-size: 21px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;

    border-radius: 4px;
    color: ${(props)=>props.variant === 'btnClean' ? '#000000E5' : '#ffffff' };

    &:hover{
        cursor: pointer;
    }
`;

export default Button