import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import { UserProvider } from "./context/user.js";
import { MessageProvider } from "./context/message.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
`;

ReactDOM.render(
  <MessageProvider>
    <UserProvider>
      <GlobalStyle />    
      <App />
    </UserProvider>
  </MessageProvider>,
  document.getElementById("root")
);
