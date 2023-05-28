import axios from "axios";

export async function post({ options }) {
  const data = options.body;
  return await axios.post(options.url, data, {
    headers: {
      Authorization: `api_key=${options.apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
export async function get({ options }) {
  return await axios.get(options.url, {
    headers: {
      Authorization: `api_key=${options.apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
