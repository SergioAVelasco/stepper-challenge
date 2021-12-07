import "./start.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="container-start">
      inicio
      <Link to="/step/1">
        <button className = "start-button">ir al stepper</button>
      </Link>
    </div>
  );
}

export default App;
