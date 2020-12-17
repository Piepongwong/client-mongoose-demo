import { useState, useContext } from "react";
import { userContext } from "./contexts/User";
import axios from "axios";

export default function Login() {
  const { setUser } = useContext(userContext);
  
  const [user, setUserForm] = useState({
    email: "",
    password: "",
  });

  function loginUser(event) {

    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND}/auth/login`, user)
      .then((response) => {
        debugger
        setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        // aaah
        debugger;
      });
  }

  function handleChange(event) {
    setUserForm({
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
