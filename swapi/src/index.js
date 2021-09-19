import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Providers
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

//Fonts
import "./fonts/SF PRO DISPLAY/fonts.css";
import "./index.css";
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
   cache: new InMemoryCache({
      typePolicies: {
         Query: {
            fields: {
               allPeople: relayStylePagination(),
            },
         },
      },
   }),
});

//Rendering the app

ReactDOM.render(
   <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
         <App />
      </ChakraProvider>
   </ApolloProvider>,
   document.getElementById("root")
);
