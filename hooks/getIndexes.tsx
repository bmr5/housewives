import React from "react";

const indexes = [
  { id: 1, name: "rhobh" },
  { id: 2, name: "stargate" },
  { id: 3, name: "wh40k" },
  { id: 4, name: "idk" },
];

function getIndexes() {
  //     const url = "https://api.askthings.app/query";
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer bofa-deez-nuts",
  //   };
  //   const data = await fetch(url, {
  //     method: "GET",
  //     headers,
  //     body: JSON.stringify({ query, index }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log({ err });
  //     });
  return indexes;
}

export default getIndexes;
