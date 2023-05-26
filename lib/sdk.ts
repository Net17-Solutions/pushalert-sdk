import { constants } from "./constants";
import { bodyOptions } from "./interfaces";
import { fetch } from "./client";

let _apiKey: string;
interface SendToSingleInterfaceOptions extends bodyOptions {
    subscriber: string;
  }
export default class SDK {
  constructor(apiKey: string) {
    _apiKey = apiKey;
  }

  async sendToAll(options: bodyOptions) {
    try {
      const response = await fetch({
        url: constants.sendToAll,
        body: options,
        apiKey: _apiKey,
      });
      response.data;
    } catch (error) {
      console.log("SOME ERROR", error);
    }
  }
  
  async sendToSingle(options:  SendToSingleInterfaceOptions ) {
    try {
      const response = await fetch({
        url: constants.sendToAll,
        body: options,
        apiKey: _apiKey,
      });
      response.data;
    } catch (error) {
      console.log("SOME ERROR", error);
    }
  }
}
