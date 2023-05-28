# PushAlert.co SDK 

This package provides an unofficial SDK for sending notifications using the PushAlert.co service. It allows users to send notifications to their subscribers using the PushAlert.co API.

**Disclaimer: This SDK is an unofficial implementation for interacting with the PushAlert.co service. While efforts have been made to ensure its functionality and reliability, please note that it does not have official support or endorsement from PushAlert.co.**

## Installation

Install the package using npm:

```bash
npm install pushalert-sdk
```

### Usage
Import the SDK class from the package

```bash
import SDK from 'pushalert-sdk';
```

Create an instance of the SDK by providing your PushAlert.co API key:

```bash
const apiKey = 'YOUR_API_KEY';
const sdk = new SDK(apiKey);
```

### Sending Notifications
Currently supported APIs:

1. sendToSingle: This API allows you to send a notification to a single subscriber. 

2. sendToAll: With this API, you can broadcast a notification to all subscribers. 

3. sendToMultiple: This API allows you to send notifications to multiple subscribers simultaneously. 

4. sendWithCustomAttributes: This API allows you to send notifications to multiple subscribers simultaneously with custom attributes.

5. getStats: This API allows you to get the stats of your notification.

6. deleteNotification: This API allows you to delete a scheduled notification.

#### 1. Send to All Subscribers
To send a notification to all subscribers, use the sendToAll method:
```bash
const options = {
  title: 'Your Title',
  message: 'Your Message',
  icon: 'http://yourwebsite.com/icon.png',
  url: 'https://yourwebsite.com',
};

sdk.sendToAll(options)
  .then(response => {
    console.log('Notification sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending notification:', error);
  });
```
#### 2. Send to a Single Subscriber
To send a notification to a single subscriber, use the sendToSingle method:
```bash
const options = {
  title: 'Your Title',
  message: 'Your Message',
  icon: 'http://yourwebsite.com/icon.png',
  url: 'https://yourwebsite.com',
  subscriber: 'SUBSCRIBER_ID',
};

sdk.sendToSingle(options)
  .then(response => {
    console.log('Notification sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending notification:', error);
  });
```
#### 3. Send to Multiple Subscribers
To send a notification to multiple subscribers, use the sendToMultiple method:

```bash
const options = {
  title: 'Your Title',
  message: 'Your Message',
  icon: 'http://yourwebsite.com/icon.png',
  url: 'https://yourwebsite.com',
  subscribers: ['SUBSCRIBER_ID1', 'SUBSCRIBER_ID2'],
};

sdk.sendToMultiple(options)
  .then(response => {
    console.log('Notification sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending notification:', error);
  });
```
#### 4. Send to Multiple Subscribers with Custom Attributes
To send a notification to multiple subscribers with custom attributes, use the sendWithCustomAttributes method:

```bash
sdk.sendWithCustomAttributes({
  title: 'Test Custom Attributes',
    message: 'Test Custom Attributes',
    url: 'https://www.yourwebsite.com/',
}).then((res) => {
  console.log("Response");
  console.log(res);
}
).catch((err) => {
  console.log(err);
}
);
```
#### 5. Get Stats of a Notification
To get the stats of a notification, use the getStats method:

```bash
sdk.getStats({id: 'NOTIFICATION_ID'})
  .then(response => {
    console.log('Notification stats:', response);
  })
  .catch(error => {
    console.error('Error getting notification stats:', error);
  });
```
#### 6. Delete a Scheduled Notification
To delete a scheduled notification, use the deleteNotification method:

```bash
sdk.deleteNotification({id: 'NOTIFICATION_ID'})
  .then(response => {
    console.log('Notification deleted successfully:', response);
  })
  .catch(error => {
    console.error('Error deleting notification:', error);
  });
```