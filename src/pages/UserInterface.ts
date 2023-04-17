type ComponentItem = {
  combo: string;
  callbck: () => void;
  description: string;
};

const componentList: ComponentItem[] = [
  {
    combo: "shift a",
    callbck: () => {
      console.log("hello from component A");
    },
    description: "Component A, press shift a to change its color",
  },
  {
    combo: "esc",
    callbck: () => {
      console.log("hello from component B");
    },
    description: "Component B, press Esx to change its color",
  },
  {
    combo: "alt ctrl c",
    callbck: () => {
      console.log("hello from component C");
    },
    description: "Component C, press shift alt ctrl C to change its color",
  },
];

export { componentList };
export type { ComponentItem };
