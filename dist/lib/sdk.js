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
                    url: constants_1.constants.sendToAll,
                    body: options,
                    apiKey: _apiKey,
                });
                response.data;
            }
            catch (error) {
                console.log("SOME ERROR", error);
            }
        });
    }
    sendToSingle(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.fetch)({
                    url: constants_1.constants.sendToAll,
                    body: options,
                    apiKey: _apiKey,
                });
                response.data;
            }
            catch (error) {
                console.log("SOME ERROR", error);
            }
        });
    }
}
exports.default = SDK;
//# sourceMappingURL=sdk.js.map