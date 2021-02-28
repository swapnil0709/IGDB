const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

// ACTION is an object that Describes what
//is going to happen
// {
//   type: "FETCH_GAMES";
// }

// ACTION CREATOR is a func that returns an action.
// const fetchGames = () => {
//   return {
//     type: "FETCH_GAMES",
//   };
// };

// DISPATCH is going to send the action to the reducer

// dispatch({ type: "FETCH_GAMES" });

export default gameReducer;
