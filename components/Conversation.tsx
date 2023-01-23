import React, { useContext, useEffect } from "react";
import DialogCard from "./DialogCard";
import { DialogContext } from "../providers/DialogProvider";

const testConvo = [
  {
    id: 0,
    query: "What is your name?",
    answer: "My name is John Doe",
  },
];

export default function Conversation() {
  const { conversation } = useContext(DialogContext);
  console.log("Conversation Component", { conversation });

  useEffect(() => {
    console.log("Conversation Component useEffect", { conversation });
  }, [conversation]);

  const generateList = () => {
    return (conversation ?? []).map((text, i) => {
      const type = i % 2 === 0 ? "question" : "answer";
      return (
        <li key={i}>
          <div className="flex flex-col gap-4">
            <div className="flex space-x-3">
              <DialogCard text={text} type={type} />
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="flow-root">
      <ul role="list" className="flex flex-col gap-4">
        {generateList()}
      </ul>
    </div>
  );
}
