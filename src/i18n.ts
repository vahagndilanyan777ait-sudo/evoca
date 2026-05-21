import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Թարգմանությունների բազան (օրինակ՝ հայերեն և անգլերեն)
const resources = {
  am: {
    translation: {
      // Top bar
      individual: "Անհատ",
      business: "Բիզնես",
      speedpay: "Ակնթարթային վճարումներ",
      about: "Մեր մասին",
      news: "Նորություններ",
      blog: "Բլոգ",
      career: "Կարիերա",
      onlineApps: "Առցանց հայտեր",
      contact: "Հետադարձ կապ",
      // Main bar
      loans: "Վարկեր",
      cards: "Քարտեր",
      deposits: "Ավանդներ",
      accounts: "Հաշիվներ",
      transfers: "Փոխանցումներ",
      securities: "Արժեթղթեր",
    }
  },
  en: {
    translation: {
      // Top bar
      individual: "Individual",
      business: "Business",
      speedpay: "Instant Payments",
      about: "About Us",
      news: "News",
      blog: "Blog",
      career: "Careers",
      onlineApps: "Online Applications",
      contact: "Contact Us",
      // Main bar
      loans: "Loans",
      cards: "Cards",
      deposits: "Deposits",
      accounts: "Accounts",
      transfers: "Transfers",
      securities: "Securities",
    }
  }
};






i18n
  .use(LanguageDetector) // Ավտոմատ հիշում է ընտրված լեզուն
  .use(initReactI18next) // Կապում է i18next-ը React-ին
  .init({
    resources,
    fallbackLng: 'am', // Եթե լեզուն չգտնվի, կբացվի հայերենը
    interpolation: {
      escapeValue: false // React-ը արդեն պաշտպանում է XSS-ից
    }
  });

export default i18n;