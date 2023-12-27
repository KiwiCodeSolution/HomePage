import React, { Component } from "react";
import Slider from "react-slick";
import { Translation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../components/UI/buttons";

import { Right, Left } from "../icons/iconComponent";

const DOTS = [1, 2, 3, 4, 5];
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
  const { onClick } = props;
  return (
    <Button btnStyle={"roundBtn"} btnClass={"absolute -top-[53px] left-0"} onClick={onClick}>
      <Left />
    </Button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Button btnStyle={"roundBtn"} btnClass={"absolute -top-[53px] left-[434px]"} onClick={onClick}>
      <Right />
    </Button>
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
        <div className="w-[356px] ml-[76px]">
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            autoplay={true}
            infinite={true}
          >
            {DOTS.map((el) => (
              <div className="mx-auto">
                <div className="w-[54px] h-[54px] slick-item cursor-pointer" key={el}>
                  <p className="numbers__title">{el}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Slider asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)} {...settings}>
          {ITEMS.map((el) => (
            <div key={el.id}>
              <Translation className="">{(t) => <h1>{t(`how.${el.id - 1}.title`)}</h1>}</Translation>
              <h3>{el.id}</h3>

              <Translation>{(t) => <p>{t(`how.${el.id - 1}.text`)}</p>}</Translation>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
