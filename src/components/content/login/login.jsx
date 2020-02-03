import React from "react";
import s from "./login.module.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: " ",
      pass: " "
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    window.localStorage.setItem("login", this.state.login);
    window.localStorage.setItem("pass", this.state.pass);
  }

  render() {
    return (
      <div className={s.entry}>
        <form onSubmit={this.handleSubmit}>
          <p>
            Введите логин:
            <input
              name="login"
              type="text"
              onChange={this.handleInputChange}
              required
            />
          </p>
          <p>
            Введите пароль:
            <input
              name="pass"
              type="password"
              onChange={this.handleInputChange}
              required
            />
          </p>
          <button>Войти</button>
        </form>
      </div>
    );
  }
}

export default Login;
