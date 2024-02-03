
const App = () => {
  return (
    <div className=" border border-gray-700 p-4 rounded-2xl bg-gray-600 text-white wrapper">
      <div id="display" className=" text-white text-right pr-1 my-4 text-2xl rounded-lg">0</div>
      <div className=" grid grid-cols-4 m-2">

        <button id="clear"  className=" col-span-2 bg-red-500 m-2 p-3 rounded-lg hover:bg-red-700">Clear</button>
        <button id="multiply" className=" col-span-1 rounded-lg p-3  m-2 bg-slate-950 hover:bg-slate-700 ">*</button>
        <button id="divide" className=" col-span-1 bg-slate-950 m-2 p-3 rounded-lg hover:bg-slate-700 ">/</button>
        
        <button id="one" className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">1</button>
        <button id="two" className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">2</button>
        <button id="three" className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">3</button>
        <button id="add" className=" col-span-1 bg-slate-950 p-3 m-2 rounded-lg hover:bg-slate-700 ">+</button>
        <button id="four" className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">4</button>
        <button id="five" className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">5</button>
        <button id="six" className=" col-span-1 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">6</button>
        <button id="subtract" className=" bg-slate-950 p-3 rounded-lg m-2 hover:bg-slate-700 ">-</button>
        <button id="seven" className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 ">7</button>
        <button id="eight" className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 ">8</button>
        <button id="nine" className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 ">9</button>
        <button id="equals" className=" row-span-2 bg-blue-500 p-3 m-2 rounded-lg hover:bg-blue-700 ">=</button>
        <button id="zero" className=" col-span-2 bg-gray-800 p-3 m-2 rounded-lg hover:bg-gray-700 ">0</button>
        
        
        
        <button id="decimal" className=" bg-gray-800 p-3 rounded-lg m-2 hover:bg-gray-700 "> . </button>
        
      </div>
    </div>
  )
}

export default App