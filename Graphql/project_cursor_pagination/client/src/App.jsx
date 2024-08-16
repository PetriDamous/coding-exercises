import { ApolloProvider, useReactiveVar } from "@apollo/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style-home.css";
import "./style-speakers.css";
import Toolbar from "./components/Toolbar";
import SpeakerList from "./components/SpeakerList.jsx";
import useApollo, { currentThemeVar } from "./graphql/useApollo";
import SpeakersLoadMore from "./components/SpeakersLoadMore.jsx";

function App() {
  const apolloClient = useApollo();

  // const currentTheme = useReactiveVar(currentThemeVar);

  // const containerStyles = {
  //   backgroundColor: currentTheme === "dark" ? "black" : "",
  // };

  return (
    <ApolloProvider client={apolloClient}>
      {/* <Toolbar />
      <div className="container show-fav" style={containerStyles}>
        <div className="row">
          <div className="fav-list">
            <SpeakerList />
            <br />
          </div>
        </div>
      </div> */}
      <SpeakersLoadMore />
    </ApolloProvider>
  );
}

export default App;
