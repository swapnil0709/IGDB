// BASE URL
const base_url = "https://api.rawg.io/api/";

// Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;

const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;

const new_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;

export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

export const newGamesUrl = () => `${base_url}${new_games}`;

// Fetch Game Details

export const gameDetailsUrl = (gameID) =>
  `${base_url}games/${gameID}?key=${process.env.REACT_APP_API_KEY}`;

export const gameScreenshotsUrl = (gameID) =>
  `${base_url}games/${gameID}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

// SEARCHED GAME

export const searchGameUrl = (gameName) =>
  `${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${gameName}&page_size=9`;
