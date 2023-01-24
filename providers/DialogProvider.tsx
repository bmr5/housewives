import React, { Dispatch, SetStateAction, useState } from "react";

type Index = { id: number; name: string };

export type Dialog = {
  query: string;
  answer: string;
  id: number;
  index: Index;
};

interface DialogContext {
  conversation: string[];
  setConversation: Dispatch<React.SetStateAction<string[]>>;
  selectedIndex: Index;
  setSelectedIndex: Dispatch<SetStateAction<Index>>;
}

export const DialogContext = React.createContext<Partial<DialogContext>>({
  conversation: [],
});

type Props = {
  children: React.ReactNode;
};

export const DialogProvider = ({ children }: Props) => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<Index>({
    id: 1,
    name: "rhobh",
  });

  return (
    <DialogContext.Provider
      value={{
        conversation,
        setConversation,
        selectedIndex,
        setSelectedIndex,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
