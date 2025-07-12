import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/style-home.css";
import "./CSS/style-speakers.css";
import App from "./App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { inMemoryCacheConfig } from "./graphql/";
import { sha256 } from "crypto-hash";

const link = createPersistedQueryLink({ sha256 }).concat(
  new HttpLink({ uri: import.meta.env.VITE_API_URL })
);

const client = new ApolloClient({
  cache: new InMemoryCache(inMemoryCacheConfig),
  link,
  connectToDevTools: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
