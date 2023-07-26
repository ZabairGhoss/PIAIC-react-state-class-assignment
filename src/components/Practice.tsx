"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {};

const Practice = (props: Props) => {
  const [step, setStep] = useState(0);
  const [toggle, setToggle] = useState(true);

  const topics: string[] = [
    "React Topics",
    "Thinking in React",
    "React: Describing the UI",
    "React State Management",
  ];

  const links: string[] = [
    "https://react.dev/learn",
    "https://react.dev/learn/thinking-in-react",
    "https://react.dev/learn/describing-the-ui",
    "https://react.dev/learn/managing-state",
  ];

  return (
    <div className="w-1/2 mx-auto bg-gray-100 rounded-md py-10 flex flex-col ">
      <div className="w-full relative h-[50px]">
      <button
        className="w-[50px] absolute right-5 p-3 bg-purple-200 rounded-md"
        onClick={() => setToggle(!toggle)}
      >
        X
      </button>
      </div>
      <div className={`w-1/2 mx-auto my-10 ${toggle ? "" : "hidden"}`}>
          <h1 className="text-center font-bold text-2xl my-10">React Docs App</h1>
        <div className="flex justify-between">
          <div
            className={`${
              step >= 1 ? "bg-purple-400" : "bg-gray-300"
            } border rounded-full w-8 h-8 pt-1 text-center`}
          >
            1
          </div>
          <div
            className={`${
              step >= 2 ? "bg-purple-400" : "bg-gray-300"
            } border rounded-full  w-8 h-8 pt-1 text-center`}
          >
            2
          </div>
          <div
            className={`${
              step >= 3 ? "bg-purple-400" : "bg-gray-300"
            } border rounded-full  w-8 h-8 pt-1 text-center`}
          >
            3
          </div>
        </div>
        <p className="text-center mt-20 text-xl font-bold hover:underline">
          {
            <Link href={step < 4 ? links[step] : ""} target="_blank">
              {topics[step]}
            </Link>
          }
        </p>
        <div className="flex justify-between mx-10 mt-20">
          <button
            className="bg-purple-400 rounded-md p-2 text-[#fff]"
            onClick={() => (step >= 1 ? setStep(step - 1) : "")}
          >
            Previous
          </button>
          <button
            className="bg-purple-400 rounded-md p-3 text-[#fff]"
            onClick={() => (step < 3 ? setStep(step + 1) : "")}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
