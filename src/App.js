import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import earth from "./earth.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <span className="heading">Find your meaning</span> <br />
          <br />
          <img src={earth} className="App-logo img-fluid" alt="earth" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Yana</footer>
      </div>
    </div>
  );
}

export default App;
