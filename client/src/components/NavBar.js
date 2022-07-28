import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const {user} = useContext(UserContext)
  console.log('user fetched by NavBar', user)
  return (
    
    <div class="container">
      <Wrapper>
        <Logo>
          <NavLink to="/">GradeBook✔️</NavLink>
        </Logo>
      </Wrapper>
      <Wrapper>
        <NavLink to="/">
          <button class="button is-rounded">Home</button>
        </NavLink>
    {user ? (
                <>
                    &nbsp; &nbsp;
                    <NavLink to="/profile">
                      <button class="button is-rounded">Profile</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to="/user/appointments">
                      <button class="button is-rounded">Appointments</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to="/signout">
                    <button class="button is-rounded">Sign Out</button>
                    </NavLink>
                </>
                ) : (
                    <>
                        &nbsp; &nbsp;
                        <NavLink to="/login">
                          <button class="button is-rounded">Sign In</button>
                        </NavLink>
                        &nbsp; &nbsp;
                        <NavLink to="/signup">
                          <button class="button is-rounded">Sign Up</button>
                        </NavLink>
                    </>
                )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Codystar";
  font-size: 3rem;
  color: darkblue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default NavBar;
