import { getCookie, setCookie } from "./cookieUtils";

type Props = {
  query: string;
  index: string;
  onSuccess: (data: any) => void;
  onError: (err: any) => void;
};

const url = "https://api.dev.askthings.app/query";
const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION ?? "",
  credentials: "include",
};

function getAnswer({ query, index, onSuccess, onError }: Props) {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, index_name: index, query_type: "vanilla" }),
  })
    .then((res) => res.json())
    .then((data) => {
      onSuccess(data);
      const { uuid } = data;
      if (!getCookie({ name: "sesh" })) {
        setCookie({ name: "sesh", value: uuid });
      }
      return data;
    })
    .catch((err) => {
      onError(err);
      console.log({ err });
    });
}

export default getAnswer;
