import React, { useState, useContext } from "react";
import { FormField, Label } from "../styles";
import Notification from "./Notification";
import { UserContext } from "../context/user";
import { MessageContext } from "../context/message";
import { GoogleLogin } from 'react-google-login';

function LoginForm( ) {
  const { setUser } = useContext(UserContext)
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
        r.json().then((err) => {
          setMessage({message: err.errors, color: "red"})
          });
      }
    });
  }

  const handleGoogle = (response) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            // 'Authorization': `Bearer ${response.Zi.accessToken}`,
            'Content-Type': 'application/json',
            // 'access_token': `${response.Zi.accessToken}`
        },
        body: JSON.stringify(response)
    }
    fetch(`/api/auth/google_oauth2/callback`, requestOptions)
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          setUser({...data.data.attributes, posts: data.data.relationships.posts.data})
          setMessage({message: "User successfully logged in", color: "green"})
        })
      }
      else {
        res.json().then(data => {
          setMessage({message: data.error, color: "red"})
        })
      }
    })
    .catch(err => setMessage({message: err.message, color: "red"}))
  }

  return (
    <>
    <form class="box">
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
        <button class="button is-rounded" variant="fill" color="primary" onClick={handleSubmit}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        &nbsp; &nbsp;
        <GoogleLogin 
          height="10" 
          width="500px" 
          backgroundColor="#4285f4" 
          clientId="102908233667-hl1lgqh6n1vij1lkdjpttbf6hp0qbvba.apps.googleusercontent.com" 
          access="offline" 
          scope="email profile" 
          onClick={handleGoogle} />
      </FormField>
      <FormField>
        {message ? <Notification>{message}</Notification> : null }
      </FormField>
    </form>
</>
  );
}




export default LoginForm;
