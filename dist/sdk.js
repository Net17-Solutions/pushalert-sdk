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
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const client_1 = require("./client");
let _apiKey;
class SDK {
    constructor(apiKey) {
        _apiKey = apiKey;
    }
    sendToAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.fetch)({
                    url: constants_1.constants.sendUrl,
                    body: options,
                    apiKey: _apiKey,
                });
                return response.data;
            }
            catch (error) {
                console.log("PUSH ALERT ERROR: ", error.message);
            }
        });
    }
    sendToSingle(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.fetch)({
                    url: constants_1.constants.sendUrl,
                    body: options,
                    apiKey: _apiKey,
                });
                console.log(response);
                return response.data;
            }
            catch (error) {
                console.log("SOME ERROR", error);
            }
        });
    }
    sendToMultiple(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.fetch)({
                    url: constants_1.constants.sendUrl,
                    body: options,
                    apiKey: _apiKey,
                });
                return response.data;
            }
            catch (error) {
                console.error("PUSH ALERT ERROR, Reason: ", error.message, error.response.statusText);
            }
        });
    }
}
exports.default = SDK;
//# sourceMappingURL=sdk.js.map