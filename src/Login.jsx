import { useState, useContext } from "react";
import { userContext } from "./contexts/User";
import axios from "axios";

export default function Login() {
  const { setUser: setUserContext } = useContext(userContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function loginUser(event) {

    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", user)
      .then((response) => {
        setUserContext(user);
        localStorage.setItem("token", response.data.token);
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
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
}
