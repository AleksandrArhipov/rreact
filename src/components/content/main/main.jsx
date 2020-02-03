import React from "react";
import s from "./main.module.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      value: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          value: result
        });
      });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        {value.map(value => (
          <div>
            <h2>{value.name}</h2>
            <p>{value.body}</p>
            <span>{value.email}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
