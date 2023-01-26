type Props = {
  query: string;
  index: string;
  onSuccess: (data: any) => void;
  onError: (err: any) => void;
};

const url = "https://api.askthings.app/hyde_query";
const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.AUTHORIZATION ?? "",
  credentials: "include",
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
