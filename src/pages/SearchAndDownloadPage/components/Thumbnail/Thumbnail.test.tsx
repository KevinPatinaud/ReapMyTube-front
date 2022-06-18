import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { video } from "../../../../model/video";
import Thumbnail from "./thumbnail.component";
import userEvent from "@testing-library/user-event";
import AppProviders from "../../../../providers";
import { MediaService } from "../../../../services/Media/Media.serivce";
import { act } from "react-dom/test-utils";

const MediaServiceMock = MediaService as jest.MockedClass<typeof MediaService>;
MediaServiceMock.getWebsocketService = jest.fn().mockReturnValue(null);
MediaServiceMock.prototype.download = jest.fn();

describe("<Thumbnail>", () => {
  describe("When video were loaded", () => {
    it("should display videos", () => {
      let thumbnail = render(
        <AppProviders>
          <Thumbnail
            videoToDisplay={
              { id: "1", title: "Le tigre du Népal", image: "url" } as video
            }
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
        <AppProviders>
          <Thumbnail videoToDisplay={video} onClick={() => {}} />
        </AppProviders>
      );

      act(() => {
        userEvent.click(screen.getByTestId("thumbnail1"));
      });

      expect(screen.findByTestId("loader1"));
    });
  });
});
