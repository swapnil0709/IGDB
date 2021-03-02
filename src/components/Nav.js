import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

export default function Nav() {
  return (
    <StyledNav>
      <StyledLogo>
        <img src={logo} alt="logo" />
        <h1>IGDB</h1>
      </StyledLogo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    height: 2.5rem;
    outline: none;
    width: 30%;
    font-size: 1.5rem;
    border: none;

    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    background: #1f1fa7;
    color: white;
    cursor: pointer;
  }
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
