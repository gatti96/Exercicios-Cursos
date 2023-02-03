import logo from "./logo.svg";
import "./App.css";
import Loren from "./components/lorem";
import Plannets from "./components/index.js";

function HelloWorld() {
  return <h1>Hello World</h1>;
}

function App() {
  return (
    <>
      <div>
        <HelloWorld />
      </div>
      <div>
        <br></br>
      </div>
      <div>
        <Loren />
      </div>
      <div>
        <Plannets />
      </div>
    </>
  );
}

export default App;
