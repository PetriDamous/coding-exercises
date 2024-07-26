// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style-home.css";
import "./style-speakers.css";
import Toolbar from "./components/Toolbar";
import SpeakerList from "./components/SpeakerList.jsx";

function App() {
  return (
    <>
      <Toolbar />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            <SpeakerList />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
