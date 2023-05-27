import { SendToMultipleInterfaceOptions, SendToSingleInterfaceOptions, bodyOptions } from "./interfaces";
export default class SDK {
    constructor(apiKey: string);
    sendToAll(options: bodyOptions): Promise<any>;
    sendToSingle(options: SendToSingleInterfaceOptions): Promise<any>;
    sendToMultiple(options: SendToMultipleInterfaceOptions): Promise<any>;
}
