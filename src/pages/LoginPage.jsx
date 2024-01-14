import Page from "../components/Page";
import Box from "../components/Box";
import Logo from "../components/Logo";
import Button from "../components/Button";
import InstagramAnimation from "../components/InstagramAnimation";
import Input from "../components/Input";
import SignUpText from "../components/SignUpText";

function LoginPage() {

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
            />

            <Input
              type="password"
              placeholder="Password"
            />
            <Button>
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
