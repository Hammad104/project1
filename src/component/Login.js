import React from "react";
import Style from "./Login.module.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={Style.fm}>
      <h2 className={Style.heading}>Login</h2>

      <table>
        <tr>
          <td>
            <label htmlFor="email"> Email : </label>
          </td>

          <td>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
        </tr>
        <br />

        <tr>
          <td>
            <label htmlFor="password"> Password :</label>
          </td>

          <td>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <br />

        <button type="submit" className={Style.btn}>
          Login{" "}
        </button>
      </table>
    </div>
  );
}

export default Login;
