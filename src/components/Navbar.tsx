"use cleint";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-slate-700 py-4 px-5">
      <ul className="w-1/2 flex gap-5 list-none mx-auto">
      <li className="py-2 px-2 text-lg font-bold text-[#FFF] border-2 border-slate-700 hover:border-dotted hover:border-2 hover:border-white">
          <Link href={"/"}>HOME</Link>
        </li>
        <li className="py-2 px-2 text-lg font-bold text-[#FFF] border-2 border-slate-700 hover:border-dotted hover:border-2 hover:border-white">
          <Link href={"/todoapp"}>React Todo App</Link>
        </li>
        <li className="py-2 px-2 text-lg font-bold text-[#FFF] border-2 border-slate-700 hover:border-dotted hover:border-2 hover:border-white">
          <Link href={"/docsapp"}>React Docs App</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default Navbar;
