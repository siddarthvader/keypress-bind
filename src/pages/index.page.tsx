import { useEffect, useRef, useState } from "react";
import type { Listener } from "keypress.js";
import { componentList, type ComponentItem } from "./UserInterface";
import {
  StoreContextProvider,
  useSetShortcuts,
  useShortcuts,
} from "./store-context";

const isWindowContext = typeof window !== "undefined";
function KeyboardShortcut(props: ComponentItem) {
  // console.log("props.id", props.id);
  let listener = useRef<Listener>();
  let [bgColor, setbgColor] = useState<string>(randomColor());

  const setStore = useSetShortcuts();

  useEffect(() => {
    if (isWindowContext) {
      listener.current = new window.keypress.Listener();

      if (listener.current) {
        setStore(props.id, props.combo);
        listener.current.simple_combo(props.combo, function () {
          setbgColor(randomColor());
          props.callbck();
        });
      }
    }

    return () => {
      if (listener.current) {
        listener.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="w-[50%] flex items-center justify-center text-semibold h-[50%] border-2"
      style={{ backgroundColor: bgColor }}
    >
      {props.description}
    </div>
  );
}

function ShowShortCuts() {
  const list = useShortcuts();

  return (
    <div className="flex items-center justify-center w-[50%] flex-col">
      ShortCuts are shown here
      {Object.keys(list).map((item, index) => (
        <div key={index} className="p-2 leading-3">
          {item}: {list[item]}
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-wrap w-full h-full">
      {componentList.map((component, index) => {
        return <KeyboardShortcut key={index} {...component} />;
      })}
      <ShowShortCuts />
    </div>
  );
}

export default function HomeWithContext() {
  return (
    <StoreContextProvider>
      <Home />
    </StoreContextProvider>
  );
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
