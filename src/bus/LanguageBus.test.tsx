import LanguageBus from "./LanguageBus";

describe("LanguageBus", () => {
  describe("when a function in grep on the dispatch", () => {
    it("should execute the function if the dispatch is trigerred", () => {
      const on = jest.fn();
      LanguageBus.on(on);
      LanguageBus.dispatch("French");
      expect(on).toHaveBeenCalledWith(
        expect.objectContaining({ detail: "French" })
      );
    });
  });
  describe("when a function is remove", () => {
    it("shouldn t execute the function when the dispatch is trigerred", () => {
      const on = jest.fn();
      LanguageBus.on(on);
      LanguageBus.remove(on);
      LanguageBus.dispatch("French");
      expect(on).toHaveBeenCalledWith(
        expect.objectContaining({ detail: "French" })
      );
    });
  });
});
