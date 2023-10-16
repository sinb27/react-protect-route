import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../components/ProtectedRoutes";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dummyUserData = {
    username: "admin",
    password: "1234",
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      username === dummyUserData.username &&
      password === dummyUserData.password
    ) {
      console.log("Login successful");
      // console.log(useAuth.loggedIn);
      useAuth.loggedIn = true;
      navigate("/home");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <>
      <h1 className="login">Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
