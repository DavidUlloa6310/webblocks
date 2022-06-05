import React, { useState } from "react";
import Image from "next/image";

import { useDrawerContext } from "../utils/DrawerContext";

import BlockIcon from "../components/Icons/BlockIcon";

function BlockSelection() {
  const { drawer, setDrawer } = useDrawerContext();

  return (
    <aside className="absolute right-0 z-10">
      <div
        className="bg-white cursor-pointer absolute top-5 -z-10"
        onClick={() => {
          setDrawer((prevState) => {
            if (prevState == "blocks") return "";
            return "blocks";
          });
        }}
      >
        {drawer != "styles" && <BlockIcon className="absolute -left-12 w-10" />}
      </div>
      {drawer == "blocks" && (
        <nav className=" w-72 p-4 h-screen bg-white z-20">
          <h2 className="w-full font-roboto font-extrabold text-3xl border-b-8 border-neutral-300">
            Blocks
          </h2>
          <h3 className=" font-roboto text-2xl my-2">Containers</h3>
          <div
            className="bg-blue-400 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            div
          </div>
          <h3 className=" font-roboto text-2xl my-2">Text</h3>
          <h1
            className="bg-red-500 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            h1
          </h1>
          <h2
            className="bg-red-400 p-5 rounded-xl font-montserrat constant dropzonem my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            h2
          </h2>
          <h3
            className="bg-red-300 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            h3
          </h3>
          <h4
            className="bg-red-200 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            h4
          </h4>
          <p
            className="bg-red-100 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            p
          </p>
          <h3 className=" font-roboto text-2xl my-2">Organization</h3>
          <ol
            className="bg-yellow-400 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            ol
          </ol>
          <ul
            className="bg-yellow-400 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            ul
          </ul>
          <li
            className="bg-yellow-300 p-5 rounded-xl font-montserrat constant dropzone my-1 block"
            id="draggable"
            draggable="true"
            key="KEY"
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", null);
            }}
          >
            li
          </li>
        </nav>
      )}
    </aside>
  );
}

export default BlockSelection;
