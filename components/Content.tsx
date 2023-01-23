import React from "react";
import Card from "./Card";
import useWindowDimensions from "../hooks/useWindowDimensions";

const examples = [
  "Will Kyle's relationship ever emotionally fulfill her?",
  "What is the name of Lisa Vanderpump's dog?",
  "How would Yolanda recommend treating Lyme disease?",
  "Where does Lisa Rinna live?",
];

const capabilities = [
  "Search anything that happened from all 12+ season of RHOBH",
  "Ask questions related to what happened in an episode or season",
  "Answers narrated by our favorite talk show host, Andy Cohen!",
  "Ask phrases or keywords like 'Lisa Rinna' or 'Lisa Vanderpump'",
];

function Content() {
  const { width, height } = useWindowDimensions();
  let itemCount = height < 600 ? 3 : 4;

  return (
    <div className="flex justify-center w-full md:w-4/5 self-center gap-6 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="">Examples</h1>
        <div className="flex flex-col gap-2">
          {examples.map((example, i) => {
            if (i + 1 <= itemCount) {
              return <Card key={example} content={example} />;
            }
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-center">Capabilities</h1>
        <div className="flex flex-col gap-2">
          {capabilities.map((capability, i) => {
            if (i + 1 <= itemCount) {
              return <Card key={capability} content={capability} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
