import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en";
import de from "./de";

const supportedLngs = ["en", "de"] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: "en",
    supportedLngs: [...supportedLngs],
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Prefer explicit user choice, then browser language.
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio_lang",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
