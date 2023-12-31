"use client";

import React, { useEffect, useState } from "react";

type Task = {
  id: number;
  task: string;
  isCompleted: boolean;
};

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCompletedTask, setIsCompletedTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function generateId(): number {
    const min = 100000; // Minimum value for the ID (adjust as needed)
    const max = 999999; // Maximum value for the ID (adjust as needed)

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleCheckboxChange = (id: number) => {
    const existingTaskIndex = tasks.findIndex((task) => task.id === id);

    if (existingTaskIndex !== -1) {
      const updatedTasks = [...tasks]; // Create a shallow copy of the tasks array
      updatedTasks[existingTaskIndex] = {
        ...tasks[existingTaskIndex],
        isCompleted: !tasks[existingTaskIndex].isCompleted,
      };
      setTasks(updatedTasks); // Update the state with the updated tasks array
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const taskID: number = generateId();
    setTasks([
      ...tasks,
      {
        id: taskID,
        task: input,
        isCompleted: isCompletedTask,
      },
    ]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (input == "") {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [input]);

  return (
    <div className="w-1/2 bg-gray-300 rounded-md py-10 flex flex-col mx-auto">
      <h1 className="text-center font-bold text-2xl">React TodoApp</h1>
      <div className="flex bg-slate-300 px-10 justify-around w-full my-10">
        <input
          type="text"
          placeholder="type here"
          className="py-3 px-5 font-bold text-lg w-[75%] mx-auto rounded-sm"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="bg-purple-400 rounded-md px-3 font-bold border-[#000] border-[2px] hover:bg-white disabled:cursor-not-allowed"
          disabled={isButtonDisabled}
          onClick={(e) => handleClick(e)}
        >
          Add Todo
        </button>
      </div>
      <div className="w-full bg-gray-500 rounded-md py-5 flex flex-col">
        {tasks.length <= 0 ? (
          <div className="w-1/2 font-bold text-lg text-[#fff] mx-auto text-center bg-red-700">
            You dont have any Task(s) added Yet! add some.
          </div>
        ) : (
          tasks.map((task) => {
            return (
              <div key={task.id} className="">
                <div className="flex justify-between px-10 mt-2 bg-emerald-500 py-3">
                  <div className="topping">
                    <input
                      type="checkbox"
                      name="TaskCompletionCheck"
                      value={"true"}
                      className="p-5"
                      checked={task.isCompleted}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                    <span
                      className={`text-lg text-[#fff] font-semibold ml-5 ${
                        task.isCompleted ? "line-through" : ""
                      }`}
                    >
                      {task.task}
                    </span>
                  </div>
                  <button
                    className="px-3 bg-red-700 text-[#fff] font-extrabold"
                    onClick={() => handleDelete(task.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoApp;
