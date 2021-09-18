import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

//Providers
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Fonts
import "./fonts/SF PRO DISPLAY/fonts.css";

//Theme
const theme = extendTheme({
   fonts: {
      heading: "'SF Pro Display Regular'",
      button: "'SF Pro Display Regular'",
      body: "'SF Pro Display Regular'",
      mono: "'SF Pro Display Regular'",
      footer: "'SF Pro Display Regular'",
   },
});

//Apollo Client
const client = new ApolloClient({
   uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
   cache: new InMemoryCache(),
});

//Rendering the app

ReactDOM.render(
   <ApolloProvider client={client}>
      <Router>
         <ChakraProvider theme={theme}>
            <App />
         </ChakraProvider>
      </Router>
   </ApolloProvider>,
   document.getElementById("root")
);
