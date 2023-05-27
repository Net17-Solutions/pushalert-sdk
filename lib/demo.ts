import dotenv from "dotenv";
dotenv.config();
import Sdk from "./sdk";

const sdk = new Sdk(process.env.API_KEY as string);
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
