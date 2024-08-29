import styled from "styled-components";
import VideoPlayerModal from "../../VideoPlayer/VideoPlayerModal";
import { useState } from "react";


const VideoCard=(props)=>{

    //Necesitamos manejar el estado de los videos para poder mostrarlos y usar un Modal 
    //El Modal es para visualizar el repproductor como componente dentro de la misma pagina

    const [videoUrl, setVideoUrl] = useState('');
    const [open, setOpen] = useState(false);

    const handleCardClick = (url) => {
        setVideoUrl(url);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVideoUrl('');
      };

    return <>
        <Card 
            imagen={props.imagen}
            tipo={props.tipo}
            color={props.color}
            onClick={() => props.tipo !== 'banner' && handleCardClick(props.link)}

            /*
            Si usaramos solamente el reproductor externo en nueva pestaña
            href={props.link}
            target="blank"  //Para abrir la pagina en una nueva pestaña
            rel="noopener noreferrer" //Configuración de seguridad para evitar el pishing*/
            
            />
            
            <VideoPlayerModal 
            open={open}
            videoUrl={videoUrl}
            handleClose={handleClose}
            />



    </>
};

const Card=styled.a`
    display: inline-block;//para poder darle dimensiones
    width: ${(props)=>props.tipo==='banner'?'646px' : '432px' };
    height: ${(props)=>props.tipo==='carrousel' ? '260px' : '333.56px'};
    border-radius: 4px;
    
    background-image:url(${(props)=>props.imagen});
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    border: 4px solid ${(props)=>props.color};
`;

export default VideoCard;