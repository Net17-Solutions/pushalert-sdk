import dotenv from "dotenv";
dotenv.config();
import Sdk from "./sdk";

const sdk = new Sdk(process.env.API_KEY as string);

async function sendNotification() {
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