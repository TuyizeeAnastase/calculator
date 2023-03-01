import "./index.css";
import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { ResultScreen } from "./components/ResultScreen";

function App() {
  const [firstNumber, setFirstNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [sign, setSign] = useState(null);
  const [result, setResult] = useState(0);

  const handleClear = () => {
    setFirstNumber([]);
    setSecondNumber([]);
    setResult(0);
    setSign(null);
  };

  const handleNumber = (number) => {
    if (result !== 0) {
      handleClear();
    }
    if (!sign) {
      if (firstNumber) {
        setFirstNumber((oldNumber) => [...oldNumber, number]);
      }
    } else {
      if (secondNumber) {
        setSecondNumber((oldNumber) => [...oldNumber, number]);
      }
    }
  };

  const handleOperation = () => {
    const num1 = parseInt(firstNumber.join(""), 10);
    const num2 = parseInt(secondNumber.join(""), 10);
    if (sign === "+") setResult(num1 + num2);
    else if (sign === "-") setResult(num1 - num2);
    else if (sign === "*") setResult(num1 * num2);
    else setResult(num1 / num2);
  };

  return (
    <div className="bg-gray-800 rounded-lg border  shadow-md w-96 my-32 mx-96">
      <ResultScreen firstNumber={firstNumber} secondNumber={secondNumber} sign={sign} result={result} />
      <Keyboard handleOperation={handleOperation} handleNumber={handleNumber} setSign={setSign} handleClear={handleClear}/>
    </div>
  );
}

export default App;
