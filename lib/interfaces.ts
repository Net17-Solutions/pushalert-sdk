export interface bodyOptions {
  icon?: string;
  url: string;
  title: string;
  message: string;
  large_image?: string;
  action1?: [{ title: string; url: string }];
  action2?: [{ title: string; url: string }];
}
export interface axiosOptions {
  url: string;
  body: bodyOptions;
  apiKey: string;
}
export interface SendToSingleInterfaceOptions extends bodyOptions {
  subscriber: string;
}
export interface SendToMultipleInterfaceOptions extends bodyOptions {
  subscribers?: any;
}
