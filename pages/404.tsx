import React from "react";
import Link from "next/link";

function Custom404() {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <Link href="/">
        <div className=" text-white  text-3xl hover:text-blue-500">
          <span>{`Andy: "Go back `}</span>
          <span className="underline underline-offset-4">{`home`}</span>
          <span>{`, it's scary out here!"`}</span>
        </div>
      </Link>
    </div>
  );
}

export default Custom404;
