import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import wrapper from "../../helper/test-context-builder";
import { SwitchLanguageContext } from "../../providers/IntlProvider";
import LanguageButton from "./LanguageButton";

describe("When the user click on a button language", () => {
  it("should call the context function to change the language", () => {
    const switchLanguage = jest.fn();
    render(
      <SwitchLanguageContext.Provider value={switchLanguage}>
        <LanguageButton />
      </SwitchLanguageContext.Provider>,
      { wrapper }
    );

    userEvent.click(screen.getByTestId("gb"));

    expect(switchLanguage).toHaveBeenCalled();
  });
});
