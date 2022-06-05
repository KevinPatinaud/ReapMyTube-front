import { fr } from "./fr";
import { en } from "./en";

export const supportedLocale = { English: "en", French: "fr" };

export const defaultLanguage = supportedLocale.English;

export const localMessages = new Map()
  .set(supportedLocale.French, fr)
  .set(supportedLocale.English, en);
