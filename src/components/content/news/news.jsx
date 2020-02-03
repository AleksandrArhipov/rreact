import React from "react";
import s from "./news.module.css";
import axios from "axios";

const News = props => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(response => {
      props.setNews(response.data);
    });

  return (
    <div>
      {props.news.map(n => (
        <div key={n.id}>
          <h2>{n.title}</h2>
          <div>
            {n.showed ? (
              <div>
                <button onClick={()=> props.hide(n.id)}>Hide</button> <p>{n.body}</p>
              </div>
            ) : (
              <div><button onClick={()=> props.show(n.id)}>Show</button></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
