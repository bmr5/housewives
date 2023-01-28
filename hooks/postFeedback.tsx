import { getCookie } from "./cookieUtils";

const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.AUTHORIZATION ?? "",
  credentials: "include",
};

type Props = {
  method: "upvote" | "downvote";
  id?: number;
  onSuccess?: (data: any) => void;
  onError?: (err: any) => void;
};

function postFeedback({ onSuccess, onError, method, id }: Props) {
  const uuid = getCookie({ name: "sesh" });
  const url = `https://api.dev.askthings.app/rate-response/${uuid}/${id}/${method}`;

  return fetch(url, {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      onSuccess && onSuccess(data);
      console.log({ data });
      return data;
    })
    .catch((err) => {
      onError && onError(err);
      console.log({ err });
    });
}

export default postFeedback;
