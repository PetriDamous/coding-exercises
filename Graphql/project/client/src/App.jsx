import { ApolloProvider } from "@apollo/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style-home.css";
import "./style-speakers.css";
import Toolbar from "./components/Toolbar";
import SpeakerList from "./components/SpeakerList.jsx";
import useApollo from "./graphql/useApollo";

function App() {
  const apolloClient = useApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <Toolbar />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            <SpeakerList />
            <br />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
