import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Content from "./components/content/content";

const App = props => {
  return (
    <div className="app-wraper">
      <Header />
      <Content />
    </div>
  );
};

export default App;
