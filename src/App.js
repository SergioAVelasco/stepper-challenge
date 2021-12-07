import { useState } from "react";

import "./App.css";
import Layout from "./src/components/layout/layout";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Layout currentStep = {currentStep}>
      <h1>Hola</h1>
    </Layout>
  );
}

export default App;
