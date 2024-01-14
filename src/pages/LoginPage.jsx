import Page from "../components/Page";
import Box from "../components/Box";
import Logo from "../components/Logo";
import Button from "../components/Button";
import InstagramAnimation from "../components/InstagramAnimation";
import Input from "../components/Input";
import SignUpText from "../components/SignUpText";
import USERS from "./../data/user.json"

import { useState } from "react";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = () => {
    const findUser = USERS.find(function(user) {
        return user.username === username && user.password === password;
    })

    if(findUser) {
        props.setCurrentUser(findUser)
    } else {
        setErrorMessage("Invalid username or password")
    }
  }

  return (
    <Page center>
      <InstagramAnimation />
      <div>
        <Box>
          <Logo width="200px" />
          <div className="login-form">
            <Input
              type="text"
              placeholder="Phone number, username, or email"
              value={username}
              onChange={function (e) {
                setUsername(e.target.value);
              }}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={function (e) {
                setPassword(e.target.value);
              }}
            />
            {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
            <Button disabled={username.length < 5 || password.length < 5} onClick={onSubmit}>
              Log in
            </Button>
          </div>
          <p className="forgot-password">Forgot password?</p>
        </Box>
        <Box>
          <SignUpText />
        </Box>
      </div>
    </Page>
  );
}

export default LoginPage;
