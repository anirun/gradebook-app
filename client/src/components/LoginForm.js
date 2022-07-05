import React, { useState, useContext } from "react";
import { FormField, Label } from "../styles";
import Notification from "./Notification";
import { UserContext } from "../context/user";
import { MessageContext } from "../context/message";

function LoginForm( ) {
  const { user, setUser } = useContext(UserContext)
  const { message, setMessage } = useContext(MessageContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((r) => setUser(r));
      } else {
        r.json().then((err) => setMessage(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <input class="input is-rounded"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <input class="input is-rounded"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <button class="button" variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </FormField>
      <FormField>
        {message ? <Notification>{message}</Notification> : null }
      </FormField>
    </form>
  );
}

export default LoginForm;
