import axios from "axios";
import { axiosOptions } from "./interfaces";

export async function fetch(options: axiosOptions) {
  const data=options.body
  console.log("data",data);
  
  return (
    await axios.post(options.url, data, {
      headers: {
        Authorization: `api_key=${options.apiKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
  ).data;
}
