import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./stepper.css";
import Layout from "../../components/layout/layout";

const TOTAL_STEPS = 4;

function App() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const onNextClick = () => {
    if (currentStep < TOTAL_STEPS) {
      navigate(`/step/${currentStep + 1}`);
    }
  };

  const onPrevClick = () => {
    if (currentStep !== 1) {
      navigate(`/step/${currentStep - 1}`);
    }
  };

  useEffect(() => {
    setCurrentStep(+id);
  }, [id]);

  const getStepsContent = () => {
    switch (currentStep) {
      case 1:
        return <h1>This is the beginning</h1>;
      case 2:
        return <h1>This is the second step</h1>;
      case 3:
        return <h1>We almost finish</h1>;
      case 4:
        return <h1>Lets send the info ;)</h1>;
      default:
        return null;
    }
  };

  return (
    <Layout
      currentStep={currentStep}
      onNextClick={onNextClick}
      onPrevClick={onPrevClick}
      totalSteps={TOTAL_STEPS}
    >
      {getStepsContent()}
    </Layout>
  );
}

export default App;
