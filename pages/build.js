import { render } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { DrawerProvider } from "../utils/DrawerContext";

import TrashIcon from "../components/Icons/TrashIcon";
import BlockSelection from "../components/BlockSelection";
import StyleMenu from "../components/StyleMenu";

function Build() {
  const body = useRef(null);
  const resultSection = useRef(null);

  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [selected, setSelected] = useState();

  function updateBody() {
    let bodyClone = body.current.cloneNode(true);
    bodyClone.removeChild(bodyClone.firstChild);
    formatBody(bodyClone);
    resultSection.current.replaceChildren(bodyClone);
  }

  function formatBody(node) {
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        formatBody(node.children[i]);
      }
    }

    node.className = "";
    node.id = null;
    node.setAttribute("contenteditable", false);
    node.removeAttribute("draggable");
  }

  useEffect(() => {
    let dragged;
    let selected;

    function onDragStart(event) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = 0.5;
    }

    function onDrag(event) {}

    function onDragEnd(event) {
      event.target.style.opacity = "";
    }

    function onDragOver(event) {
      event.preventDefault();
    }

    function onDragEnter(event) {
      if (
        event.target.classList.contains("dropzone") &&
        !event.target.isSameNode(dragged)
      ) {
        event.target.style.background = "#ADD8E6";
      }
    }

    function onDragLeave(event) {
      if (event.target.classList.contains("dropzone")) {
        event.target.style.background = "";
      }
    }

    function onDrop(event) {
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (
        event.target.classList.contains("dropzone") &&
        !event.target.classList.contains("constant") &&
        !event.target.isSameNode(dragged)
      ) {
        let copy = dragged.cloneNode(true);
        copy.style.opacity = 1;

        if (dragged.classList.contains("constant")) {
          copy.classList.remove("constant");
          copy.setAttribute("contenteditable", "true");
        } else {
          dragged.parentNode?.removeChild(dragged);
        }

        if (
          event.target.classList.contains("trash") &&
          !dragged.classList.contains("constant")
        ) {
          dragged.parentNode?.removeChild(dragged);
        }

        event.target.style.background = "";
        dragged.style.opacity = 1;
        event.target.appendChild(copy);

        updateBody();
      }
    }

    function onSelect(event) {
      if (
        !event.target.classList.contains("constant") &&
        event.target.classList.contains("block")
      ) {
        selected?.classList.remove("bg-green-500");
        selected = event.target;
        selected.classList.add("bg-green-500");
        setSelected(selected);
      }
    }

    /* events fired on the draggable target */
    document.addEventListener("drag", onDrag, false);

    document.addEventListener("dragstart", onDragStart, false);

    document.addEventListener("dragend", onDragEnd, false);

    /* events fired on the drop targets */
    document.addEventListener("dragover", onDragOver, false);

    document.addEventListener("dragenter", onDragEnter, false);

    document.addEventListener("dragleave", onDragLeave, false);

    document.addEventListener("drop", onDrop, false);

    document.addEventListener("click", onSelect);

    return () => {
      document.removeEventListener("drag", onDrag);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("dragend", onDragEnd);
      document.removeEventListener("dragover", onDragOver);
      document.removeEventListener("dragenter", onDragEnter);
      document.removeEventListener("dragleave", onDragLeave);
      document.removeEventListener("drop", onDrop);
      document.removeEventListener("click", onSelect);
    };
  }, [body]);

  return (
    <DrawerProvider>
      <TrashIcon className=" w-16 absolute left-4 top-4 trash dropzone" />
      <BlockSelection />
      <StyleMenu selected={selected} updateBody={updateBody} />
      <main className="flex h-screen">
        <section
          className=" flex-grow border-r-4 border-neutral-300 flex justify-center items-center h-screen"
          onInput={(event) => {
            updateBody();
          }}
        >
          <div
            className="bg-blue-300 p-5 rounded-xl font-montserrat dropzone w-[80%] min-h-[70%]"
            ref={body}
          >
            body
          </div>
        </section>
        <section
          className=" flex-grow border-l-4 border-neutral-300 html"
          id="result_section"
          ref={resultSection}
        ></section>
      </main>
    </DrawerProvider>
  );
}

export default Build;
