import React from "react";

type Props = {
  content: string;
};

function Card({ content }: Props) {
  return (
    <div className="rounded-lg bg-gray-50">
      <div className="px-2 py-2 md:px-4 text-xxs md:text-sm h-12 flex justify-center items-center">
        {content}
      </div>
    </div>
  );
}

export default Card;
