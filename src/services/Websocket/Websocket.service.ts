import SockJS from "sockjs-client";
import { Message, over } from "stompjs";
import { config } from "../../Constants";

export class WebsocketService {
  stompClient;

  constructor() {
    this.onError = this.onError.bind(this);
    this.onResponseFromServer = this.onResponseFromServer.bind(this);

    let Sock = new SockJS(config.WEBSOCKET_ENTRY_POINT);
    this.stompClient = over(Sock);
    this.stompClient.connect({}, () => {}, this.onError);
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
        this.stompClient.unsubscribe(urlToSubscribe);
      });

      this.stompClient.send(urlToCall, {}, message);
    }
  }
}
