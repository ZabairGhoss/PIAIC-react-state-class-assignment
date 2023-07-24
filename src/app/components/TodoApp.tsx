"use client";

import React, { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");

  return (
    <div className="w-1/2 bg-gray-300 rounded-md py-10">
      <h1 className="text-center font-bold text-2xl">React TodoApp</h1>
      <div className="flex ">
        <input type="text" placeholder="type here" className="" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default TodoApp;
