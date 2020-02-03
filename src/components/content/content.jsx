import React from "react";
import { Route } from "react-router-dom";
import Main from "../content/main/main";
import Profile from "../content/profile/profile";
import Login from "../content/login/login";
import s from "./content.module.css";
import DialogsContainer from "./dialogs/dialogs-container";
import NewsContainer from "./news/news-container";

const Content = props => {
  return (
    <div className="app-wraper-content">
      <div className={s.wrap}>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/news" render={() => <NewsContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default Content;
