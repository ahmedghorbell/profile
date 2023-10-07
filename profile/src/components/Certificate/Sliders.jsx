import React, { useRef } from "react";
import Slider from "react-slick";
import Certificate from "./Certificate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1696707591/google_project_manager_zhh81g.png",
    disc: "Google Project Management",
    live: "https://coursera.org/verify/professional-cert/5ZW5QPGG62U8",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1696707601/html_css_zdngwr.png",
    disc: "HTML, CSS, and JavaScript for Web Developers",
    live: "coursera.org/verify/MFDXRXDMHQT6",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1696707608/js_ehky25.png",
    disc: "JavaScript for Beginners.",
    live: "https://coursera.org/verify/specialization/GSJCS4TYLBG7",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1696707615/meta_kea3g4.png",
    disc: "Meta Front-End Developer.",
    live: "https://coursera.org/verify/professional-cert/756L395UXE5N",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1696707619/sdfdf_rpo3r4.png",
    disc: "The Full-Stack Javascript Bootcamp. GOMYCODE",
    live: "https://diploma.gomycode.app/?id=31683936045322515",
  },
  {
    img: "https://res.cloudinary.com/dzw5kfcko/image/upload/v1696707943/Screenshot_2023-10-07_204538_u0cjp1.png",
    disc: "Angular 16 from Zero to Hero .",
    live: "https://www.udemy.com/certificate/UC-5743a903-2ce5-41f5-95b9-522a742366dc/",
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
  sliderProject = data.map((item, i) => <Certificate item={item} key={i} />);
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
