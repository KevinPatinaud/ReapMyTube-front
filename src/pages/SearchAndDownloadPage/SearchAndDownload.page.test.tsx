import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import wrapper from "../../helper/test-context-builder";
import { video } from "../../model/video";
import { MediaService } from "../../services/Media/Media.serivce";
import { YoutubeService } from "../../services/Youtube/Youtube.service";
import SearchAndDownloadPage from "./SearchAndDownload.page";

jest.mock("../../services/Youtube/Youtube.service");

const youtubeMock = YoutubeService as jest.MockedClass<typeof YoutubeService>;

const MediaServiceMock = MediaService as jest.MockedClass<typeof MediaService>;
MediaServiceMock.getWebsocketService = jest.fn().mockReturnValue(null);
MediaServiceMock.prototype.download = jest.fn();

const searchAVideo = async () => {
  youtubeMock.prototype.search.mockResolvedValue([
    { id: "id 1", title: "video title Orelsan", image: "url image" },
  ] as video[]);
  render(<SearchAndDownloadPage />, { wrapper });
  userEvent.type(screen.getByTestId("searchBar"), "Orelsan");
  userEvent.click(screen.getByTestId("searchBtn"));
  await waitFor(() => screen.getByText("video title Orelsan"));
};

describe("<SearchAndDownloadPage>", () => {
  describe("when the page is oppened", () => {
    it("rend correctement", () => {
      const container = render(<SearchAndDownloadPage />, { wrapper });
      expect(container).toMatchSnapshot();
    });
  });

  describe("when the user search a video", () => {
    it("should display the searchbar", async () => {
      searchAVideo();
      expect(youtubeMock.prototype.search).toHaveBeenCalledWith("Orelsan");
      await waitFor(() =>
        expect(screen.getByText("video title Orelsan")).toBeInTheDocument()
      );
    });
  });

  describe("when the user click on a video", () => {
    it("should launch the download and show the modal", async () => {
      await searchAVideo();
      userEvent.click(screen.getByText("video title Orelsan"));
      await waitFor(() =>
        expect(
          screen.getByText(
            "The generation of your media have been well started, but it can take several minutes to generate the file."
          )
        ).toBeInTheDocument()
      );
    });
  });
});
