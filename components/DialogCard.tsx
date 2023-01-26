import React from "react";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import Loader from "./Loader";
import ReactMarkdown from "react-markdown";
import combineClassNames from "../hooks/combineClassNames";

type Props = { text: string; type: "question" | "answer" };

function DialogCard({ text, type }: Props) {
  const [voteState, setVoteState] = React.useState<"up" | "down" | "none">(
    "none"
  );
  const isQuestion = type === "question";

  return (
    <div className="flex space-x-3 w-full">
      <div className="">
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
                  p: ({ node, ...props }) => {
                    return <p className="mb-2" {...props} />;
                  },
                  code: ({ node, ...props }) => {
                    return <p className="" {...props} />;
                  },
                  pre: ({ node, ...props }) => {
                    // @ts-ignore
                    return <p className="" {...props} />;
                  },
                }}
              >
                {text}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <div>
          <svg
            onClick={() => {
              if (voteState === "up") {
                setVoteState("none");
              } else {
                setVoteState("up");
              }
            }}
            className={combineClassNames(
              voteState === "up" ? "fill-orange-500" : "fill-gray-400",
              "cursor-pointer"
            )}
            // className="fill-gray-400"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" />
          </svg>

          <svg
            onClick={() => {
              if (voteState === "down") {
                setVoteState("none");
              } else {
                setVoteState("down");
              }
            }}
            className={combineClassNames(
              voteState === "down" ? "fill-orange-500" : "fill-gray-400",
              "cursor-pointer"
            )}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z" />
          </svg>
        </div>
        {/* <div className="whitespace-nowrap text-right text-sm text-gray-500">
      <time dateTime={event.datetime}>{event.date}</time>
    </div> */}
      </div>
    </div>
  );
}

export default DialogCard;
