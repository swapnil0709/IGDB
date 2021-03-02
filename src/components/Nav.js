import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
export default function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();

    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <StyledLogo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>IGDB</h1>
      </StyledLogo>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
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
