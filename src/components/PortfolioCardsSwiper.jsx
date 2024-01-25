import items from "../data/portfolio.json";
import PortfolioCard from "../components/portfolioCard";
import React, { Component } from "react";
import Slider from "react-slick";
import { basicStylesSwiperButton } from "../helpers/stylesHelpers";
import { Right, Left } from "../icons/iconComponent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`-top-[58px] right-[173px] ${basicStylesSwiperButton}`}
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
      className={`-top-[58px] right-[5px] ${basicStylesSwiperButton}`}
      style={{ ...style, display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Right />
    </div>
  );
}

class NavigationComponent extends React.Component {
  render() {
    const { currentSlide, slideCount, goTo, next, previous } = this.props;

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {Array.from({ length: slideCount }).map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: i === currentSlide ? "blue" : "#ddd",
                margin: "0 5px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default class PortfolioCardsSwiper extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid",
          }}
        >
          {i + 1}
        </div>
      ),
    };
    return (
      <Slider {...settings}>
        {items.map((el) => (
          <PortfolioCard element={el} key={el.id} />
        ))}
      </Slider>
    );
  }
}
