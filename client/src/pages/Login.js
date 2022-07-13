import { useState } from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login( ) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      {showLogin ? (
        <>
          <LoginForm />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <button class="button" color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <button class="button" color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;
