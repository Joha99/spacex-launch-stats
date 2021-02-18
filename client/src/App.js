import "./App.css";
import logo from "./spacex-logo.png";
import Launches from "./Components/Launches";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} alt="SpaceX" className="logo" />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
