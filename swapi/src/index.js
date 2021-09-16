import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./fonts/SF PRO DISPLAY/fonts.css";
const theme = extendTheme({
   fonts: {
      heading: "'SF Pro Display Regular'",
      button: "'SF Pro Display Regular'",
      body: "'SF Pro Display Regular'",
      mono: "'SF Pro Display Regular'",
      footer: "'SF Pro Display Regular'",
   },
});

ReactDOM.render(
   <Router>
      <ChakraProvider theme={theme}>
         <App />
      </ChakraProvider>
   </Router>,
   document.getElementById("root")
);
