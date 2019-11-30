import merge from "lodash/merge";

class HTTPError extends Error {
  constructor(status, message) {
    super(status, message);
    this.name = "HTTPError";
  }
}

export const catchHTTPError = async res => {
  const { status } = res;

  if (status < 200 || status >= 400) {
    const { message } = await res.json();
    throw new HTTPError(status, message);
  }

  return res;
};

const request = (resource, options) => {
  fetch(
    `${process.env.REACT_APP_API_HOST}/api/v1/${resource}`,
    merge({ headers: { "Content-Type": "application/json" } }, options)
  )
    .then(catchHTTPError)
    .then(res => res.json());
};

export const get = (url, options = {}) =>
  request(url, merge(options, { method: "GET" }));

export const post = (url, data, options = {}) =>
  request(url, merge(options, { method: "POST", body: JSON.stringify(data) }));
