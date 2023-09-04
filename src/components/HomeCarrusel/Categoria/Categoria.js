import BtnTitle from "../../BtnTitle/index";
import './Categoria.css';
import { useMyContext } from "../../DataProvider";
import VideoCard from "../VideoCard";

const Categoria=(props)=>{

    const {nombre,descripcion,color}=props.datos;
    const {videos}=useMyContext();

    return <> 

            <div className="title_Container">
                <BtnTitle
                     tipo='body'
                     color={color}
                     >{nombre}</BtnTitle>
                <p>{descripcion}</p>
            </div>

            {videos.map((video)=>video.categoria==nombre &&

                <>
                    <h1 style={{color:'yellow'}}>{video.titulo}</h1>
                    
                </>
                
            )}  
        
        
      


    </>


};

export default Categoria;