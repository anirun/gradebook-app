import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

function NavBar({ user, setUser }) {
  let history = useHistory()
  
  function handleProfile() {
    history.push('/profile')
  }

  function handleNew() {
    history.push('/newassignment')
  }


  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
console.log(user.role)
  return (
    
    <div class="container">
      <Wrapper>
        <div class="block" onClick={handleProfile}>
          <Logo>
            <Link to="/">GradeBook✔️</Link>
          </Logo>
        </div>
      </Wrapper>
      <Wrapper>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <button class="button" onClick={handleProfile}>
            Profile
          </button>
          &nbsp;&nbsp;
          { (user.role === "teacher") ? <button class="button" onClick={handleNew}>
            New Assignment
          </button> : null}
          &nbsp;&nbsp;
          <button class="button" variant="outline" onClick={handleLogoutClick}>
            Logout
          </button>
        </nav>
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

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
