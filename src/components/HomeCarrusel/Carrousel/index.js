import VideoCard from "../VideoCard";
import React, { Component } from "react";
import Slider from "react-slick";
import { useMyContext } from "../../DataProvider";
import './Carrousel.css';


const Carrousel=({categoria})=>{

      const {videos} =useMyContext();

      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div className="container_Carrousel">
        <h1>{categoria}</h1>
        <Slider {...settings}>
          {videos.map((video)=>video.categoria===categoria &&
          <VideoCard imagen={video.imagen} tipo='carrousel'/>)}
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
