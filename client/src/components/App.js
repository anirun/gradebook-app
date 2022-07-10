import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Notification from "./Notification";
import Signout from "./Signout";
import SignUpForm from "./SignUpForm.js";
import UserCard from "./UserCard";
import NewAssignment from "../pages/NewAssignment";
import AssignmentCard from "../pages/AssignmentCard";
import { UserContext } from "../context/user";

function App() {
  const {getCurrentUser} = useContext(UserContext)

  useEffect(() => {
    getCurrentUser()
  }, [])

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then(() => getCurrentUser());
  //     }
  //   });
  // }, []);

  // if (!user) return <Login />;

  return (
    <>
      <Router>
        {/* <Notification /> */}
        <NavBar />
        <main>
          <Switch>
            <Route path="/profile">
              <UserCard />
            </Route>
            <Route path="/assignments/:id">
              <AssignmentCard />
            </Route>
            <Route path="/newassignment">
              <NewAssignment />
            </Route>
            <Route path="/signup">
              <SignUpForm />
            </Route>
            <Route path="/signout">
              <Signout />
            </Route>
            <Route path="/">
              <UserCard />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
