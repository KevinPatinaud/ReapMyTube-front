import { languageBus } from "../model/langueBus";

const SwitchLanguage = "SwitchLanguage";

const LanguageBus = {
  on(callback: (language: string) => void) {
    document.addEventListener(SwitchLanguage, (e: Event) =>
      callback((e as CustomEvent).detail.language)
    );
  },
  dispatch(languageToSwitch: languageBus) {
    document.dispatchEvent(
      new CustomEvent(SwitchLanguage, { detail: languageToSwitch })
    );
  },
};

export default LanguageBus;
