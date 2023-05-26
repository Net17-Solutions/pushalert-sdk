"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apiKey;
class SDK {
    constructor(apiKey) {
        console.log("hello world");
        apiKey = apiKey;
    }
    sendToAll(options) {
        console.log("sending to all");
    }
}
exports.default = SDK;
