import axios from "axios";
import { axiosOptions } from "./interfaces";

export async function fetch(options: axiosOptions) {
  return (await axios.post(options.url, options.body, {
    headers: {
      Authorization: `api_key=${options.apiKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })).data;
}
