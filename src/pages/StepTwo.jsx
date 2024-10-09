import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {
  const variants = [
    {
      id:"variant-1",
      courseName:"Frontend"
    },
    {
      id:"variant-2",
      courseName:"Python"
    },
    {
      id:"variant-3",
      courseName:"DATA Analytics"
    },
    {
      id:"variant-4",
      courseName:"UX/UI"
    },
  ]
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar/>
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
             <ProgressBar currentStep={2}/>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li>
            </ul>
           <LinkButton path="step-there"></LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
