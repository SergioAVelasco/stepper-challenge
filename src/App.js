import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Start from "./src/views/start/start";
import Stepper from "./src/views/stepper/stepper";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/step/:id" element={<Stepper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
