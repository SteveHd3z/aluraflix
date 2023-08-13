import './BannerMain.css';
import BtnTitle from '../BtnTitle/index';
import { useMyContext } from '../DataProvider';
import VideoCard from '../VideoCard/index';


const BannerMain=()=>{

const {videos}=useMyContext();

    return <div className='banner_main'>
            <div className='info_main'>
                <BtnTitle tipo='banner'>{videos[0].categoria}</BtnTitle>
                <h2 className='subtitle'>Challenge React</h2>
                <p className='info_general'>Este challenge es una forma de aprendizaje. 
                    Es un mecanismo donde podrás comprometerte 
                    n la resolución de un problema para poder aplicar 
                    todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
            <VideoCard imagen={videos[0].imagen}/>
        </div>    
}

export default BannerMain;
