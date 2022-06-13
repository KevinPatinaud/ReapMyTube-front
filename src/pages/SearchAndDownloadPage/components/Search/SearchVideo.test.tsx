import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchVideo from "./SearchVideo.component";
import userEvent from "@testing-library/user-event";
import { HttpService } from "../../../../services/Http/Http.service";
import { YoutubeService } from "../../../../services/Youtube/Youtube.service";
import { jest } from "@jest/globals";
import { JsxEmit } from "typescript";
import AppProviders from "../../../../providers";
import { WebsocketService } from "../../../../services/Websocket/Websocket.service";

jest.mock("../../../../services/Youtube/Youtube.service");

const youtubeMock = YoutubeService as jest.MockedClass<typeof YoutubeService>;

describe("When the user launch a research", () => {
  it("should call the Youtbe API", async () => {
    youtubeMock.prototype.search.mockResolvedValue([]);

    const searchVideo = render(
      <AppProviders>
        <SearchVideo setVideoList={() => {}} />
      </AppProviders>
    );

    userEvent.type(searchVideo.getByTestId("searchBar"), "Benabar");

    userEvent.click(searchVideo.getByTestId("searchBtn"));

    expect(youtubeMock.prototype.search).toHaveBeenCalledWith("Benabar");
  });
});
