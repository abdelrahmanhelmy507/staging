import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    debug: true,
    supportedLngs: ["en", "ar"],
    load: "languageOnly",
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "/staging/locales/{{lng}}/{{ns}}.json"
    },
    interpolation: {
      escapeValue: false,
    },
  });
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  }
});
if (typeof document !== "undefined") {
  const lng = i18n.resolvedLanguage || i18n.language || "en";
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
}


export default i18n;
