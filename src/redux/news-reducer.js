let SETNEWS = "SETNEWS";
let SHOW = "SHOW";
let HIDE = "HIDE";

let initinalState = {
  news: [{ showed: true }]
};

const newsReducer = (state = initinalState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        news: state.news.map(n => {
          if (n.id === action.userId) {
            return { ...n, showed: true };
          }

          return n;
        })
      };

    case HIDE:
      return {
        ...state,
        news: state.news.map(n => {
          if (n.id === action.userId) {
            return { ...n, showed: false };
          }

          return n;
        })
      };

    case SETNEWS:
      return { ...state, news: [...action.news]};
    default:
      return state;
  }
};

export const showAC = userId => ({ type: SHOW, userId });
export const hideAC = userId => ({ type: HIDE, userId });

export const setNewsAC = news => ({ type: SETNEWS, news });

export default newsReducer;
