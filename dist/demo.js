"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sdk_1 = __importDefault(require("./sdk"));
const sdk = new sdk_1.default(process.env.API_KEY);
function sendNotification() {
    return __awaiter(this, void 0, void 0, function* () {
        //  const res= await sdk
        //     .sendToAll({
        //       title: "Test from backend",
        //       message: "Test from backend",
        //       url: "https://bd-dev-env.app.blush-dating.com/settings",
        //     })
        //     .then((res) => {
        //       console.log("Response");
        //       console.log(res);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // console.log(res);
        sdk.sendToSingle({
            title: 'Single from backend',
            message: 'Single from backend',
            url: 'https://www.yourwebsite.com/',
            subscriber: 'pPeQPANTfNU1Ay53fT1FSOw==',
        });
    });
}
// sdk.sendToSingle({
//     title: 'Single from backend',
//     message: 'Single from backend',
//     url: 'https://www.yourwebsite.com/',
//     subscriber: 'pl+EM9QBF8q0QMQ4vPO4Y+Q==',
// });
// sdk
//   .sendToMultiple({
//     subscribers: ["pn8El0t5tSPvFWNpFtW/gXw==", "pl+EM9QBF8q0QMQ4vPO4Y+Q=="],
//     title: "Multiple from backend",
//     message: "Multiple from backend",
//     url: "https://www.yourwebsite.com/",
//   })
//   .then((res) => {
//     console.log("Response");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// sdk.sendWithCustomAttributes({
//   title: 'Test Custom Attributes',
//     message: 'Test Custom Attributes',
//     url: 'https://www.yourwebsite.com/',
// }).then((res) => {
//   console.log("Response");
//   console.log(res);
// }
// ).catch((err) => {
//   console.log(err);
// }
// );
// sdk.getStats({id: 119998682}).then((res) => {
//   console.log("Response");
//   console.log(res);
// }
// ).catch((err) => {
//   console.log(err);
// }
// );
// sdk
//   .deleteNotification({ id: 119998682 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
//119998682
sendNotification();
//# sourceMappingURL=demo.js.map