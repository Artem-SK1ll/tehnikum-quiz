import React from "react";

export const ProgressBar = ({currentStep}) => {
   const variants = [1, 2, 3, 4];
    return (
        <div className="indicator" >  
          <div className="indicator_text">
            <span className="indicator_description">
               Скидка за прохождение опроса:
            </span>
            <span className="indicator_value">15%</span>
            </div>
            <div className="indicator_progressbar">
               {variants.map((elem, idx) =>(
                  <div key={idx}
                  className={`indicator__unit indicator__unit-1 ${currentStep>idx && "_active"}`}></div>
               ))}
            </div>
          </div>
    )
}
