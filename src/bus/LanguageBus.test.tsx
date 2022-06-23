import { languageBus } from "../model/langueBus";
import LanguageBus from "./LanguageBus";

import { supportedLocale } from "../locales";

describe("LanguageBus", () => {
  describe("when a function in grep on the dispatch", () => {
    it("should execute the function if the dispatch is trigerred", () => {
      const on = jest.fn();
      LanguageBus.on(on);
      LanguageBus.dispatch({ language: supportedLocale.French } as languageBus);
      expect(on).toHaveBeenCalledWith(supportedLocale.French);
    });
  });
});
