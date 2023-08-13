import styled from "styled-components";

const VideoCard=styled.a`
    display: inline-block;//para poder darle dimensiones
    width: ${(props)=>props.tipo=='carrusel' ? '432px' :'646px' };
    height: ${(props)=>props.tipo=='carrusel' ? '260px' : '333.56px'};
    border-radius: 4px;
    border: 4px;
    background-image: url(${(props)=>props.imagen});
    cursor: pointer;
    background-size:cover;
`;

export default VideoCard;