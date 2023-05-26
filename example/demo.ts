import dotenv from "dotenv";
dotenv.config();
import Sdk from '../lib/sdk';

const sdk = new Sdk(process.env.API_KEY);
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