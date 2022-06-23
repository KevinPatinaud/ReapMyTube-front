import { fireEvent, render, screen } from "@testing-library/react";
import ChangeValueButton from "./ChangeValueButton.component";

describe("<ChangeValueButton>", () => {
  describe("when the button is displayed", () => {
    it("should displayed the first value", () => {
      render(<ChangeValueButton values={["A", "B", "C"]} />);
      expect(screen.getByText("A")).toBeVisible();
    });
  });
  describe("when the user click on the button", () => {
    it("should displayed the next value", () => {
      render(<ChangeValueButton values={["A", "B", "C"]} />);
      expect(screen.getByText("A")).toBeVisible();

      fireEvent.click(screen.getByText("A"));
      expect(screen.getByText("B")).toBeVisible();

      fireEvent.click(screen.getByText("B"));
      expect(screen.getByText("C")).toBeVisible();
    });
  });
  describe("when the user click on the button more time then value available", () => {
    it("should be back to the first value", () => {
      render(<ChangeValueButton values={["A", "B", "C"]} />);
      expect(screen.getByText("A")).toBeVisible();

      fireEvent.click(screen.getByText("A"));
      expect(screen.getByText("B")).toBeVisible();

      fireEvent.click(screen.getByText("B"));
      expect(screen.getByText("C")).toBeVisible();

      fireEvent.click(screen.getByText("C"));
      expect(screen.getByText("A")).toBeVisible();
    });
  });
});
