import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Frontend Developer"}
            disc={`Design and develop user interfaces using HTML, CSS, and JavaScript. Ensure responsive and visually appealing web experiences, collaborating with designers and backend developers to create seamless and optimized websites.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Backend Developer"}
            disc={`Building and constructing the server-side components of web applications with Node.js and developing APIs, managing databases, and ensuring efficient data processing and security. Involves facilitating seamless communication between the front-end and server.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Web Designer"}
            disc={`Creating visually appealing and user-friendly websites. Combines artistic skills with technical expertise to deliver engaging online experiences. Passionate about designing interfaces that seamlessly blend aesthetics and functionality.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
