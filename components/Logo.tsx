import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="w-full">
      <Image
        src="/housewives-logo.jpeg"
        alt="Housewives Logo"
        width={175}
        height={80}
      />
    </div>
  );
}

export default Logo;
