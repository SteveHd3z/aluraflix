import Banner from "../components/Banner";
import BannerMain from '../components/BannerMain/BannerMain'
import "./styles/Home.css";
import {useMyContext } from "../components/DataProvider";
import VideoCard from "../components/VideoCard/index"
import Categoria from "../components/HomeCarrusel/Categoria/Categoria";

const Home = () => {

  const {categorias}=useMyContext();

  return <div className="home">
    
            <Banner />
            <BannerMain/>
            {categorias.map((categoria)=>
              <Categoria
                datos={categoria}
              />
            )}          
            

            

        </div>
};

export default Home;
