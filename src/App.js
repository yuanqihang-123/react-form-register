import React from "react";
import "./styles.css";
import { ERRORS } from "./constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsername: false,
      showPassword: false
    };
  }

  checkUsername(event) {
    if (!ERRORS.username.regex.test(event.target.value)) {
      this.setState({
        showUsername: true
      });
    } else {
      this.setState({
        showUsername: false
      });
    }
  }

  checkPassword(event) {
    if (!ERRORS.password.regex.test(event.target.value)) {
      this.setState({
        showPassword: true
      });
    } else {
      this.setState({
        showPassword: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <img
            src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
            width="100px"
          />
        </div>
        <form action="http://www.baidu.com">
          <label htmlFor="username">
            <span className="label-star">*</span> Username:
            <input
              id="username"
              name="username"
              placeholder="6~10 characters"
              type="text"
              onChange={(event) => this.checkUsername(event)}
            />
            {this.state.showUsername && (
              <span className="label-star">{ERRORS.username.message}</span>
            )}
          </label>
          <label htmlFor="password">
            <span className="label-star">*</span> Password:
            <input
              id="password"
              name="password"
              placeholder="6~10 numbers"
              type="password"
              onChange={(event) => this.checkPassword(event)}
            />
            {this.state.showPassword && (
              <span className="label-star">{ERRORS.password.message}</span>
            )}
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
