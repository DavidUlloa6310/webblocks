import React, { useContext, useState } from "react";

const DrawerContext = React.createContext();

export function useDrawerContext() {
  return useContext(DrawerContext);
}

export function DrawerProvider(props) {
  const [drawer, setDrawer] = useState("");

  return (
    <DrawerContext.Provider value={{ drawer, setDrawer }}>
      {props.children}
    </DrawerContext.Provider>
  );
}
