import React, { useCallback, useContext, useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { DialogContext } from "../providers/DialogProvider";
import getAnswer from "../hooks/getAnswer";

type Props = {};

function Search({}: Props) {
  const [input, setInput] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const { conversation, setConversation, selectedIndex } =
    useContext(DialogContext);
  const searchBarRef = React.useRef<HTMLInputElement>(null);

  const askQuestion = useCallback(
    (query: string) => {
      console.log("asking question");
      if (
        conversation != null &&
        setConversation != null &&
        selectedIndex != null &&
        query !== ""
      ) {
        setDisabled(true);

        let newConversation = [...conversation, query, "setLoadingIndicator"];
        setConversation(newConversation);
        setInput("");

        const answerIndexToReplace = newConversation.length - 1;
        const onSuccess = (data: any) => {
          console.log("onSucess");
          newConversation[answerIndexToReplace] = data.answer;
          setConversation([...newConversation]);
          setDisabled(false);
        };
        const onError = (err: any) => {
          newConversation[answerIndexToReplace] =
            "Sorry, we were unable to answer your question.";
          setConversation([...newConversation]);
          setDisabled(false);
        };

        getAnswer({ query, index: selectedIndex.name, onSuccess, onError });
      }
    },
    [conversation, selectedIndex, setConversation]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    askQuestion(input);
  };

  // add on enter key press
  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (
        event.code === "Enter" ||
        (event.code === "NumpadEnter" && disabled === false)
      ) {
        event.preventDefault();
        askQuestion(input);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [askQuestion, disabled, input]);

  // initial focus
  useEffect(() => {
    searchBarRef?.current?.focus();
  }, []);

  return (
    <form
      className="relative mt-1 flex items-center w-full"
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        ref={searchBarRef}
        disabled={disabled}
        type="text"
        name="search"
        id="search"
        placeholder={
          disabled
            ? "One sec, working on an answer"
            : "Type your question here..."
        }
        className="text-ellipsis block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        disabled={disabled}
        type="submit"
        className="absolute inset-y-0 right-0 top-2.5 flex pr-1.5"
      >
        <PaperAirplaneIcon
          className="h-4 w-4 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}

export default Search;
