import { WebsocketService } from "../Websocket/Websocket.service";
import { MediaService } from "./Media.serivce";

jest.mock("../Websocket/Websocket.service");

const WebsocketServiceMock = WebsocketService as jest.MockedClass<
  typeof WebsocketService
>;

describe("When download the function is called", () => {
  it("should call the backend API to generate the file ", () => {
    const mediaService = new MediaService();
    const callback = jest.fn();
    mediaService.download("url to download", callback);

    expect(
      WebsocketServiceMock.prototype.simpleCallAndResponse
    ).toHaveBeenCalled();
  });
});
