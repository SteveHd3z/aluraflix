import styled from "styled-components";


const VideoCard=(props)=>{
    return <>
        <Card imagen={props.imagen} tipo={props.tipo}/>
    </>
};

const Card=styled.a`
    display: inline-block;//para poder darle dimensiones
    width: ${(props)=>props.tipo==='banner'?'646px' : '432px' };
    height: ${(props)=>props.tipo==='carrousel' ? '260px' : '333.56px'};
    border-radius: 4px;
    
    background-image:url(${(props)=>props.imagen});
    cursor: pointer;
    background-size:100%;
    background-repeat: no-repeat;
`;



export default VideoCard;