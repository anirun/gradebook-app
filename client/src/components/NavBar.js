import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "black",
  backgroundColor: "rgb(2555, 120, 44)",
  fontWeight: "bold",
  verticalAlign: "center"
}

const NavBar = () => {
  const {user} = useContext(UserContext)

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
                    <NavLink to="/newassignment">
                      <button class="button is-rounded">New Assignment</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to="/profile">
                      <button class="button is-rounded">Profile</button>
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink to="/signout">
                    <button class="button is-rounded">Sign Out</button>
                    </NavLink>
                </>
                ) : (
                    <>
                        &nbsp; &nbsp;
                        <NavLink to="/signin">
                          <button class="button is-rounded">Sign In</button>
                        </NavLink>
                        &nbsp; &nbsp;
                        <NavLink to="/signup">
                          <button class="button is-rounded">Sign Up</button>
                        </NavLink>
                    </>
                )}
        
        {/* <nav class="navbar" role="navigation" aria-label="main navigation">
          <button class="button" onClick={handleProfile}>
            Profile
          </button>
          &nbsp;&nbsp;
          { (user.role === "teacher") ? <button class="button" onClick={handleNew}>
            New Assignment
          </button> : null }
          &nbsp;&nbsp;
          <button class="button" variant="outline" onClick={handleLogoutClick}>
            Logout
          </button>
        </nav> */}
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
