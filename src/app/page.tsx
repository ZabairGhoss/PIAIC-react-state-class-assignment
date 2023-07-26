import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div className="flex flex-col">
      <h1 className="text-2xl font-extrabold ">React Project List:</h1>
      <p className="ml-5">
        This is the list of my all React JS practice project(s), all the class
        assignment/practices from PIAIC Q#02 Learning React JS.
      </p>
      <nav className="ml-20">
        <ul className="mt-10 list-decimal">
          <li className="text-blue-600 hover:underline text-xl my-2">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="text-blue-600 hover:underline text-xl my-2">
            <Link href={"/todoapp"}>React Todo App</Link>
          </li>
          <li className="text-blue-600 hover:underline text-xl my-2">
            <Link href={"/docsapp"}>React Docs App</Link>
          </li>
        </ul>
      </nav>
      </div>
    </main>
  );
}
