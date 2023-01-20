import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
function Search() {
  return (
    <div>
      <div className="relative mt-1 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type your question here..."
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 top-3 flex pr-1.5">
          <PaperAirplaneIcon
            className="h-4 w-4 flex-shrink-0 text-gray-700"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
