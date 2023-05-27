import { constants } from "./constants";
import {
  SendToMultipleInterfaceOptions,
  SendToSingleInterfaceOptions,
  bodyOptions,
} from "./interfaces";
import { fetch } from "./client";

let _apiKey: string;

export default class SDK {
  constructor(apiKey: string) {
    _apiKey = apiKey;
  }

  async sendToAll(options: bodyOptions) {
    try {
      const response = await fetch({
        url: constants.sendUrl,
        body: options,
        apiKey: _apiKey,
      });
      return response.data;
    } catch (error) {
      console.log("PUSH ALERT ERROR: ", error.message);
    }
  }

  async sendToSingle(options: SendToSingleInterfaceOptions) {
    try {
      const response = await fetch({
        url: constants.sendUrl,
        body: options,
        apiKey: _apiKey,
      });
      console.log(response);

      return response.data;
    } catch (error) {
      console.log("SOME ERROR", error);
    }
  }
  async sendToMultiple(options: SendToMultipleInterfaceOptions) {
    const subscribers = JSON.stringify(options.subscribers);
    try {
      const response = await fetch({
        url: constants.sendUrl,
        body: { ...options, subscribers: subscribers as unknown as string[] },
        apiKey: _apiKey,
      });
      return response.data;
    } catch (error) {
      console.error(
        "PUSH ALERT ERROR, Reason: ",
        error.message,
        error.response.statusText
      );
    }
  }
}
