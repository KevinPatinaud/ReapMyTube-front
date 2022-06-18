import { HttpService } from "../Http/Http.service";
import { YoutubeService } from "./Youtube.service";

jest.mock("../Http/Http.service");

const httpMock = HttpService as jest.MockedClass<typeof HttpService>;

describe("Youtube service", () => {
  describe("When call API search", () => {
    it("should return a list of video", () => {
      httpMock.prototype.get = jest.fn();

      const youtubeService = new YoutubeService();
      youtubeService.search("Orelsan");

      expect(httpMock.prototype.get).toHaveBeenCalled();
    });
  });
});
