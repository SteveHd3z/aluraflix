import './BannerMain.css';
import BtnTitle from '../BtnTitle/index';
import { useMyContext } from '../DataProvider';
import VideoCard from '../HomeCarrusel/VideoCard/index';
import Carrousel from '../HomeCarrusel/Carrousel/index';


const BannerMain=()=>{

const {videos,categorias}=useMyContext();
const img=videos[0].imagen;
const cate=videos[0].categoria;
const color=categorias.map((categoria)=>categoria.nombre===cate && categoria.color)

    return <div className='banner_Container'>
    
        <div className='banner_main'>
            <div className='info_main'>
                <BtnTitle color={color} tipo='banner' key={cate.codigo}>{cate}</BtnTitle>
                <h2 className='subtitle'>Challenge React</h2>
                <p className='info_general'>Este challenge es una forma de aprendizaje. 
                    Es un mecanismo donde podrás comprometerte 
                    n la resolución de un problema para poder aplicar 
                    todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
            <VideoCard imagen={img} tipo='banner' color={color}/>
        </div>
       
        <Carrousel categoria={cate} color={color}/>             
        
        </div>   
}

export default BannerMain;
