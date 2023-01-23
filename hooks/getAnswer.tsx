import React from "react";

type Props = {
  query: string;
  index: string;
  onSuccess: (data: any) => void;
  onError: (err: any) => void;
};

const url = "https://api.askthings.app/query";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer bofa-deez-nuts",
};

function getAnswer({ query, index, onSuccess, onError }: Props) {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, index }),
  })
    .then((res) => res.json())
    .then((data) => {
      onSuccess(data);
      return data;
    })
    .catch((err) => {
      onError(err);
      console.log({ err });
    });
}

export default getAnswer;
