const LanguageBus = {
  on(callback: Function) {
    document.addEventListener(SwitchLanguage, (e) => callback(e));
  },
  dispatch(data: Object) {
    document.dispatchEvent(new CustomEvent(SwitchLanguage, { detail: data }));
  },
  remove(callback: Function) {
    document.removeEventListener(SwitchLanguage, (e) => callback(e));
  },
};

const SwitchLanguage = "SwitchLanguage";

export default LanguageBus;
