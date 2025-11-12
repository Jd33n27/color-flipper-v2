import "./App.css";
import Display from "./components/display/display";
import Particle from "./components/particles/particle";

function App() {
  return (
    <section className="app-container">
      <div className="glass-card text-area" style={{ zIndex:1 }}>
        <Display />
      </div>
      <Particle zIndex={0} />
    </section>
  );
}

export default App;
