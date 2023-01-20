import React from "react";

type Props = {
  content: string;
};

function Card({ content }: Props) {
  return (
    <div className="rounded-lg bg-gray-50">
      <div className="px-4 py-2 text-sm">{content}</div>
    </div>
  );
}

export default Card;
