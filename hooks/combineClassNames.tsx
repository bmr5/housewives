import React from "react";

function combineClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default combineClassNames;
