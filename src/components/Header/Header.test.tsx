import { render, screen } from "@testing-library/react";
import wrapper from "../../helper/test-context-builder";
import Header from "./Header";

describe("<Header/>", () => {
  describe("when the header is display", () => {
    it("should contain the image and the language buttons", () => {
      render(<Header />, { wrapper });
      expect(screen.findByTestId("HeaderImg"));
      expect(screen.getByTestId("fr"));
      expect(screen.getByTestId("gb"));
    });
  });
});
