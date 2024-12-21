import React, { useState } from 'react'
import propTypes from 'prop-types'

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
  children: propTypes.func.isRequired
}

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]);
  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(currentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep - 1) setCurrentStep(stepKeys[indexStep + 1]);
  }

  return (
    <>{props.children(prevStep, nextStep, currentStep, steps)}</>
  )
}
