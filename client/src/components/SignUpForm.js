import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'
import { Error, FormField, Label } from "../styles";
import Wrapper from "../styles/Wrapper";
import { UserContext } from "../context/user"

function SignUpForm() {
  const { setUser } = useContext(UserContext)
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        role: parseInt(role),
      })
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          history.push('/profile')
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <div class="block">
        <form class="box" onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Your Name</Label>
            <input class="input is-rounded"
              type="text"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password Confirmation</Label>
            <input class="input is-rounded"
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
            />
          </FormField>
          <FormField>
            <Label htmlFor="imageUrl">Profile Image</Label>
            <input class="input is-rounded"
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormField>
          <FormField>
            <div class="control" value={role} onChange={(e) => setRole(parseInt(e.target.value))}>
              <label class="radio">
                <input type="radio" name="answer" value="0"/>
                Teacher
              </label>
              <label class="radio">
                <input type="radio" name="answer" value="1"/>
                Student
              </label>
            </div>
          </FormField>
          <FormField>
            <button class="button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </div>
    </Wrapper>
  );
}

export default SignUpForm;
