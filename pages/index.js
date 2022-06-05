import BlockIcon from "../components/Icons/BlockIcon";

import Link from "next/link";

import ABCIcon from "../components/Icons/ABCIcon";

export default function Home() {
  return (
    <main className="flex justify-around items-center h-screen p-10 max-w-[1600px] m-auto">
      <nav className="flex items-center absolute top-0 left-0 p-10">
        <BlockIcon className=" w-12 px-1" />
        <h1 className=" font-roboto font-black text-4xl px-2">Web Blocks</h1>
      </nav>
      <div>
        <h2 className="font-roboto text-6xl font-medium">
          Learn web development:
          <br />
          the fun way.
        </h2>
        <h3 className=" font-montserrat text-xl my-2">
          For kids, beginners, or hobbyist, web development doesn&apos;t have to
          be difficult.
        </h3>
        <Link href="/build">
          <button className="bg-blue-400 px-16 py-4 my-6 text-white rounded-xl font-montserrat font-bold">
            Get Building
          </button>
        </Link>
      </div>
      <ABCIcon className="w-96" />
    </main>
  );
}
