import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import SkillsSlider from "./SkillsSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

let clients = [
  {
    name: "JavaScript",
    img_url:"https://blog.lesjeudis.com/wp-content/uploads/2020/12/Screenshot-2020-12-02-at-15.31.17-1.png",
  },
  {
    name: "HTML",
    img_url:"https://blog.kakaocdn.net/dn/b3mVBB/btrqCTHsPxP/8KSZgET3kqrYg8Z68UsdX0/img.png",
  },
  {
    name: "CSS",
    img_url:"https://img.freepik.com/icones-gratuites/css_318-698167.jpg",
  },
  {
    name: "React js",
    img_url:"https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    name: "Node js",
    img_url:"https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/07/NodeJS.jpg"
  },
  {
    name: "Express Js",
    img_url: "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
  },
  {
    name: "Mongo DB",
    img_url:"https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif"
  },
  {
    name: "Mterial UI",
    img_url:"https://mui.com/static/logo.png"
  },
  {
    name: "React Bootstrap",
    img_url: "https://pbs.twimg.com/profile_images/610586699798835201/OuezNT-e_400x400.png"
  }
];
var settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <SkillsSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <h1>Skills</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
