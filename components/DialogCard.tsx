import React, { useEffect } from "react";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Loader from "./Loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <div className="flex min-w-0 flex-1 justify-between items-center space-x-4">
        <div>
          {text === "setLoadingIndicator" ? (
            <Loader />
          ) : (
            <div className="text-sm text-gray-500">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="font-bold" {...props} />
                  ),
                  li: ({ node, ...props }) => {
                    const { ordered } = props;
                    return (
                      <li
                        className={`list-inside ${
                          ordered ? "list-decimal" : "list-disc"
                        }`}
                        {...props}
                      />
                    );
                  },
                  em: ({ node, ...props }) => (
                    <i className="font-bold" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                }}
              >
                {text}
              </ReactMarkdown>
            </div>
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
