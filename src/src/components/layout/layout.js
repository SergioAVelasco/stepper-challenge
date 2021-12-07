import React from "react";
import "./layout.css";

const TOTAL_STEPS = 4;

const Layout = ({ children, currentStep }) => {
  return (
    <div className="container">
      <Header currentStep={currentStep} />
      <div className="main-content">{children}</div>
      <div className="buttons-container">
        <button>Anterior</button>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default Layout;

const Header = ({ currentStep }) => {
  const steps = [];

  for (let i = 1; i < TOTAL_STEPS + 1; i++) {
    let stepClass = "single-step";
    if (currentStep === i) {
      stepClass = stepClass + " step-active";
    } else if (currentStep > i) {
      stepClass = stepClass + " step-past";
    }
    steps.push(<div className={stepClass}>{`Step ${i}`}</div>);
  }
  return <div className="steps-container">{steps}</div>;
};
