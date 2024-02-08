import { Quotes, TestimonialsCircleS, TestimonialsCircleM, TestimonialsCircleL } from "../icons/iconComponent";
import React, { Component } from "react";
import Slider from "react-slick";
import { basicStylesSwiperButton } from "../helpers/stylesHelpers";
import { Right, Left } from "../icons/iconComponent";

import review from "../data/reviews.json";
import ResponseCard from "./responseCard";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`top-[320px] right-0 ${basicStylesSwiperButton}`}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Right />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`top-[320px] left-0 ${basicStylesSwiperButton}`}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Left />
    </div>
  );
}

export default class TestimonialsSwiper extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="w-[280px] md:w-[432px] min-h-[430px] xl:h-full mt-5 md:mt-8 xl:mt-[157px] py-11 px-4 md:px-[70px] rounded-[8px] border-[1px] border-bg-green border-opacity-[.2] bg-bg-grey mx-auto z-10 relative">
        <Quotes className={"absolute top-10 left-10"} />
        <TestimonialsCircleS className={"absolute top-[148px] left-3"} />
        <TestimonialsCircleM className={"absolute -top-5 -right-4"} />
        <TestimonialsCircleL className={"absolute -bottom-3 -right-2"} />
        <Slider ref={this.sliderRef} {...settings} className="z-0">
          {review.map((el) => (
            <ResponseCard element={el} key={el.id} />
          ))}
        </Slider>
      </div>
    );
  }
}
