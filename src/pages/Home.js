import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";
const Home = () => {
  // Get current location
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {path && <GameDetail pathId={path} />}
        </AnimatePresence>

        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <StyledGames>
              {searched.map((eachGame) => (
                <Game
                  name={eachGame.name}
                  released={eachGame.released}
                  id={eachGame.id}
                  key={eachGame.id}
                  image={eachGame.background_image}
                />
              ))}
            </StyledGames>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upcoming.map((eachGame) => (
            <Game
              name={eachGame.name}
              released={eachGame.released}
              id={eachGame.id}
              key={eachGame.id}
              image={eachGame.background_image}
            />
          ))}
        </StyledGames>
        <h2>Popular Games</h2>
        <StyledGames>
          {popular.map((eachGame) => (
            <Game
              name={eachGame.name}
              released={eachGame.released}
              id={eachGame.id}
              key={eachGame.id}
              image={eachGame.background_image}
            />
          ))}
        </StyledGames>
        <h2>New Games</h2>
        <StyledGames>
          {newGames.map((eachGame) => (
            <Game
              name={eachGame.name}
              released={eachGame.released}
              id={eachGame.id}
              key={eachGame.id}
              image={eachGame.background_image}
            />
          ))}
        </StyledGames>
      </AnimateSharedLayout>
    </StyledGameList>
  );
};
const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }

  @media screen and (max-width: 540px) {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h2 {
    padding: 1rem;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media screen and (max-width: 540px) {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr));

    grid-row-gap: 1rem;
  }
`;

export default Home;
