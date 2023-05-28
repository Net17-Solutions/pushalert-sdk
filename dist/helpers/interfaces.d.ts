/**
 * Represents the body options for a notification.
 */
export interface bodyOptions {
    /**
     * The icon for the notification.
     */
    icon?: string;
    /**
     * The URL associated with the notification.
     */
    url: string;
    /**
     * The title of the notification.
     */
    title: string;
    /**
     * The message content of the notification.
     */
    message: string;
    /**
     * The large image displayed in the notification.
     */
    large_image?: string;
    /**
     * The first action associated with the notification.
     */
    action1?: [{
        title: string;
        url: string;
    }];
    /**
     * The second action associated with the notification.
     */
    action2?: [{
        title: string;
        url: string;
    }];
    /**
     * The list of subscribers for the notification.
     */
    subscribers?: string[];
    /**
     * The specific subscriber for the notification.
     */
    subscriber?: string;
}
/**
 * Represents the options for an axios request.
 */
export interface axiosOptions {
    /**
     * The URL for the request.
     */
    url: string;
    /**
     * The body options for the request.
     */
    body: bodyOptions;
    /**
     * The API key for the request.
     */
    apiKey: string;
}
/**
 * Represents the options for sending a notification to a single subscriber.
 */
export interface SendToSingleInterfaceOptions extends bodyOptions {
    /**
     * The subscriber to send the notification to.
     */
    subscriber: string;
}
/**
 * Represents the options for sending a notification to multiple subscribers.
 */
export interface SendToMultipleInterfaceOptions extends bodyOptions {
    /**
     * The list of subscribers to send the notification to.
     */
    subscribers?: string[];
}
export interface SendWithCustomAttributesInterfaceOptions extends bodyOptions {
    /**
     * Title attribute for the notification.
     */
    title_attr?: string;
    /**
     * Message attribute for the notification.
     */
    message_attr?: string;
    /**
     * URL attribute for the notification.
     */
    url_attr?: string;
}
export interface IdParamInterfaceOptions {
    /**
     * Id of the notification.
     * @example 119998682
     */
    id: number;
}
