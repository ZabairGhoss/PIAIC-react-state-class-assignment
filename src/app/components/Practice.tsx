"use client"

import { useState } from "react"

type Props = {}

const Practice = (props: Props) => {
    const [step, setStep] = useState(0);
    const [toggle, setToggle] = useState(true);

    const topics:string[] = [
        'message',
        'React Introduction',
        'React Fundamentals',
        'React State Management',
    ]


  return (
    <div className="w-1/2">
        <button className="float-right p-3 bg-purple-200 rounded-md" onClick={()=> setToggle(!toggle)}>X</button>
        <div className={`w-1/2 mx-auto my-20 ${toggle ? '' : 'hidden'}`}>
            <div className="flex justify-between">
                <div className={`${step >=1 ? 'bg-purple-400': 'bg-gray-300'} border rounded-full w-8 h-8 pt-1 text-center`}>
                    1
                </div>
                <div className={`${step >=2 ? 'bg-purple-400': 'bg-gray-300'} border rounded-full  w-8 h-8 pt-1 text-center`}>
                    2
                </div>
                <div className={`${step >=3 ? 'bg-purple-400': 'bg-gray-300'} border rounded-full  w-8 h-8 pt-1 text-center`}>
                    3
                </div>
            </div>
            <p className="text-center mt-20 text-xl font-bold">{topics[step]}</p>
            <div className="flex justify-between mx-10 mt-20">
          <button
            className="bg-purple-400 rounded-md p-2"
            onClick={() => (step > 0 ? setStep(step - 1) : "")}
          >
            Previous
          </button>
          <button
            className="bg-purple-400 rounded-md p-3"
            onClick={() => (step < 3 ? setStep(step + 1) : "")}
          >
            Next Step
          </button>
        </div>
        </div>
    </div>
  )
}

export default Practice