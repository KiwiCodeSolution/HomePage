import items from "../data/portfolio.json";
import PortfolioCard from "../components/portfolioCard";
import React, { Component } from "react";
import Slider from "react-slick";
import { basicStylesSwiperButton } from "../helpers/stylesHelpers";
import { Right, Left } from "../icons/iconComponent";

function SampleNextArrow(props) {
  const { style, onClick } = props;
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

function SamplePrevArrow(props) {
  const { style, onClick } = props;
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

export default class PortfolioCardsSwiper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.sliderRef = React.createRef(); // Створіть посилання на компонент слайдера
  }

  setModalState = (state) => {
    this.setState({ isModalOpen: state });
  };

  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div>
        <Slider ref={this.sliderRef} {...settings} className="z-0" swipe={!this.state.isModalOpen}>
          {items.map((el) => (
            <PortfolioCard
              element={el}
              key={el.id}
              onOpenModal={() => this.setModalState(true)}
              onCloseModal={() => this.setModalState(false)}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
