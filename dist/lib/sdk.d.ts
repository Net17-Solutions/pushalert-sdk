import { bodyOptions } from "./interfaces";
interface SendToSingleInterfaceOptions extends bodyOptions {
    subscriber: string;
}
export default class SDK {
    constructor(apiKey: string);
    sendToAll(options: bodyOptions): Promise<void>;
    sendToSingle(options: SendToSingleInterfaceOptions): Promise<void>;
}
export {};
