import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Right, Left } from "../icons/iconComponent";
import { basicStylesSwiperButton } from "../helpers/stylesHelpers";
import HowWeWorksItem from "./howWeWorksItem";

const ITEMS = [
  {
    id: "1",
    photo: "/img/how-works-1.png",
    alt: "this image illustrates the first stage of work",
  },
  {
    id: "2",
    photo: "/img/how-works-2.png",
    alt: "this image illustrates the second stage of work",
  },
  {
    id: "3",
    photo: "/img/how-works-3.png",
    alt: "this image illustrates the third stage of work",
  },
  {
    id: "4",
    photo: "/img/how-works-4.png",
    alt: "this image illustrates the fourth stage of work",
  },
  {
    id: "5",
    photo: "/img/how-works-5.png",
    alt: "this image illustrates the fifth stage of work",
  },
];

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`top-5 left-[5px] md:top-[-54px] md:left-0 xl:top-0 xl:left-[-78px] ${basicStylesSwiperButton}`}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Left />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`top-5 right-[5px] md:top-[-54px] md:right-0 md:left-[380px] xl:top-0 ${basicStylesSwiperButton}`}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Right />
    </div>
  );
}

export default class SliderHowWeWorks extends Component {
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
      <div className="relative">
        {/* це слайдер із номерами  */}
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          // autoplay={true}
          infinite={true}
          className="w-[280px] xl:w-[356px] md:ml-[76px]"
        >
          {ITEMS.map((el) => (
            <div key={el.id + 10}>
              <div className="w-[36px] h-[36px] md:w-[54px] md:h-[54px] mx-auto slick-item cursor-pointer">
                <p className="numbers__title">{el.id}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* це слайдер із текстом  */}
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          {...settings}
          className="w-[280px] md:w-full xl:ml-[76px] xl:mt-[-55px] min-h-[350px]"
        >
          {ITEMS.map((el) => (
            <HowWeWorksItem item={el} key={el.id} />
          ))}
        </Slider>
      </div>
    );
  }
}
