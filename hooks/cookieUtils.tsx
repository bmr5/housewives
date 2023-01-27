type getCookieParams = {
  name: string;
};

export function getCookie({ name }: getCookieParams) {
  return localStorage.getItem(name);
}

type setCookieParams = {
  name: string;
  value: string;
  expiredays?: number;
};

export function setCookie({ name, value, expiredays }: setCookieParams) {
  return localStorage.setItem(name, value);
}
