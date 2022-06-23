import SockJS from "sockjs-client";
import stompjs, { Client, Message } from "stompjs";
import { config } from "../../Constants";

export class WebsocketService {
  stompClient: Client | undefined = undefined;

  constructor() {
    this.onError = this.onError.bind(this);
    this.onResponseFromServer = this.onResponseFromServer.bind(this);
  }

  getStompClient(): Client {
    if (!this.stompClient) {
      const Sock = new SockJS(config.WEBSOCKET_ENTRY_POINT);
      this.stompClient = stompjs.over(Sock);
      this.stompClient.connect({}, () => {}, this.onError);
    }
    return this.stompClient;
  }

  onError(err: any) {
    console.error(err);
  }

  onResponseFromServer(payload: Message) {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
  }

  simpleCallAndResponse(
    urlToCall: string,
    message: string,
    urlToSubscribe: string,
    callback: (payload: Message) => void
  ) {
    if (this.stompClient) {
      this.stompClient.subscribe(urlToSubscribe, (payload: Message) => {
        callback(payload);
        this.stompClient?.unsubscribe(urlToSubscribe);
      });

      this.stompClient.send(urlToCall, {}, message);
    }
  }
}
