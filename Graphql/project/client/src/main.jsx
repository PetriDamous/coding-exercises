import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const inMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        speakers: {
          merge(existing = [], incoming = [], { mergeObjects }) {
            return incoming;
          },
        },
      },
    },
  },
};

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(inMemoryCacheConfig),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
