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
exports.fetch = void 0;
const axios_1 = __importDefault(require("axios"));
function fetch(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = options.body;
        console.log("data", data);
        return (yield axios_1.default.post(options.url, data, {
            headers: {
                Authorization: `api_key=${options.apiKey}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })).data;
    });
}
exports.fetch = fetch;
//# sourceMappingURL=client.js.map