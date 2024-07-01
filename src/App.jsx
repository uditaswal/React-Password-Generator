import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [isNumberAllowed, setisNumberAllowed] = useState(true);
  const [isUpperCaseCharAllowed, setisUpperCaseCharAllowed] = useState(true);
  const [isSpecialCharAllowed, setisSpecialCharAllowed] = useState(true);
  const [password, setpassword] = useState("");

  const numbers = "1234567890";
  const characters = "qwertyuiopasdfghjklzxcvbnm";
  const UpperCaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const specialCharacters = "!@#$%^&*()<>?:;{}[]\|~";

  // using usecallback for memorization
  const generatePassword = useCallback(() => {
    let pass = "";
    let allowedCharacters = `${characters}`;
    if (isNumberAllowed) allowedCharacters += numbers;
    if (isUpperCaseCharAllowed) allowedCharacters += UpperCaseCharacters;
    if (isSpecialCharAllowed) allowedCharacters += specialCharacters;

    for (let i = 0; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * allowedCharacters.length + 1);
      pass += allowedCharacters.charAt(char);
    }
    setpassword(pass);
  }, [passwordLength, isNumberAllowed, isUpperCaseCharAllowed, isSpecialCharAllowed]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, isNumberAllowed, isUpperCaseCharAllowed, isSpecialCharAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const passwordRef = useRef(null);

  return (
    <>
      <div
        id="main-box"
        className="bg-slate-700 w-full  top-10 relative rounded-md font-serif p-3 items-center  shadow-md">
        <h1 className="text-white text-3xl">Password Generator</h1>

        <div className=" flex  justify-center">
          <input
            type="text"
            id="input-box"
            className="rounded-md rounded-r-none p-1  border-2 border-black"
            placeholder="Your Password"
            value={password}
            readOnly
            ref={passwordRef} />
          <button className="text-white bg-blue-700 p-1 rounded-md rounded-l-none   border-2 border-black border-l-0 hover:bg-blue-300 active:bg-blue-800 "
            onClick={copyPasswordToClipboard}>
            COPY
          </button>
        </div>

        <div className=" flex  justify-center">
          <input
            type="range"
            name="rangeValue"
            id="password-length"
            min="5"
            max="50"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)} />
          <label
            htmlFor="password-length"
            id="rangeValue">
            {passwordLength}
          </label>
        </div>

        <input
          type="checkbox"
          name=""
          id="include-numbers"
          defaultChecked={isNumberAllowed}
          onChange={() => {
            setisNumberAllowed((prev) => !prev);
          }} />
        <label htmlFor="include-numbers">Number </label>

        <input
          type="checkbox"
          name=""
          id="include-uppercase-characters"
          defaultChecked={isUpperCaseCharAllowed}
          onChange={() => {
            setisUpperCaseCharAllowed((prev) => !prev);
          }} />
        <label htmlFor="include-uppercase-characters">
          UpperCase Characters{" "}
        </label>

        <input
          type="checkbox"
          name=""
          id="include-special-characters"
          defaultChecked={isSpecialCharAllowed}
          onChange={() => {
            setisSpecialCharAllowed((prev) => !prev);
          }} />
        <label htmlFor="include-special-characters">Symbols</label>
      </div>
    </>
  );
}

export default App;
