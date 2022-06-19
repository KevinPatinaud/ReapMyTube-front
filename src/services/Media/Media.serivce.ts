import { config } from "../../Constants";
import { Message } from "stompjs";
import { v4 as uuidv4 } from "uuid";
import { WebsocketService } from "../Websocket/Websocket.service";

export class MediaService {
  static websocketService = null;

  static getWebsocketService(): WebsocketService {
    return MediaService.websocketService == null
      ? new WebsocketService()
      : MediaService.websocketService;
  }

  download(urlToDownload: string, callback: Function) {
    this.generateFile(urlToDownload, (idMediaGenerated: string) => {
      callback();
      this.downloadFile(idMediaGenerated);
    });
  }

  private generateFile(urlToDownload: string, callback: Function) {
    const idCanal = uuidv4();

    const downloadMessage = {
      idCanal: idCanal,
      urlToDownload: urlToDownload,
    };

    MediaService.getWebsocketService().simpleCallAndResponse(
      "/app/generateMedia",
      JSON.stringify(downloadMessage),
      `/media/${idCanal}/mediaGenerationEnd`,
      (payload: Message) => {
        callback(idCanal);
      }
    );
  }

  private downloadFile(idCanal: string) {
    console.log(`Download of : ${idCanal}`);

    const frame = document.createElement("iframe");
    frame.src = `${config.API_DOWNLOAD_MEDIA_URL}${idCanal}/file`;
    frame.style.visibility = "hidden";
    frame.style.display = "none";
    document.body.appendChild(frame);
  }
}
