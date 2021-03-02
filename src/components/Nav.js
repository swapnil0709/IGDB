import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/Vector.svg";
import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../animation";
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
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>
          <span className="first">I</span>GD<span className="last">B</span>
        </h1>
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
    background: #0c659c;
    background: -webkit-linear-gradient(to right, #ec2f4b, #009fff);
    background: linear-gradient(to right, #cc253e, #0b82cc);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    &:hover {
      background: #009fff;
      background: -webkit-linear-gradient(to left, #ec2f4b, #009fff);
      background: linear-gradient(to left, #a01b2f, #0c659c);
    }
  }
  .first {
    color: #bd2d14;
  }
  .last {
    color: #116091;
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
