"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sdk_1 = __importDefault(require("../lib/sdk"));
const sdk = new sdk_1.default(process.env.API_KEY);
// sdk.sendToAll({
//   title: 'Test from backend',  
//   message: 'Test from backend', 
//   url: 'https://www.pushalert.co/',
// });
// sdk.sendToSingle({
//     title: 'Single from backend',
//     message: 'Single from backend',
//     url: 'https://www.pushalert.co/',
//     subscriber: 'pl+EM9QBF8q0QMQ4vPO4Y+Q==',
// });
//# sourceMappingURL=demo.js.map