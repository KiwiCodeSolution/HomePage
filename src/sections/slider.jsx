import React, { Component } from "react";
import Slider from "react-slick";
import { Translation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Right, Left } from "../icons/iconComponent";
import { basicStyles } from "../helpers/stylesHelpers";

const ITEMS = [
  {
    id: "1",
    photo: "/img/how-works-1.png",
  },
  {
    id: "2",
    photo: "/img/how-works-2.png",
  },
  {
    id: "3",
    photo: "/img/how-works-3.png",
  },
  {
    id: "4",
    photo: "/img/how-works-4.png",
  },
  {
    id: "5",
    photo: "/img/how-works-5.png",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`-left-[78px] ${basicStyles}`}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Left />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`left-[380px] ${basicStyles}`}
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
      <div className="relative  h-[471px]">
        {/* це слайдер із номерами  */}
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          // autoplay={true}
          infinite={true}
          className="w-[356px] ml-[76px] mb-5 absolute top-0"
        >
          {ITEMS.map((el) => (
            <div key={el.id + 10}>
              <div className="w-[54px] h-[54px] mx-auto slick-item cursor-pointer">
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
          className="w-full ml-[76px]"
        >
          {ITEMS.map((el) => (
            <div key={el.id} className="relative overflow-visible">
              <Translation>
                {(t) => <h1 className="numbers__title text-[32px] mb-2 w-[356px]">{t(`how.${el.id - 1}.title`)}</h1>}
              </Translation>

              <Translation>
                {(t) => (
                  <p className="text-base text-white opacity-80 leading-relaxed w-[356px]">
                    {t(`how.${el.id - 1}.text`)}
                  </p>
                )}
              </Translation>
              <div className="w-[605px] h-[471px] absolute -top-[20px] left-[20px]">
                <img src={el.photo} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
