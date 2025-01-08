import VideoCard from "../VideoCard";
import { useMyContext } from "../../DataProvider";
import './Carrousel.css';
import BtnTitle from "../../BtnTitle";
import Text from "../../Texto";


import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const Carrousel=({categoria,color,descripcion})=>{

      const {videos} =useMyContext();      

      //Carrousel using swiper type Netflix:

      return (
        <div className="container_Carrousel">
          <div className="encabezado">
            {categoria !== 'Front End' && <BtnTitle color={color} tipo='categoria'>{categoria}</BtnTitle>}
            <Text>{descripcion}</Text>
          </div>
      
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            slidesPerGroup={3} // Avanzar de a 3 diapositivas
            navigation
            scrollbar={{ draggable: true }}
            loop={true} // Activa el looping infinito

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {videos
              .filter((video) => video.categoria === categoria) // Filtramos videos por categoría
              .map((video) => (
                <SwiperSlide key={video.codigo}>
                  <VideoCard 
                    imagen={video.imagen} 
                    tipo="carrousel" 
                    link={video.link} 
                    color={color} 
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      );  

  }

  export default Carrousel;