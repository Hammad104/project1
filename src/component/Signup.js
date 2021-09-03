import React from "react";
import Style from "./Signupform.module.css";

class Signup extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className={Style.fm}>
        <h2 className={Style.heading}> Sign Up Your Account </h2>
        <table className={Style.fm1}>
          <tr>
            <td>
              <label for="name">First name:</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.fname}
                name="fname"
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <br />

          <tr>
            <td>
              <label for="lname">Last name:</label>
            </td>

            <td>
              <input
                type="text"
                value={this.state.lname}
                name="lname"
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <br />

          <tr>
            <td>
              <label for="email">Email:</label>
            </td>

            <td>
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <br />

          <tr>
            <td>
              <label for="password">Password:</label>
            </td>
            <td>
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <br />

          <input type="submit" value="Sign Up" className={Style.btn} />
        </table>
      </div>
    );
  }
}
export default Signup;
