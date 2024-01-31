import VideoCard from "../VideoCard";
import Slider from "react-slick";
import { useMyContext } from "../../DataProvider";
import './Carrousel.css';
import BtnTitle from "../../BtnTitle";
import Text from "../../Texto";


const Carrousel=({categoria,color,descripcion})=>{

      const {videos} =useMyContext();

      const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div className="container_Carrousel">

        <div className="encabezado">
          {categoria !== 'Front End' && <BtnTitle color={color} tipo='categoria'>{categoria}</BtnTitle>}
          <Text>{descripcion}</Text>
        </div>
        

        <Slider {...settings}>
          {videos.map((video)=>video.categoria===categoria &&
          <VideoCard imagen={video.imagen} tipo='carrousel' key={video.codigo} link={video.link} color={color}/>)}
        </Slider>
      </div>
    );
  }

  export default Carrousel;


  /*export default class Responsive extends Component {

  render() {
    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          {this.props.videos.map((video)=>
          <VideoCard imagen={video.imagen} tipo='carrousel'/>)}
        </Slider>
      </div>
    );
  }
}*/
