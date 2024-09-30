import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";

const Welcome = () => {
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue ]=useState("")
  const [phoneValue, setPhoneValue]=useState("")
  const [nameError, setNameError]=useState(false)
  const [phoneError, setPhoneError]=useState(false)
  const [checkBtn, setCheckBtn]=useState(true)

const handleClick = () => {
  if(!nameRegex.test(nameValue)){
    setNameError(true)
  }else{
    setNameError(false)
  }
  if(!phoneRegex.test(phoneValue)){
    setPhoneError(true)
  }else{
    setPhoneError(false)
  }
}

  useEffect(() =>{
    if(nameValue && phoneValue){
      setCheckBtn(false)
    }else{
      setCheckBtn(true)
    }
  }, [nameValue, phoneValue])
    
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header HeaderText='Добро пожаловать в квиз от лучшего учебного центра' headerType="h1"/>
          <form className="welcome__form">
            <AppLabel
            labelText='Ваше имя'
            inputPlaceholder='Ваш ответ'
            errorText='Введите Ваше имя'
            inputType="text"
            id="username"
            isRequired
            labelChange={setNameValue}
            labelValue={nameValue}
            hasError={nameError}

            /> 
            <AppLabel
            labelText="Ваш номер"
            inputPlaceholder="+998 9- --- -- -- "
            errorText='Введите Ваш номер телефона'
            inputType="number"
            id="phone"
            labelChange={setPhoneValue}
            labelValue={phoneValue}
            hasError={phoneError}
            />
            <AppButton
            buttonText="Далее"
            isDisabled={checkBtn}
            id="next-btn"
            buttonClick={handleClick}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
