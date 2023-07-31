import React, { Component } from "react";
import Slider from "react-slick";
import Logo from '../../../assets/img/LogoMain.png'


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h1> Multiple items </h1>
        <Slider {...settings}>
          <div style={{height:'50px'}}>
            <img src={Logo}/>
          </div>
          <div style={{height:'50px'}}>
          <img src={Logo}/>
          </div>
          <div style={{height:'50px'}}>
          <img src={Logo}/>
          </div>
          <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yasss.es%2Fcultura%2Fdeadpool-marvel-yasss_18_2570925149.html&psig=AOvVaw2wD5fYBchV7hbtdVT9qppc&ust=1690039022980000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiy4Y6MoIADFQAAAAAdAAAAABAE"/>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}