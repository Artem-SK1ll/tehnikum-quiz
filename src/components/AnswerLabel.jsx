import React from "react";

export const AnswerLabel = ({answerLabel,id,labelChange}) => {
    return (
        <li className="variant-wrapper"> 
           <input 
           required
           type="radio"
           name="variants"
           id={id}
           onChange={labelChange} />
        <label htmlFor={id}>{answerLabel}</label>
        </li>
    );
}; 