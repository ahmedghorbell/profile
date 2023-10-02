import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685980090/e-drive_eepwex.png",
    disc: "E-DRIVE is an online store where electric and hybrid vehicles may be purchased. this is my final project in GOMYCODE",
    live: "https://edrive.netlify.app/",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685980092/portfolio_exumel.png",
    disc: "This is my portfolio with dark and light mode using JS, HTML, and CSS",
    live: "https://ahmedghorbell.github.io/portfolio/",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685980107/movie_one_kzlnq7.png",
    disc: "The movies may be filtered by names, stars, and descriptions and when click on the movie card you can see the deails by id on Movie One, a dynamic website built with ReactJS, ReactBootstrap, HTML, and CSS.",
    live: "https://moviesone.netlify.app/",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1685980435/price_plan_msclm4.png",
    disc: "Price plan is a static website created with react js, html, and css that displays a price plan for a gym.",
    live: "https://priceplans.netlify.app/",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    color: #fff;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
