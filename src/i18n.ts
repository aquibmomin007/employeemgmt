import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      overview: {
        "title": "Employee Overview",
        "noDataFound": "Sorry, we do not have any employee by name: ",
        "noDataSelectionFound": "No Employee selected, please click the \"Back to Search\" button to search again."
      },
      search: {
        "placeholder": "Search by employee name",
        "title": "Employee Directory"
      },
      footer: {
        "copyright": "\xa9 Copyright 2021",
      },
      common: {
        "loadingText": "loading ...",
        "backSearchButton": "Back to search",
        "shareButton": "Share link"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;