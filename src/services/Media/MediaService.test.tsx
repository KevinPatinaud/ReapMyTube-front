import { MediaService } from "./Media.serivce";

jest.mock("./Media.serivce");

const MediaServiceMock = MediaService as jest.MockedClass<typeof MediaService>;

describe("When download function is called from an other component", () => {
  it("should generate and download the file  ", () => {
    MediaServiceMock.getWebsocketService = jest.fn().mockReturnValue(null);
    MediaServiceMock.prototype.download = jest.fn();

    let mediaServiceMock = new MediaServiceMock();
    const callback = jest.fn();
    mediaServiceMock.download("url to download", callback);

    expect(mediaServiceMock.download).toHaveBeenCalled;
  });
});
