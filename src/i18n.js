import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(Backend) // or any other backend implementation
  .use(LanguageDetector) // or any other implementation

  .init({ fallbackLng: "en" });
