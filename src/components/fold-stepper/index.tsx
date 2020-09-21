import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  totalSteps: number;
  currentStep?: number;
  moveStep?: 1 | -1;
}

export const FoldStepper = ({
  totalSteps = 1,
  currentStep = 0,
  moveStep
}: Props) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    console.log('this is our current step', currentStep);
  }, [currentStep]);

  useEffect(() => {
    if (moveStep) {
      const nextStep = activeStep + moveStep;

      if (nextStep > -1 && nextStep < totalSteps) {
        setActiveStep(nextStep);
      }
    }
  }, [moveStep]);

  const renderSteps = (_val: any, index: number) => {
    const classes = [styles.foldStepper__indicator].join(' ');
    const topPosition = index * 10 + 'px';

    return <div className={classes} key={index} style={{ top: topPosition }}/>;
  };

  return (
    <div className={styles.foldStepper}>
      {new Array(totalSteps).fill('').map(renderSteps)}
    </div>
  );
};
