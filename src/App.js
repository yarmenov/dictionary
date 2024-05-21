import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import earth from "./earth.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello world{" "}
        <img src={earth} className="App-logo img-fluid" alt="earth" />
      </header>
    </div>
  );
}

export default App;
