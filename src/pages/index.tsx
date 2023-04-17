import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import type { Listener } from "keypress.js";
import { componentList, type ComponentItem } from "./UserInterface";

const inter = Inter({ subsets: ["latin"] });

const isWindowContext = typeof window !== "undefined";

export default function Home() {
  return (
    <div className="flex flex-wrap w-full h-full">
      {componentList.map((component, index) => {
        return <KeyboardShortcut key={index} {...component} />;
      })}
    </div>
  );
}

function KeyboardShortcut(props: ComponentItem) {
  let listener = useRef<Listener | boolean>(false);
  let [bgColor, setbgColor] = useState<string>(randomColor());
  useEffect(() => {
    if (isWindowContext) {
      listener.current =
        typeof window !== "undefined" && new window.keypress.Listener();

      if (listener.current) {
        listener.current.simple_combo(props.combo, function () {
          console.log("You pressed", props.combo);
          setbgColor(randomColor());
        });
      }
    }

    return () => {
      if (listener.current) {
        listener.current.reset();
        listener.current = false;
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

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
