import "./App.css";
import logo from "./spacex-logo.png";
import Launches from "./Components/Launches";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="SpaceX" className="logo" />
      <Launches />
    </div>
  );
}

export default App;
