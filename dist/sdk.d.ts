import { IdParamInterfaceOptions, SendToMultipleInterfaceOptions, SendToSingleInterfaceOptions, SendWithCustomAttributesInterfaceOptions, bodyOptions } from "./helpers/interfaces";
/**
 * Represents an SDK for sending push notifications.
 */
export default class SDK {
    private _apiKey;
    private readonly _sendUrl;
    /**
     * Initializes the SDK with an API key.
     * @param {string} apiKey - The API key for the SDK.
     */
    constructor(apiKey: string);
    /**
     * Sends a push notification to all subscribers.
     * @param {bodyOptions} options - The options for the push notification.
     * @returns {Promise<any>} - A promise that resolves with the response data.
     */
    sendToAll(options: bodyOptions): Promise<object>;
    /**
     * Sends a push notification to a single subscriber.
     * @param {SendToSingleInterfaceOptions} options - The options for the push notification.
     * @returns {Promise<any>} - A promise that resolves with the response data.
     */
    sendToSingle(options: SendToSingleInterfaceOptions): Promise<object>;
    /**
     * Sends a push notification to multiple subscribers.
     * @param {SendToMultipleInterfaceOptions} options - The options for the push notification.
     * @returns {Promise<any>} - A promise that resolves with the response data.
     */
    sendToMultiple(options: SendToMultipleInterfaceOptions): Promise<object>;
    /**
     * Sends a push notification with custom attributes.
     * @param {SendWithCustomAttributesInterfaceOptions} options - The options for sending the push notification with custom attributes.
     * @returns {Promise<object>} - A promise that resolves with the response data.
     */
    sendWithCustomAttributes(options: SendWithCustomAttributesInterfaceOptions): Promise<object>;
    /**
     * Retrieves push notification statistics for a specific notification.
     * @param {IdParamInterfaceOptions} options - The options for retrieving push notification statistics.
     * @returns {Promise<object>} - A promise that resolves with the response data.
     */
    getStats(options: IdParamInterfaceOptions): Promise<object>;
    /**
     * Deletes a scheduled push notification.
     * @param {IdParamInterfaceOptions} options - The options for deleting a scheduled notification.
     * @returns {Promise<object>} - A promise that resolves with the response data.
     */
    deleteNotification(options: IdParamInterfaceOptions): Promise<object>;
}
