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
const constants_1 = require("./helpers/constants");
const client_1 = require("./helpers/client");
/**
 * Represents an SDK for sending push notifications.
 */
class SDK {
    /**
     * Initializes the SDK with an API key.
     * @param {string} apiKey - The API key for the SDK.
     */
    constructor(apiKey) {
        this._apiKey = apiKey;
        this._sendUrl = constants_1.constants.sendUrl;
    }
    /**
     * Sends a push notification to all subscribers.
     * @param {bodyOptions} options - The options for the push notification.
     * @returns {Promise<any>} - A promise that resolves with the response data.
     */
    sendToAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.post)({
                    options: {
                        url: this._sendUrl,
                        body: options,
                        apiKey: this._apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error("Error occurred:", error.message);
                throw error;
            }
        });
    }
    /**
     * Sends a push notification to a single subscriber.
     * @param {SendToSingleInterfaceOptions} options - The options for the push notification.
     * @returns {Promise<any>} - A promise that resolves with the response data.
     */
    sendToSingle(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.post)({
                    options: {
                        url: this._sendUrl,
                        body: options,
                        apiKey: this._apiKey,
                    },
                });
                console.log(response);
                return response.data;
            }
            catch (error) {
                console.error("Error occurred:", error.message);
                throw error;
            }
        });
    }
    /**
     * Sends a push notification to multiple subscribers.
     * @param {SendToMultipleInterfaceOptions} options - The options for the push notification.
     * @returns {Promise<any>} - A promise that resolves with the response data.
     */
    sendToMultiple(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscribers = JSON.stringify(options.subscribers);
            try {
                const response = yield (0, client_1.post)({
                    options: {
                        url: this._sendUrl,
                        body: Object.assign(Object.assign({}, options), { subscribers: subscribers }),
                        apiKey: this._apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error("Error occurred:", error.message);
                throw error;
            }
        });
    }
    /**
     * Sends a push notification with custom attributes.
     * @param {SendWithCustomAttributesInterfaceOptions} options - The options for sending the push notification with custom attributes.
     * @returns {Promise<object>} - A promise that resolves with the response data.
     */
    sendWithCustomAttributes(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.post)({
                    options: {
                        url: this._sendUrl,
                        body: options,
                        apiKey: this._apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error("Error occurred:", error.message);
                throw error;
            }
        });
    }
    /**
     * Retrieves push notification statistics for a specific notification.
     * @param {IdParamInterfaceOptions} options - The options for retrieving push notification statistics.
     * @returns {Promise<object>} - A promise that resolves with the response data.
     */
    getStats(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.get)({
                    options: {
                        url: `${constants_1.constants.statsUrl}/${options.id}`,
                        apiKey: this._apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error("Error occurred:", error.message);
                throw error;
            }
        });
    }
    /**
     * Deletes a scheduled push notification.
     * @param {IdParamInterfaceOptions} options - The options for deleting a scheduled notification.
     * @returns {Promise<object>} - A promise that resolves with the response data.
     */
    deleteNotification(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, client_1.post)({
                    options: {
                        url: `${constants_1.constants.deleteScheduledNotification}/${options.id}`,
                        apiKey: this._apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                console.error("Error occurred:", error.message);
                throw error;
            }
        });
    }
}
exports.default = SDK;
//# sourceMappingURL=sdk.js.map