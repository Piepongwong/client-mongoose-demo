import { useState } from "react";
import axios from "axios";

export default function Signup(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function signupUser(event) {
    event.preventDefault();
    debugger;
    axios
      .post(`${process.env.REACT_APP_BACKEND}/auth/signup`, user)
      .then((response) => {
        // success!
        debugger;
        props.history.push("/login");
      })
      .catch((err) => {
        // aaah
        debugger;
      });
  }

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={signupUser}>
        <input
          name="email"
          type="string"
          onChange={handleChange}
          placeholder="email"
          value={user.email}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="password"
          value={user.password}
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
}
