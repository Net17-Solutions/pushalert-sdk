"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = __importDefault(require("./lib/sdk"));
const sdk = new sdk_1.default('bf62d2ac1699c192650f17377169becf');
sdk.sendToAll({
    title: 'Test from backend',
    message: 'Test from backend',
    url: 'https://www.pushalert.co/',
});
sdk.sendToSingle({
    title: 'Single from backend',
    message: 'Single from backend',
    url: 'https://www.pushalert.co/',
    subscriber: 'pl+EM9QBF8q0QMQ4vPO4Y+Q==',
});
//# sourceMappingURL=demo.js.map