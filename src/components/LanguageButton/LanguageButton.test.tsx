import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageBus from "../../bus/LanguageBus";
import wrapper from "../../helper/test-context-builder";
import LanguageButton from "./LanguageButton";

describe("When the user click on a button language", () => {
  it("should change the language", () => {
    render(<LanguageButton />, { wrapper });

    userEvent.click(screen.getByTestId("gb"));

    expect(LanguageBus.dispatch).toHaveBeenCalled;
  });
});
