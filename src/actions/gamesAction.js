import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

// ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  // Fetch axios
  const popularGamesData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());

  const upcomingGamesData = await axios.get(upcomingGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(gameName));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
