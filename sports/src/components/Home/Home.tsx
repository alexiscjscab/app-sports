import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from '../../reducer/reducer';
import useAuth from "../../hooks/useAuthHooks";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserEmail } from "../../types/types";
import NavBarTop from "../NavBar/NavBarTop";
import NavBarBottom from "../NavBar/NavBarBottom";
import Match from "../Match/Match";
import { ButtonHome, HomeContainer, ImgHome } from "./HomeStyled";

const Home : React.FC = () => {
  const navigate = useNavigate();
  const user = useAuth()
  const { theme } = useSelector((state: State) => state);
    

  return (
    <HomeContainer colorTheme={theme}>
      <NavBarTop />
      {user.email === "" ? (
        <>
          <ImgHome>
            <h3>Welcome to Greenrun Sport</h3>
            <img
              src="https://media.tycsports.com/files/2020/12/06/160024/maradona-imagen.jpg"
              alt="Maradona"
            />
          </ImgHome>
          <ButtonHome onClick={() => navigate("/login")} colorTheme={theme}>
            Login
          </ButtonHome>
        </>
      ) : (
        <>
          <Match />
        </>
      )}
      <NavBarBottom />
    </HomeContainer>
  );
};

export default Home;
