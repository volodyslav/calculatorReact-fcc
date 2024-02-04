import {useState } from "react"

const App = () => {
  const [input, setInput] = useState("0")
  const [decimal, setDecimal] = useState(true)

  const handleInput = (value) => {
    if (value === "=") {
      try {
        setInput(String(eval(input)));
      } catch (error) {
        setInput("Error");
      }
      setDecimal(true);
    } else if (value === ".") {
      if (decimal) {
        const lastCharIsDot = /\.$/.test(input);
        const hasDecimal = /\d+\.\d*$/.test(input);
  
        if (!lastCharIsDot && !hasDecimal) {
          setInput((prevInput) => prevInput + ".");
          setDecimal(false);
        }
      }
    } else if (["+", "*", "/"].includes(value)) {
      setDecimal(true);
      setInput((prevInput) => {
        const lastChar = prevInput.slice(-1);
        console.log(lastChar)
        if (lastChar === "-"){
          return prevInput.slice(0, -2) + value
        }
        if (lastChar === "+" || lastChar === "*" || lastChar === "/"|| lastChar === "-") {
          return prevInput.slice(0, -1) + value;
        } else {
          return prevInput + value;
        }
      });
    } else {
      setDecimal(true);
      setInput((prevInput) => {
        if (prevInput === "0" && value === "0") return prevInput;
        if (prevInput === "0" && value !== ".") return value;
        return prevInput + value;
      });
    }
  };


  return (
    <div className=" border border-gray-700 p-4 rounded-2xl bg-gray-600 text-white wrapper">
      <div id="display"  className=" text-white text-right pr-4 my-4 text-2xl rounded-lg">{input}</div>
      <div className=" grid grid-cols-4 m-2">

        <button id="clear" onClick={() => setInput("0")} className=" col-span-2 bg-red-500 m-2 p-3 rounded-lg hover:bg-red-700">Clear</button>
        <button id="multiply" onClick={() => handleInput("*")} className=" col-span-1 rounded-lg p-3  m-2 bg-slate-950 hover:bg-slate-700 ">*</button>
        <button id="divide" onClick={() => handleInput("/")} className=" col-span-1 bg-slate-950 m-2 p-3 rounded-lg hover:bg-slate-700 ">/</button>
        
        <button id="one" value={1} onClick={() => handleInput("1")} className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">1</button>
        <button id="two" value={2} onClick={() => handleInput("2")} className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">2</button>
        <button id="three" value={3} onClick={() => handleInput("3")} className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">3</button>
        <button id="add" onClick={() => handleInput("+")} className=" col-span-1 bg-slate-950 p-3 m-2 rounded-lg hover:bg-slate-700 ">+</button>
        <button id="four" value={4} onClick={() => handleInput("4")} className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">4</button>
        <button id="five" value={5} onClick={() => handleInput("5")} className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">5</button>
        <button id="six" value={6} onClick={() => handleInput("6")} className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">6</button>
        <button id="subtract" onClick={() => handleInput("-")} className=" bg-slate-950 p-3 rounded-lg m-2 hover:bg-slate-700 ">-</button>
        <button id="seven" value={7} onClick={() => handleInput("7")} className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 ">7</button>
        <button id="eight" value={8} onClick={() => handleInput("8")} className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 ">8</button>
        <button id="nine" value={9} onClick={() => handleInput("9")} className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 ">9</button>
        <button id="equals" onClick={() => handleInput("=")} className=" row-span-2 bg-blue-500 p-3 m-2 rounded-lg hover:bg-blue-700 ">=</button>
        <button id="zero" value={0} onClick={() => handleInput("0")} className=" col-span-2 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">0</button>
        <button id="decimal" onClick={() => decimal && handleInput(".")  } className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 "> . </button>
        
      </div>
    </div>
  )
}

export default App