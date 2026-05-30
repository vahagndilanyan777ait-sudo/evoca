import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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

      // Hero Slider (Armenian)
      heroSlider: [
        {
          title: "Evoca Travel Card",
          description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "Evoca Աշխատավարձային Նախագիծ",
          description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "Կարճ հեռախոսահամար՝ 8444",
          description: "Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "Visa Vision",
          description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "Visa Infinite",
          description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "Հիփոթեքային վարկեր Evocabank-ում` ամենահարմար պայմաններով",
          description: "Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "UnionPay Gold",
          description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
          buttonText: "Իմանալ ավելին"
        },
        {
          title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
          description: "Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
          buttonText: "Ծանոթանալ պայմաններին"
        }
      ],

      // Biometric Hero Section (Armenian)
      biometricHero: {
        titlePart1: "Դարձի՛ր ",
        titleBank: "Evocabank",
        titlePart2: "-ի հաճախորդ ",
        titleBiometric: "բիոմետրիկ",
        titlePart3: " նույնականացմամբ",
        description: "Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացի՛ր քարտ առանց բանկ այցելելու:",
        buttonText: "Իմանալ ավելին",
        qrGuide: "← Սկանավորիր հավելվածի համար"
      }
    }
  },
  ru: {
    translation: {
      // Top bar
      individual: "Частным клиентам",
      business: "Бизнес",
      speedpay: "Быстрые платежи",
      about: "О нас",
      news: "Новости",
      blog: "Блог",
      career: "Карьера",
      onlineApps: "Онлайн-заявки",
      contact: "Обратная связь",
      // Main bar
      loans: "Кредиты",
      cards: "Карты",
      deposits: "Вклады",
      accounts: "Счета",
      transfers: "Переводы",
      securities: "Ценные бумаги",

      // Hero Slider (Russian)
      heroSlider: [
        {
          title: "Evoca Travel Card",
          description: "Эта карта со множеством преимуществ станет вашим незаменимым спутником в путешествиях",
          buttonText: "Узнать больше"
        },
        {
          title: "Зарплатный проект Evoca",
          description: "Переведите свою зарплату в Evoca и получайте гораздо больше...",
          buttonText: "Узнать больше"
        },
        {
          title: "Короткий номер: 8444",
          description: "Добро пожаловать в Evocabank. Мы ждем вашего звонка...",
          buttonText: "Узнать больше"
        },
        {
          title: "Visa Vision",
          description: "Получите карту Visa Vision в предпочитаемом вами цвете, дизайне и стиле и пользуйтесь множеством преимуществ",
          buttonText: "Узнать больше"
        },
        {
          title: "Visa Infinite",
          description: "Получите карту высочайшего класса платежной системы Visa прямо сейчас",
          buttonText: "Узнать больше"
        },
        {
          title: "Ипотечные кредиты в Evocabank на самых выгодных условиях",
          description: "Приобретайте квартиру своей мечты по низкой процентной ставке.",
          buttonText: "Узнать больше"
        },
        {
          title: "UnionPay Gold",
          description: "Ваш спутник для быстрых и удобных платежей по всему миру",
          buttonText: "Узнать больше"
        },
        {
          title: "Онлайн-вклад через приложение EvocaTOUCH",
          description: "Вкладывайте средства в Evocabank под высокие, очень высокие проценты.",
          buttonText: "Ознакомиться с условиями"
        }
      ],

      // Biometric Hero Section (Russian)
      biometricHero: {
        titlePart1: "Стань клиентом ",
        titleBank: "Evocabank",
        titlePart2: " с помощью ",
        titleBiometric: "биометрической",
        titlePart3: " идентификации",
        description: "Сканируйте QR-код, загрузите удобное приложение EvocaTOUCH, откройте счет и получите карту без посещения банка.",
        buttonText: "Узнать больше",
        qrGuide: "← Сканируйте для приложения"
      }
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

      // Hero Slider (English)
      heroSlider: [
        {
          title: "Evoca Travel Card",
          description: "With its numerous advantages, this card will become your inseparable travel companion",
          buttonText: "Learn more"
        },
        {
          title: "Evoca Salary Project",
          description: "Transfer your salary to Evoca and get much more...",
          buttonText: "Learn more"
        },
        {
          title: "Short Number: 8444",
          description: "Welcome to Evocabank. We are waiting for your call...",
          buttonText: "Learn more"
        },
        {
          title: "Visa Vision",
          description: "Get a Visa Vision card in your preferred color, design, and style and enjoy multiple benefits",
          buttonText: "Learn more"
        },
        {
          title: "Visa Infinite",
          description: "Get the highest-class card of the Visa payment system right now",
          buttonText: "Learn more"
        },
        {
          title: "Mortgage Loans at Evocabank with the Most Convenient Conditions",
          description: "Get your dream apartment with a low interest rate.",
          buttonText: "Learn more"
        },
        {
          title: "UnionPay Gold",
          description: "Your companion for fast and convenient payments worldwide",
          buttonText: "Learn more"
        },
        {
          title: "Online Deposit via EvocaTOUCH App",
          description: "Make a deposit at Evocabank with high, very high interest rates.",
          buttonText: "View terms"
        }
      ],

      // Biometric Hero Section (English)
      biometricHero: {
        titlePart1: "Become an ",
        titleBank: "Evocabank",
        titlePart2: " customer via ",
        titleBiometric: "biometric",
        titlePart3: " identification",
        description: "Scan the QR code, download the comfortable EvocaTOUCH app, create your account and get a card without visiting the bank.",
        buttonText: "Learn more",
        qrGuide: "← Scan to download app"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'am',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;