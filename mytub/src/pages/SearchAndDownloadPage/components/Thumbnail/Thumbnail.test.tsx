import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { video } from "../../../../model/video";
import Thumbnail from "./thumbnail.component";
import userEvent from "@testing-library/user-event";

describe("When video were loaded", () => {
  it("should display videos", () => {
    let thumbnail = render(
      <Thumbnail
        video={{ id: "1", title: "Le tigre du Népal", image: "url" } as video}
        onClick={() => {}}
      />
    );

    expect(screen.findByText("Le tigre du Népal"));
  });
});

describe("When a video is selected", () => {
  it("should download the video", async () => {
    let video = { id: "1", title: "Le tigre du Népal", image: "url" } as video;

    let thumbnail = render(<Thumbnail video={video} onClick={() => {}} />);

    await userEvent.click(thumbnail.getByTestId("thumbnail1"));

    expect(screen.findByTestId("loader1"));
  });
});
