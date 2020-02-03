import React from "react";
import { connect } from "react-redux";
import News from "./news";
import { setNewsAC, showAC, hideAC } from "../../../redux/news-reducer";

let mapStateToProps = state => {
  return { news: state.newsPages.news};
};

let mapDispatchToProps = dispatch => {
  return {
    setNews: news => {
      dispatch(setNewsAC(news));
    },
    show: (userId) => {
      dispatch(showAC(userId));
    },
    hide: (userId) => {
      dispatch(hideAC(userId));
    }
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
