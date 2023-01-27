import React, { Dispatch, SetStateAction, useState } from "react";

type Index = { id: number; name: string };

export type Dialog = {
  query: string;
  answer: string;
  id: number;
  index: Index;
};

export type Answer = {
  cached?: boolean;
  id?: number;
  index?: string;
  negative?: number;
  positive?: number;
  query: string;
  query_type?: string;
  response?: string;
  uuid?: string;
  loading?: boolean;
};

interface DialogContext {
  conversation: Answer[];
  setConversation: Dispatch<React.SetStateAction<Answer[]>>;
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
  const [conversation, setConversation] = useState<Answer[]>([]);
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
