import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEn from "@/locales/en/common.json";
import commonFr from "@/locales/fr/common.json";

import landingEn from "@/locales/en/landing.json";
import landingFr from "@/locales/fr/landing.json";



function normalizeLanguage(lang: string) {
    if (!lang) return "en";

    return lang.split("-")[0]; // en-US → en
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],

            // 👇 important fix
            convertDetectedLanguage: (lng: string) =>
                normalizeLanguage(lng),
        },

        resources: {
            en: {
                common: commonEn,

                landing: landingEn,
            },

            fr: {
                common: commonFr,
                landing: landingFr,
            },
        },

        defaultNS: "common",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;