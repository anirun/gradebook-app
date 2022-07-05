import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink, useHistory } from "react-router-dom";
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
  let history = useHistory();
  
  function handleProfile() {
    history.push('/profile')
  }

  // function handleNew() {
  //   history.push('/newassignment')
  // }


  // function handleLogoutClick() {
  //   history.push('/signout');
  // }

  return (
    
    <div class="container">
      <Wrapper>
        <div class="block" onClick={handleProfile}>
          <Logo>
            <NavLink to="/">GradeBook✔️</NavLink>
          </Logo>
        </div>
      </Wrapper>
      <Wrapper>
        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
    
    {user ? (
                <>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
                        style={style}
                        to="/newassignment"
                    >New Assignment</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
                        style={style}
                        to="/profile"
                    >Profile</NavLink>
                    <NavLink
                    activeStyle={{
                        fontWeight: "bolder",
                        color: "red"
                    }}
                        exact
                        style={style}
                        to="/signout"
                    >Sign Out</NavLink>
                </>
                ) : (
                    <>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "red"
                        }}
                            exact
                            style={style}
                            to="/signin"
                        >Sign In</NavLink>
                        <NavLink
                        activeStyle={{
                            fontWeight: "bolder",
                            color: "red"
                        }}
                            exact
                            style={style}
                            to="/signup"
                        >Sign Up</NavLink>
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
