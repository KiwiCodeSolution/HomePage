import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const STEPS = [1, 2, 3, 4];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="rounded-full w-[52px] h-[52px] p-4 bg-white hover:shadow-swiper z-[1] text-xl md:text-lg xl:text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white absolute top-0 left-0"
      onClick={onClick}
    >
      Next
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="rounded-full w-[52px] h-[52px] p-4 bg-white hover:shadow-swiper z-[1] text-xl md:text-lg xl:text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white absolute top-0 right-0"
      onClick={onClick}
    >
      Prev
    </button>
  );
}

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {STEPS.map((el) => (
            <div key={el}>
              <button>{el}</button>
            </div>
          ))}
        </Slider>

        <Slider asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)} {...settings}>
          {STEPS.map((el) => (
            <div key={el}>
              <h3>{el}</h3>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
