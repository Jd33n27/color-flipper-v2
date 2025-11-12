import "./App.css";
import Display from "./components/display/display";
import Particle from "./components/particles/particle";

function App() {
  return (
    <section className="app-container">
      <div className="glass-card text-area">
        <Display />
      </div>
      <Particle />
    </section>
  );
}

export default App;
