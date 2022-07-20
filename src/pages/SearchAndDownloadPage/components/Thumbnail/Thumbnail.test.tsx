import { render, screen } from "@testing-library/react";
import { video } from "../../../../model/video";
import Thumbnail from "./Thumbnail";
import userEvent from "@testing-library/user-event";
import AppProviders from "../../../../providers";
import { MediaService } from "../../../../services/Media/Media.serivce";
import wrapper from "../../../../helper/test-context-builder";
import { mediaType } from "../DownloadFormat/DownloadFormat";

const MediaServiceMock = MediaService as jest.MockedClass<typeof MediaService>;
MediaServiceMock.getWebsocketService = jest.fn().mockReturnValue(null);
MediaServiceMock.prototype.download = jest.fn();

describe("<Thumbnail>", () => {
  describe("When video were loaded", () => {
    it("should display videos", () => {
      render(
        <AppProviders>
          <Thumbnail
            video={
              { id: "1", title: "Le tigre du Népal", image: "url" } as video
            }
            formatToDownload={mediaType.audio}
            onClick={() => {}}
          />
        </AppProviders>
      );

      expect(screen.findByText("Le tigre du Népal"));
    });
  });

  describe("When a video is selected", () => {
    it("should download the video", async () => {
      let video = {
        id: "1",
        title: "Le tigre du Népal",
        image: "url",
      } as video;

      render(
        <Thumbnail
          video={video}
          formatToDownload={mediaType.audio}
          onClick={() => {}}
        />,
        {
          wrapper,
        }
      );

      userEvent.click(screen.getByTestId("thumbnail1"));

      expect(screen.findByTestId("loader1"));
    });
  });
});
