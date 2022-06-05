import React, { useState } from "react";
import { useDrawerContext } from "../utils/DrawerContext";

import PaletteIcon from "../components/Icons/PaletteIcon";

function StyleMenu(props) {
  const { drawer, setDrawer } = useDrawerContext();

  return (
    <aside className="absolute right-0">
      <div
        className="bg-white cursor-pointer absolute top-20"
        onClick={() => {
          setDrawer((prevState) => {
            if (prevState == "styles") return "";
            return "styles";
          });
        }}
      >
        {drawer != "blocks" && (
          <PaletteIcon className="absolute -left-12 w-10" />
        )}
      </div>
      {drawer == "styles" && (
        <nav className=" w-72 p-4 h-screen bg-white z-10">
          <h2 className="w-full font-roboto font-extrabold text-3xl border-b-8 border-neutral-300">
            Style
          </h2>
          <h3 className="text-xl">Tag: {props.selected?.tagName}</h3>
        </nav>
      )}
    </aside>
  );
}

export default StyleMenu;
