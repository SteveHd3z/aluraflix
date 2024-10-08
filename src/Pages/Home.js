import BannerMain from '../components/BannerMain/BannerMain'
import "./styles/Home.css";
import {useMyContext } from "../components/DataProvider";
import Carrousel from '../components/HomeCarrusel/Carrousel';

const Home = () => {

  const {categorias, videos}=useMyContext();
  const cate=videos[0].categoria;

  return <div className="home">    
            
            <BannerMain/> 

            {categorias.map((categoria)=>
              categoria.nombre !== cate &&
              <Carrousel
                key={categoria.codigo}
                categoria={categoria.nombre}
                color={categoria.color}
                descripcion={categoria.descripcion}
              />
            )}        
            

            

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
