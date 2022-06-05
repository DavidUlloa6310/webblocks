import React, { useState, useEffect } from "react";
import { useDrawerContext } from "../utils/DrawerContext";

import PaletteIcon from "../components/Icons/PaletteIcon";

function StyleMenu(props) {
  let node = props.selected;

  const { drawer, setDrawer } = useDrawerContext();
  const [font, setFont] = useState();
  const [color, setColor] = useState();
  const [fontSize, setFontSize] = useState();
  const [fontWeight, setFontWeight] = useState();

  useEffect(() => {
    props.updateBody();
  }, [font, color, fontSize, fontWeight]);

  return (
    <aside className="absolute right-0 shadow-2xl">
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
          <div className="flex w-full my-1">
            <h4>Font:</h4>
            <select
              placeholder={font}
              className="flex-grow"
              onInput={(event) => {
                setFont(event.target.value);
                node.style.fontFamily = event.target.value;
              }}
            >
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans-Serif</option>
            </select>
          </div>

          <div className="flex w-full my-1">
            <h4>Color:</h4>
            <select
              className="flex-grow"
              placeholder={color}
              onInput={(event) => {
                setColor(event.target.value);
                node.style.color = event.target.value;
              }}
            >
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
            </select>
          </div>

          <div className="flex w-full my-1">
            <h4>Font Size:</h4>
            <select
              className="flex-grow"
              onInput={(event) => {
                setFontSize(event.target.value);
                node.style.fontSize = event.target.value;
              }}
            >
              <option value="8px">8px</option>
              <option value="16px">16px</option>
              <option value="32px">32px</option>
              <option value="64px">16px</option>
              <option value="128px">128px</option>
            </select>
          </div>

          <div className="flex w-full my-1">
            <h4>Font Weight:</h4>
            <select
              className="flex-grow"
              onInput={(event) => {
                setFontWeight(event.target.value);
                node.style.fontWeight = event.target.value;
              }}
            >
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="600">600</option>
              <option value="800">800</option>
            </select>
          </div>
        </nav>
      )}
    </aside>
  );
}

export default StyleMenu;
