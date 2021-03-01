import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import { motion } from "framer-motion";
import styled from "styled-components";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Get current location
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      {path && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((eachGame) => (
          <Game
            name={eachGame.name}
            released={eachGame.released}
            id={eachGame.id}
            key={eachGame.id}
            image={eachGame.background_image}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((eachGame) => (
          <Game
            name={eachGame.name}
            released={eachGame.released}
            id={eachGame.id}
            key={eachGame.id}
            image={eachGame.background_image}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((eachGame) => (
          <Game
            name={eachGame.name}
            released={eachGame.released}
            id={eachGame.id}
            key={eachGame.id}
            image={eachGame.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
