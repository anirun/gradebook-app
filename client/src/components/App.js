import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signout from "./Signout";
import Login from "../pages/Login";
import SignUpForm from "./SignUpForm.js";
import UserCard from "./UserCard";
import NewAssignment from "../pages/NewAssignment";
import AssignmentCard from "../pages/AssignmentCard";
import UserAppointments from "../pages/UserAppointments";
import NewAppointmentForm from "../pages/NewAppointmentForm";
import EditAppointmentForm from "../pages/EditAppointmentForm";
import AppointmentCard from "./AppointmentCard";
import Home from "../pages/Home";
import { UserContext } from "../context/user";

function App() {
  const {getCurrentUser} = useContext(UserContext)

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route path="/profile">
              <UserCard />
            </Route>
            <Route path="/newappointment">
              <NewAppointmentForm />
            </Route>
            <Route path="/editappointment">
              <EditAppointmentForm />
            </Route>
            <Route path="/appointments/:id">
              <AppointmentCard />
            </Route>
            <Route path="/appointments">
              <UserAppointments />
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
