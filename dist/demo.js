"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sdk_1 = __importDefault(require("./sdk"));
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
console.log("process.env.API_KEY", process.env.API_KEY);
sdk
    .sendToMultiple({
    subscribers: ["pn8El0t5tSPvFWNpFtW/gXw==", "pl+EM9QBF8q0QMQ4vPO4Y+Q=="],
    title: "Multiple from backend",
    message: "Multiple from backend",
    url: "https://www.pushalert.co/",
})
    .then((res) => {
    console.log(res);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=demo.js.map