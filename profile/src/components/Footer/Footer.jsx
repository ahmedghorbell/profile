import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Portfolio</h1>
        </Slide>
        <div className="info">
          <div className="group">
            <Slide direction="left">
              <h1>Address:</h1>
            </Slide>
            <Slide direction="left">
              <p>Tunis, Tunisia</p>
            </Slide>
          </div>
          <div className="group">
            <Slide direction="left">
              <h1>Contact me directly:</h1>
            </Slide>
            <div>
              <span>
                <FiPhoneCall />
              </span>
              <Slide direction="left">
                <a href="tel:+21694400660">+216 94 400 660</a>
              </Slide>
            </div>
            <div>
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen />
                </span>
              </Slide>
              <Slide>
                <a href="mailto:ahmedghorbelc@gmail.com">
                  ahmedghorbelc@gmail.com
                </a>
              </Slide>
            </div>
          </div>
          <div className="group">
            <Slide direction="left">
              <h1>Check my profiles</h1>
            </Slide>
            <div className="icons">
              <Zoom>
                <span>
                  <a href="https://github.com/ahmedghorbell">
                    <AiFillGithub />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="https://www.linkedin.com/in/ahmedghorbell/">
                    <AiFillLinkedin />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="https://twitter.com/AhmedGhorbel15">
                    <BsTwitter />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="https://www.instagram.com/ahmedghorbell/">
                    <BsInstagram />
                  </a>
                </span>
              </Zoom>
            </div>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: #234e70;
  padding: 2rem 0;
  color: #fff;
  text-align: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1.2rem;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem; /* Add spacing between groups */

    .group {
      text-align: center;
      flex: 1;
      max-width: 300px; /* Adjust as needed */

      h1 {
        font-size: 1.2rem;
      }

      p {
        width: 100%;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fbf8be;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        :hover {
          background-color: #234e70;
          color: #fbf8be;
        }
        a {
          margin-top: 0.2rem;
          color: #234e70;
          :hover {
            color: #fbf8be;
          }
        }
      }
    }
  }
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #fbf8be;
  color: #234e70;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
