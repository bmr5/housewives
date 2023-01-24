import React, { useContext, useEffect } from "react";
import DialogCard from "./DialogCard";
import { DialogContext } from "../providers/DialogProvider";

export default function Conversation() {
  const { conversation } = useContext(DialogContext);
  const conversationDivRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conversationDivRef.current) {
      const { scrollHeight, clientHeight, scrollTop } =
        conversationDivRef.current;
      if (scrollTop + clientHeight !== scrollHeight) {
        conversationDivRef.current.scrollTop = scrollHeight - clientHeight;
      }
    }
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
    <div
      ref={conversationDivRef}
      style={{
        maxHeight: `calc(100vh - 280px)`,
      }}
      className={`flex-grow w-full overflow-auto`}
    >
      <ul role="list" className="flex flex-col gap-4">
        {generateList()}
      </ul>
    </div>
  );
}
