import BannerMain from '../components/BannerMain/BannerMain'
import "./styles/Home.css";
import {useMyContext } from "../components/DataProvider";
import VideoCard from "../components/HomeCarrusel/VideoCard/index"
import Categoria from "../components/HomeCarrusel/Categoria/Categoria";

const Home = () => {

  const {categorias}=useMyContext();

  return <div className="home">    
            
            <BannerMain/>         
            

            

        </div>
};

export default Home;

/*
<BannerMain/>
            
            {categorias.map((categoria)=>
              <Categoria
                datos={categoria}
              />
            )}   
*/
