# PushAlert.co Unofficial SDK

This package provides an unofficial SDK for sending notifications using the PushAlert.co service. It allows users to send notifications to their subscribers using the PushAlert.co API.

**Note: This SDK is not officially supported or endorsed by PushAlert.co. Use it at your own risk.**

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
#### Send to All Subscribers
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
#### Send to a Single Subscriber
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
#### Send to Multiple Subscribers
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