import { HttpService } from "../Http/Http.service";
import { YoutubeService } from "./Youtube.service";

jest.mock("../Http/Http.service");

const httpMock = HttpService as jest.MockedClass<typeof HttpService>;

describe("Youtube service", () => {
  describe("When call API search return videos", () => {
    it("should return a list of video", async () => {
      httpMock.prototype.get = jest.fn().mockReturnValue({
        data: {
          items: [
            {
              id: { videoId: "47" },
              snippet: {
                thumbnails: { high: { url: "image url" } },
                title: "Orelsan - la quete",
              },
            },
            {
              id: { videoId: "48" },
              snippet: {
                thumbnails: { high: { url: "image url 2" } },
                title: "Orelsan - basique",
              },
            },
          ],
        },
      });

      const youtubeService = new YoutubeService();
      const videos = await youtubeService.search("Orelsan");

      expect(httpMock.prototype.get).toHaveBeenCalled();
      expect(videos.length).toEqual(2);
      expect(videos[0].id).toEqual("47");
      expect(videos[0].image).toEqual("image url");
      expect(videos[0].title).toEqual("Orelsan - la quete");
      expect(videos[1].id).toEqual("48");
      expect(videos[1].image).toEqual("image url 2");
      expect(videos[1].title).toEqual("Orelsan - basique");
    });
  });
  describe("When call API search return nothing", () => {
    it("should return an empty list of video", async () => {
      httpMock.prototype.get = jest.fn().mockReturnValue(null);

      const youtubeService = new YoutubeService();
      const videos = await youtubeService.search("Orelsan");

      expect(httpMock.prototype.get).toHaveBeenCalled();
      expect(videos.length).toEqual(0);
    });
  });
});
