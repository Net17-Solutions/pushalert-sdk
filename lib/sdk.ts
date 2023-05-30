import { constants } from "./helpers/constants";
import {
  IdParamInterfaceOptions,
  SendToMultipleInterfaceOptions,
  SendToSingleInterfaceOptions,
  SendWithCustomAttributesInterfaceOptions,
  bodyOptions,
} from "./helpers/interfaces";
import { post, get } from "./helpers/client";

/**
 * Represents an SDK for sending push notifications.
 */
export default class SDK {
  private _apiKey: string;
  private readonly _sendUrl: string;

  /**
   * Initializes the SDK with an API key.
   * @param {string} apiKey - The API key for the SDK.
   */
  constructor(apiKey: string) {
    this._apiKey = apiKey;
    this._sendUrl = constants.sendUrl;
  }

  /**
   * Sends a push notification to all subscribers.
   * @param {bodyOptions} options - The options for the push notification.
   * @returns {Promise<any>} - A promise that resolves with the response data.
   */
  async sendToAll(options: bodyOptions): Promise<object> {
    try {
      const response = await post({
        options: {
          url: this._sendUrl,
          body: options,
          apiKey: this._apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  }

  /**
   * Sends a push notification to a single subscriber.
   * @param {SendToSingleInterfaceOptions} options - The options for the push notification.
   * @returns {Promise<any>} - A promise that resolves with the response data.
   */
  async sendToSingle(options: SendToSingleInterfaceOptions): Promise<object> {
    try {
      const response = await post({
        options: {
          url: this._sendUrl,
          body: options,
          apiKey: this._apiKey,
        },
      });      

      return response.data;
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  }

  /**
   * Sends a push notification to multiple subscribers.
   * @param {SendToMultipleInterfaceOptions} options - The options for the push notification.
   * @returns {Promise<any>} - A promise that resolves with the response data.
   */
  async sendToMultiple(
    options: SendToMultipleInterfaceOptions
  ): Promise<object> {
    const subscribers = JSON.stringify(options.subscribers);
    try {
      const response = await post({
        options: {
          url: this._sendUrl,
          body: { ...options, subscribers: subscribers as unknown as string[] },
          apiKey: this._apiKey,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  }
  /**
   * Sends a push notification with custom attributes.
   * @param {SendWithCustomAttributesInterfaceOptions} options - The options for sending the push notification with custom attributes.
   * @returns {Promise<object>} - A promise that resolves with the response data.
   */
  async sendWithCustomAttributes(
    options: SendWithCustomAttributesInterfaceOptions
  ): Promise<object> {
    try {
      const response = await post({
        options: {
          url: this._sendUrl,
          body: options,
          apiKey: this._apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  }
  /**
   * Retrieves push notification statistics for a specific notification.
   * @param {IdParamInterfaceOptions} options - The options for retrieving push notification statistics.
   * @returns {Promise<object>} - A promise that resolves with the response data.
   */
  async getStats(options: IdParamInterfaceOptions): Promise<object> {
    try {
      const response = await get({
        options: {
          url: `${constants.statsUrl}/${options.id}`,
          apiKey: this._apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  }
  /**
   * Deletes a scheduled push notification.
   * @param {IdParamInterfaceOptions} options - The options for deleting a scheduled notification.
   * @returns {Promise<object>} - A promise that resolves with the response data.
   */
  async deleteNotification(options: IdParamInterfaceOptions): Promise<object> {
    try {
      const response = await post({
        options: {
          url: `${constants.deleteScheduledNotification}/${options.id}`,
          apiKey: this._apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  }
}
