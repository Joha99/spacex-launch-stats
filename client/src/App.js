import "./App.css";
import logo from "./spacex-logo.png";

function App() {
  const style = {
    width: "300px",
    display: "block",
    margin: "auto",
  };

  return (
    <div className="App">
      <img src={logo} alt="SpaceX" style={style} />
    </div>
  );
}

export default App;
