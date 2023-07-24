"use client";

import React, { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");


  
const handleClick = (e: any) => {
    e.preventDefault();
    console.log('Task>>',e.target.value);
    
    setInput(e.target.value);
}

  return (
    <div className="w-1/2 bg-gray-300 rounded-md py-10">
      <h1 className="text-center font-bold text-2xl">React TodoApp</h1>
      <div className="flex bg-slate-300 px-10 justify-around w-full my-10">
        <input type="text" placeholder="type here" className="py-3 px-5 font-bold text-lg w-[75%] mx-auto rounded-sm" value={input} />
        <button className="bg-purple-400 rounded-md px-3 font-bold border-[#000] border-[2px] hover:bg-white" onClick={(e)=> handleClick(e)}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoApp;
