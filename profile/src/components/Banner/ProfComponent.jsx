import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'm</span>
          </h4>
          <h1 className="green">Ahmed Ghorbel</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Hello and thank you for visiting my online portfolio! I'm a skilled
            web developer who specializes in using JavaScript to build dynamic
            websites and web applications. I am a Full Stack developer, thus I
            am quite knowledgeable about both the front-end and back-end of web
            development. I feel familiar with using a variety of frameworks and
            technologies, including React.js, Node.js, Vue.js, MongoDB, and
            more. I take great satisfaction in my strong problem-solving skills
            and attention to detail in addition to my technical ability. My
            passion is to create clear and effective code that provides a
            wonderful user experience. Both Agile and Waterfall contexts are
            comfortable for me to work with, and I'm always looking for
            technologies for improving my development process.
          </p>
<<<<<<< HEAD
          <a href="https://www.canva.com/design/DAFliP655xw/qXKkS4muxI2d815mOg9XTA/edit?utm_content=DAFliP655xw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download="AhmedGhorbelResume.pdf">
            <button>My Resume</button>
          </a>
=======
          <a href="https://www.canva.com/design/DAFliP655xw/qXKkS4muxI2d815mOg9XTA/edit?utm_content=DAFliP655xw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><button>My Resume</button></a>
>>>>>>> 27c6ebc8a3eb9d2e0279911ff7f89c5bd757259c
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://www.instagram.com/ahmedghorbell/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/ahmedghorbell">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/ahmedghorbell/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/dzw5kfcko/image/upload/v1685978538/332514093_955860929111087_4594210894375023795_n-fotor-bg-remover-2023060513838_lczqha.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #FBF8BE;
    border: none;
    color: #234E70;
    font-weight: 500;
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #FBF8BE;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #234E70;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 5px 5px #FBF8BE);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
