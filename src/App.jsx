import "./App.css";
import Display from "./components/display/display";
import Toggle from "./components/toggle/toggle";

function App() {
  return (
    <section className="app-container">
      <div className="glass-card text-area">
        <h1>Color Flipper</h1>
        <p>Discover beautiful colors with a single click</p>
        <Toggle/>
        <Display/>
      </div>
    </section>
  );
}

export default App;
