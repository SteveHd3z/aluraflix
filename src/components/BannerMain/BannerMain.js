import '../BannerMain/BannerMain.css';
import BtnTitle from '../Btn_Title/BtnTitle';
import VideoCard from '../VideoCard/VideoCard';

const BannerMain=()=>{
    return <div className='banner_main'>
            <div className='info_main'>
                <BtnTitle>FrontEnd</BtnTitle>
                <h2 className='subtitle'>Challenge React</h2>
                <p className='info_general'>Este challenge es una forma de aprendizaje. 
                    Es un mecanismo donde podrás comprometerte 
                    n la resolución de un problema para poder aplicar 
                    todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
            <VideoCard/>
        </div>    
}

export default BannerMain;
