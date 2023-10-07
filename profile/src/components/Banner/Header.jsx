import React, { useState } from "react";
import styled from "styled-components";
import { GiFlamer } from "react-icons/gi";

const Header = () => {
  const [bar, setBar] = useState(false);

  const toggleBar = () => {
    setBar(!bar);
  };

  return (
    <Container bar={bar}>
      <Logo>
        <span className="green">
          <GiFlamer />
        </span>
        <h1>AG.</h1>
      </Logo>
      <Nav bar={bar}>
        {navLinks.map((link, index) => (
          <NavItem key={index}>
            <a href={link.href}>{link.text}</a>
          </NavItem>
        ))}
      </Nav>
      <Bars onClick={toggleBar}>
        <div className="bar"></div>
      </Bars>
    </Container>
  );
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#service", text: "Services" },
  { href: "#project", text: "Projects" },
  { href: "#client", text: "Skills" },
  { href: "#footer", text: "Portfolio" },
];

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
  animation: header 500ms ease-in-out;
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 2.5rem;
  }

  h1 {
    font-weight: 800;
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #00203FFF;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
`;

const NavItem = styled.span`
  margin-left: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    position: relative;

    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #fff;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }

    :hover:before {
      transform: scale(1);
      transform-origin: left;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;

const Bars = styled.div`
  display: none;

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    z-index: 100;

    .bar {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
      transition: all 400ms ease-in-out;

      :before,
      :after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
      }

      :before {
        transform: ${(props) =>
          props.bar ? "rotate(45deg)" : "translateY(10px)"};
        transition: all 400ms ease-in-out;
      }

      :after {
        transform: ${(props) =>
          props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
        transition: all 400ms ease-in-out;
      }
    }
  }
`;
