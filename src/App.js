import "./index.scss"
import Section from "./components/Section/Section"
import Header from "./components/Header/Header"
import TapBar from "./components/Section/TapBar/TapBar";

function App() {
  return (
    <div className="App">
      <Header />
      <TapBar />
      <Section />
    </div>
  );
}

export default App;
