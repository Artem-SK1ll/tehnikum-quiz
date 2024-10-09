import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext, themes } from "../contexts/themeContext";

const Welcome = () => {
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);
const {theme,toggleTheme}=useContext(ThemeContext);
console.log("theme",theme)

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const isNameValid = nameRegex.test(nameValue);
    const isPhoneValid = phoneRegex.test(phoneValue);

    setNameError(!isNameValid);
    setPhoneError(!isPhoneValid);
  };

  useEffect(() => {
    setCheckBtn(!(nameValue && phoneValue && !nameError && !phoneError));
  }, [nameValue, phoneValue, nameError, phoneError]);

  return (
    <div className={`container ${theme===themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <button onClick={toggleTheme}>Смена темы</button>
          <Header 
            HeaderText="Добро пожаловать в квиз от лучшего учебного центра" 
            headerType="h1"
          />
          <form className="welcome__form" onSubmit={handleClick}>
            <AppLabel
              labelText="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorText="Введите Ваше имя"
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
              errorText="Введите Ваш номер телефона"
              inputType="text" // Changed to text
              id="phone"
              labelChange={setPhoneValue}
              labelValue={phoneValue}
              hasError={phoneError}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
