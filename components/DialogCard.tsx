import React from "react";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Loader from "./Loader";

type Props = { text: string; type: "question" | "answer" };

function DialogCard({ text, type }: Props) {
  const isQuestion = type === "question";

  return (
    <div className="flex space-x-3">
      <div>
        <span
          className={`${
            isQuestion ? "bg-green-500" : "bg-blue-500"
          } h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}
        >
          {!isQuestion ? (
            <ComputerDesktopIcon
              className="h-5 w-5 text-white"
              aria-hidden="true"
            />
          ) : (
            <UserIcon className="h-5 w-5 text-white" aria-hidden="true" />
          )}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
        <div>
          {text === "setLoadingIndicator" ? (
            <Loader />
          ) : (
            <p className="text-sm text-gray-500">{text}</p>
          )}
        </div>
        {/* <div className="whitespace-nowrap text-right text-sm text-gray-500">
      <time dateTime={event.datetime}>{event.date}</time>
    </div> */}
      </div>
    </div>
  );
}

export default DialogCard;
