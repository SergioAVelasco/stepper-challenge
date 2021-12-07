import React from "react";
import "./layout.css";

const Layout = ({
  children,
  currentStep,
  onNextClick,
  onPrevClick,
  totalSteps,
}) => {
  let prevClass = "button";
  const nextButton = "button";

  if (currentStep === 1) {
    prevClass = prevClass + " disabled-button";
  }
  
  return (
    <div className="container">
      <Header currentStep={currentStep} totalSteps={totalSteps} />
      <div className="main-content">{children}</div>
      <div className="buttons-container">
        <button className={prevClass}  onClick={onPrevClick}>Back</button>
        <button className={nextButton} onClick={onNextClick}>
          {currentStep === totalSteps ? "Send" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Layout;

const Header = ({ currentStep, totalSteps }) => {
  const steps = [];

  for (let i = 1; i < totalSteps + 1; i++) {
    let stepClass = "single-step";
    if (currentStep === i) {
      stepClass = stepClass + " step-active";
    } else if (currentStep > i) {
      stepClass = stepClass + " step-past";
    }
    steps.push(
      <div key={`step-${i}`} className={stepClass}>{`Step ${i}`}</div>
    );
  }
  return <div className="steps-container">{steps}</div>;
};
