import { render, waitFor } from "@testing-library/react";
import FormVideo from "./FormVideo.component";
import userEvent from "@testing-library/user-event";
import { YoutubeService } from "../../../../services/Youtube/Youtube.service";
import { jest } from "@jest/globals";
import AppProviders from "../../../../providers";

jest.mock("../../../../services/Youtube/Youtube.service");

const youtubeMock = YoutubeService as jest.MockedClass<typeof YoutubeService>;

describe("<AppProviders>", () => {
  describe("When the user launch a research", () => {
    it("should call the Youtbe API", async () => {
      youtubeMock.prototype.search.mockResolvedValue([]);

      const search = jest.fn();
      const formVideo = render(
        <AppProviders>
          <FormVideo previousTextToSearch="" search={search} />
        </AppProviders>
      );

      userEvent.type(formVideo.getByTestId("searchBar"), "Benabar");

      userEvent.click(formVideo.getByTestId("searchBtn"));

      expect(search).toHaveBeenCalledWith("Benabar");
    });
  });
});
