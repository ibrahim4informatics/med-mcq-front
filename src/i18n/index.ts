import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEn from "@/locales/en/common.json";
import commonFr from "@/locales/fr/common.json";

import landingEn from "@/locales/en/landing.json";
import landingFr from "@/locales/fr/landing.json";


import loginEn from "@/locales/en/login.json";
import loginFr from "@/locales/fr/login.json";


import registerEn from "@/locales/en/register.json";
import registerFr from "@/locales/fr/register.json";

import resetPasswordEn from "@/locales/en/forgot-password.json";
import resetPasswordFr from "@/locales/fr/forgot-password.json";

import sidebarEn from "@/locales/en/sidebar.json";
import sidebarFr from "@/locales/fr/sidebar.json";



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
                login: loginEn,
                register: registerEn,
                resetPassword: resetPasswordEn,
                sidebar: sidebarEn,
            },

            fr: {
                common: commonFr,
                landing: landingFr,
                login: loginFr,
                register: registerFr,
                resetPassword: resetPasswordFr,
                sidebar: sidebarFr,
            },
        },

        defaultNS: "common",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;