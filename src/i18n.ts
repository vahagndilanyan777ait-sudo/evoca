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
      },

      // Best From Evoca Section (Armenian)
      bestFromEvoca: {
        sectionTitle: "Լավագույնը Evocabank-ից",
        cards: [
          {
            category: "Թվային քարտեր",
            title: "Evoca Digital քարտ",
            description: "Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։"
          },
          {
            category: "Նվեր քարտեր",
            title: "Evoca Gift Card",
            description: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը։ Քարտը հարմար է բոլոր առիթների համար։"
          },
          {
            category: "Նոր հավելված",
            title: "EvocaTOUCH 2",
            description: "EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ։"
          },
          {
            category: "Օնլայն վճարումներ",
            title: "Արագ online վճարումներ",
            description: "Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ։ Այն հասանելի է 24/7։"
          }
        ]
      },

      // Card Selector Section (Armenian)
      cardSelector: {
        orderBtn: "Պատվիրել օնլայն",
        items: {
          "mastercard": {
            name: "Evoca Travel Card",
            shortName: "Travel Card",
            description: "Ճամփորդեք հանգիստ և ապահով Evoca Travel Card-ի հետ՝ կանխիկացման լայն հնարավորություններով:"
          },
          "visa-digital": {
            name: "Visa Digital",
            shortName: "Visa Digital",
            description: "Ձեր վիրտուալ քարտը՝ ակնթարթային թողարկմամբ և անվտանգ առցանց գնումների համար:"
          },
          "visa-classic": {
            name: "Visa Classic",
            shortName: "Visa Classic",
            description: "Դասական լուծումներ ամենօրյա գործարքների, փոխանցումների և վճարումների համար:"
          }
        }
      },

      // Calculator Section (Armenian)
      calculator: {
        mainTitle: "Հաշվիչներ",
        currency: "֏",
        tabs: {
          loan: "Վարկ",
          deposit: "Ավանդ"
        },
        labels: {
          loanAmount: "Վարկի գումար (֏)",
          depositAmount: "Ներդրվող գումար (֏)",
          annualRate: "Տարեկան տոկոսադրույք",
          duration: "Ժամկետ",
          depositDuration: "Ավանդի ժամկետ",
          threeYears: "3 տարի"
        },
        durationUnit: {
          month: "ամիս",
          month_short: "ամիս",
          day: "օր",
          day_short: "օր"
        },
        repayment: {
          title: "Մարման ձև",
          annuity: "Անուիտետ",
          spring: "Զսպանակաձև"
        },
        results: {
          monthlyPayment: "Ամսական վճար",
          totalInterest: "Ընդհանուր տոկոսագումար",
          totalRepayment: "Ընդհանուր վերադարձվող գումար",
          dailyInterest: "Օրական հաշվարկվող տոկոսագումար",
          totalDepositInterest: "Ընդհանուր տոկոսային եկամուտ",
          netInterest: "Փաստացի վճարվող զուտ եկամուտ"
        },
        disclaimers: {
          depositTax: "* Ներդրված ավանդի դիմաց ստացվող տոկոսագումարները ՀՀ օրենսդրությամբ հարկվում են 10% եկամտային հարկի չափով: Հաշվարկում հարկն արդեն պահված է։",
          infoOnly: "Բոլոր հաշվարկները կրում են տեղեկատվական բնույթ և չեն հանդիսանում պաշտոնական հրապարակային առաջարկ (օֆերտա)։"
        },
        buttons: {
          applyLoan: "Դիմել Օնլայն",
          orderDeposit: "Պատվիրել Ավանդ"
        }
      },

      // Online & Mobile Banking (Armenian)
      onlineBanking: {
        title: "Օնլայն և մոբայլ բանկինգ",
        description: "Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։",
        becomeClientBtn: "Դառնալ հաճախորդ",
        downloadApps: "Ներբեռնել հավելվածները՝"
      },

      // Partners Section (Armenian)
      partnersSection: {
        title: "Գործընկերներ",
        description: "Դարձե՛ք Evocabank-ի Գործընկեր և եկե՛ք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:",
        allPartnersBtn: "Բոլոր գործընկերները"
      },

      // News Section (Armenian)
      newsSection: {
        latestTitle: "Վերջին նորությունները",
        viewAll: "Բոլոր նորությունները",
        lifestyle: "Կենսակերպ",
        banking: "Բանկային",
        items: {
          ccf: "Evocabank-ը մասնակցում է CCF 2026-ին",
          imf: "Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին",
          leasing: "Evoca-ն մասնակցում է Leasing Expo 2026-ին"
        }
      },

      // Exchange Rates Section (Armenian)
      exchange: {
        notice: "20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:",
        currency: "Արժույթ",
        buy: "Առք",
        sell: "Վաճառք",
        updatedAt: "Թարմացվել է՝",
        more: "Այլ արժույթներ",
        have: "Ունեմ",
        get: "Կստանամ",
        tabs: {
          cash: "Կանխիկ",
          "non-cash": "Անկանխիկ",
          gold: "Ոսկու փոխարժեք"
        },
        codes: {
          USD: "USD",
          AMD: "AMD",
          EUR: "EUR",
          RUB: "RUB",
          XAU: "XAU"
        }
      },

      // Addresses Section (Armenian)
      addresses: {
        title: "Մեր հասցեները",
        subtitle: "Բանկի հասցեները, աշխատաժամերը, բանկոմատները",
        btn: "Դիտել քարտեզը"
      },

      // Footer Section (Armenian)
      footer: {
        updatedAt: "Թարմացվել է՝ {{date}}",
        cbaNotice: "Բանկը վերահսկվում է Կենտրոնական Բանկի կողմից",
        allRightsReserved: "Բոլոր իրավունքները պաշտպանված են",
        disclaimer: "Բանկը պատասխանատվություն չի կրում սույն կայքում զետեղված հղումներով այլ կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար, և չի կրում պատասխանատվություն այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:",
        address: {
          city: "Երևան",
          street: "Հանրապետության փող. 44/2"
        },
        sections: {
          aboutBank: "Բանկի մասին",
          usefulLinks: "Օգտակար հղումներ",
          otherLinks: "Այլ հղումներ"
        },
        links: {
          aboutUs: "Մեր մասին",
          management: "Ղեկավարություն",
          shareholders: "Բաժնետերեր և մասնակիցներ",
          reports: "Հաշվետվություններ",
          legalActs: "Ներքին իրավական ակտեր",
          tariffs: "Սակագներ",
          alienatedProperty: "Օտարված գույք",
          developers: "Կառուցապատողներ",
          partnerSalons: "Գործընկեր սրահներ",
          tariffsArchive: "Սակագների արխիվ",
          clientRights: "Հաճախորդի իրավունքներ",
          residentCriteria: "Ռեզիդենտության չափանիշներ",
          regulation: "Կարգավորումներ",
          privacyPolicy: "Գաղտնիության քաղաքականություն",
          finOmbudsman: "Ֆինանսական համակարգի հաշտարար",
          finCrimePrevention: "Փողերի լվացման դեմ պայքար",
          evocaOnline: "Evoca Online",
          safes: "Պահատուփեր",
          faq: "Հաճախ տրվող հարցեր",
          announcements: "Հայտարարություններ",
          library: "Գրադարան",
          booklets: "Տեղեկատվական գրքույկներ",
          feedback: "Հետադարձ կապ",
          sitemap: "Կայքի քարտեզ"
        },
        contacts: {
          branchesAndHours: "Մասնաճյուղեր և աշխատանքային ժամեր",
          contactUs: "Հետադարձ կապ"
        }
      },
      services: {
        main_title: "Գլխավոր Բաժին",
        mobile: "Միջազգային բջջային օպերատորներ",
        utilities: "Կոմունալ վճարումներ",
        internet_tv: "Ինտերնետ և TV",
        police: "ՃՈ վճարներ",
        credits: "Վարկային կազմակերպություններ",
        events: "Միջոցառումներ"
      },
     


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
      },

      // Best From Evoca Section (Russian)
      bestFromEvoca: {
        sectionTitle: "Лучшее от Evocabank",
        cards: [
          {
            category: "Цифровые карты",
            title: "Evoca Digital карта",
            description: "Карта Evoca Digital уже доступна в приложении EvocaTOUCH. Активируйте ее сейчас и выберите свой любимый дизайн."
          },
          {
            category: "Подарочные карты",
            title: "Evoca Gift Card",
            description: "Купите Evoca Gift Card, и лучший подарок будет вашим. Карта подходит для любого повода."
          },
          {
            category: "Новое приложение",
            title: "EvocaTOUCH 2",
            description: "EvocaTOUCH — это не просто банковское приложение, мы уверены, что оно станет вашим стилем жизни."
          },
          {
            category: "Онлайн-платежи",
            title: "Быстрые онлайн-платежи",
            description: "Совершайте текущие платежи через онлайн-терминал Evocabank — просто и быстро. Доступно 24/7."
          }
        ]
      },

      // Card Selector Section (Russian)
      cardSelector: {
        orderBtn: "Заказать онлайн",
        items: {
          "mastercard": {
            name: "Evoca Travel Card",
            shortName: "Travel Card",
            description: "Путешествуйте спокойно и безопасно с Evoca Travel Card и широкими возможностями обналичивания."
          },
          "visa-digital": {
            name: "Visa Digital",
            shortName: "Visa Digital",
            description: "Ваша виртуальная карта с мгновенным выпуском для безопасных онлайн-покупок."
          },
          "visa-classic": {
            name: "Visa Classic",
            shortName: "Visa Classic",
            description: "Классические решения для повседневных транзакций, переводов и платежей."
          }
        }
      },

      // Calculator Section (Russian)
      calculator: {
        mainTitle: "Калькуляторы",
        currency: "֏",
        tabs: {
          loan: "Кредит",
          deposit: "Вклад"
        },
        labels: {
          loanAmount: "Сумма кредита (֏)",
          depositAmount: "Сумма вклада (֏)",
          annualRate: "Годовая процентная ставка",
          duration: "Срок",
          depositDuration: "Срок вклада",
          threeYears: "3 года"
        },
        durationUnit: {
          month: "мес.",
          month_short: "мес.",
          day: "дн.",
          day_short: "дн."
        },
        repayment: {
          title: "Способ погашения",
          annuity: "Аннуитетный",
          spring: "Дифференцированный"
        },
        results: {
          monthlyPayment: "Ежемесячный платеж",
          totalInterest: "Общая сумма процентов",
          totalRepayment: "Общая сумма к возврату",
          dailyInterest: "Ежедневный начисляемый процент",
          totalDepositInterest: "Общий процентный доход",
          netInterest: "Фактический чистый доход"
        },
        disclaimers: {
          depositTax: "* Доходы по вкладам облагаются подоходным налогом в размере 10% в соответствии с законодательством РА. В расчете налог уже удержан.",
          infoOnly: "Все расчеты носят информационный характер и не являются официальной публичной офертой."
        },
        buttons: {
          applyLoan: "Подать заявку онлайн",
          orderDeposit: "Оформить вклад"
        }
      },

      // Online & Mobile Banking (Russian)
      onlineBanking: {
        title: "Онлайн и мобильный банкинг",
        description: "Evocabank — это банк, предоставляющий быстрые, простые и инновационные услуги, отличающийся активным использованием новейших информационных технологий.",
        becomeClientBtn: "Стать клиентом",
        downloadApps: "Скачать приложения:"
      },

      // Partners Section (Russian)
      partnersSection: {
        title: "Партнеры",
        description: "Станьте партнером Evocabank-а и пойдем вместе навстречу новой красочной реальности. Став членом семьи Evoca, вы войнете в современный и уникальный мир. Мы всегда открыты для интересных предложений и сотрудничества.",
        allPartnersBtn: "Все партнеры"
      },

      // News Section (Russian)
      newsSection: {
        latestTitle: "Последние новости",
        viewAll: "Все новости",
        lifestyle: "Лайфстайл",
        banking: "Банковское дело",
        items: {
          ccf: "Evocabank принимает участие в CCF 2026",
          imf: "Карен Егиазарян на IMF и WBG Spring Meetings 2026",
          leasing: "Evoca принимает участие в Leasing Expo 2026"
        }
      },

      // Exchange Rates Section (Russian)
      exchange: {
        notice: "В случае обмена суммы более 20,000 долларов США или эквивалентной валюты, сделка утверждается по усмотрению Банка и по установленному им курсу. Для проведения обменных операций на сумму более 100,000 драмов или эквивалентной валюты необходимо представить документ, удостоверяющий личность.",
        currency: "Валюта",
        buy: "Покупка",
        sell: "Продажа",
        updatedAt: "Обновлено:",
        more: "Другие валюты",
        have: "У меня есть",
        get: "Я получу",
        tabs: {
          cash: "Наличные",
          "non-cash": "Безналичные",
          gold: "Курс золота"
        },
        codes: {
          USD: "USD",
          AMD: "AMD",
          EUR: "EUR",
          RUB: "RUB",
          XAU: "XAU"
        }
      },

      // Addresses Section (Russian)
      addresses: {
        title: "Наши адреса",
        subtitle: "Адреса банка, часы работы, банкоматы",
        btn: "Посмотреть на карте"
      },

      // Footer Section (Russian)
      footer: {
        updatedAt: "Обновлено: {{date}}",
        cbaNotice: "Банк контролируется Центральным Банком РА",
        allRightsReserved: "Все права защищены",
        disclaimer: "Банк не несет ответственности за достоверность и точность содержания других сайтов, ссылки на которые размещены на данном сайте, за размещенную там рекламу, а также не несет ответственности за возможные последствия использования информации, размещенной на этих сайтах.",
        address: {
          city: "Ереван",
          street: "ул. Анрапетутян 44/2"
        },
        sections: {
          aboutBank: "О Банке",
          usefulLinks: "Полезные ссылки",
          otherLinks: "Другие ссылки"
        },
        links: {
          aboutUs: "О нас",
          management: "Руководство",
          shareholders: "Акционеры и участники",
          reports: "Отчеты",
          legalActs: "Внутренние правовые акты",
          tariffs: "Тарифы",
          alienatedProperty: "Отчужденное имущество",
          developers: "Застройщики",
          partnerSalons: "Салоны-партнеры",
          tariffsArchive: "Архив тарифов",
          clientRights: "Права клиентов",
          residentCriteria: "Критерии резидентства",
          regulation: "Регулирование",
          privacyPolicy: "Политика конфиденциальности",
          finOmbudsman: "Финансовый омбудсмен",
          finCrimePrevention: "Борьба с отмыванием денег",
          evocaOnline: "Evoca Online",
          safes: "Сейфовые ячейки",
          faq: "Часто задаваемые вопросы",
          announcements: "Объявления",
          library: "Библиотека",
          booklets: "Информационные буклеты",
          feedback: "Обратная связь",
          sitemap: "Карта сайта"
        },
        contacts: {
          branchesAndHours: "Филиалы и часы работы",
          contactUs: "Связаться с нами"
        }
      },
      services: {
        main_title: "Главный Раздел",
        mobile: "Международные мобильные операторы",
        utilities: "Коммунальные платежи",
        internet_tv: "Интернет и ТВ",
        police: "Штрафы ДП",
        credits: "Кредитные организации",
        events: "Мероприятия"
      },
   


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
      },

      // Best From Evoca Section (English)
      bestFromEvoca: {
        sectionTitle: "The Best from Evocabank",
        cards: [
          {
            category: "Digital Cards",
            title: "Evoca Digital Card",
            description: "Evoca Digital card is already available in the EvocaTOUCH app. Activate it now and choose your favorite design."
          },
          {
            category: "Gift Cards",
            title: "Evoca Gift Card",
            description: "Buy an Evoca Gift Card, and the best gift will be yours. The card is suitable for all occasions."
          },
          {
            category: "New Application",
            title: "EvocaTOUCH 2",
            description: "EvocaTOUCH is not just a banking app; we are sure it will become a lifestyle for you."
          },
          {
            category: "Online Payments",
            title: "Fast Online Payments",
            description: "Make your current payments through Evocabank's online terminal — simple and fast. Available 24/7."
          }
        ]
      },

      // Card Selector Section (English)
      cardSelector: {
        orderBtn: "Order online",
        items: {
          "mastercard": {
            name: "Evoca Travel Card",
            shortName: "Travel Card",
            description: "Travel calmly and safely with Evoca Travel Card with wide cash-out opportunities."
          },
          "visa-digital": {
            name: "Visa Digital",
            shortName: "Visa Digital",
            description: "Your virtual card with instant issuance for secure online shopping."
          },
          "visa-classic": {
            name: "Visa Classic",
            shortName: "Visa Classic",
            description: "Classic solutions for daily transactions, transfers, and payments."
          }
        }
      },

      // Calculator Section (English)
      calculator: {
        mainTitle: "Calculators",
        currency: "֏",
        tabs: {
          loan: "Loan",
          deposit: "Deposit"
        },
        labels: {
          loanAmount: "Loan Amount (֏)",
          depositAmount: "Deposit Amount (֏)",
          annualRate: "Annual Interest Rate",
          duration: "Term",
          depositDuration: "Deposit Term",
          threeYears: "3 years"
        },
        durationUnit: {
          month: "months",
          month_short: "months",
          day: "days",
          day_short: "days"
        },
        repayment: {
          title: "Repayment Type",
          annuity: "Annuity",
          spring: "Differentiated"
        },
        results: {
          monthlyPayment: "Monthly Payment",
          totalInterest: "Total Interest Amount",
          totalRepayment: "Total Repayment Amount",
          dailyInterest: "Daily Accrued Interest",
          totalDepositInterest: "Total Interest Income",
          netInterest: "Net Interest Income"
        },
        disclaimers: {
          depositTax: "* Interest income from deposits is taxed at a 10% income tax rate under RA legislation. Tax is already deducted in the calculation.",
          infoOnly: "All calculations are for informational purposes only and do not constitute an official public offer."
        },
        buttons: {
          applyLoan: "Apply Online",
          orderDeposit: "Order Deposit"
        }
      },

      // Online & Mobile Banking (English)
      onlineBanking: {
        title: "Online & Mobile Banking",
        description: "Evocabank is a bank providing fast, simple and innovative services, characterized by the active use of the latest information technologies.",
        becomeClientBtn: "Become a client",
        downloadApps: "Download apps:"
      },

      // Partners Section (English)
      partnersSection: {
        title: "Partners",
        description: "Become an Evocabank Partner and let's go together towards a colorful new reality. By becoming a member of the Evoca family, you will enter a modern and unique world. We are always open to interesting proposals and collaborations.",
        allPartnersBtn: "All Partners"
      },

      // News Section (English)
      newsSection: {
        latestTitle: "Latest News",
        viewAll: "All News",
        lifestyle: "Lifestyle",
        banking: "Banking",
        items: {
          ccf: "Evocabank participates in CCF 2026",
          imf: "Karen Yeghiazaryan at IMF and WBG Spring Meetings 2026",
          leasing: "Evoca participates in Leasing Expo 2026"
        }
      },

      // Exchange Rates Section (English)
      exchange: {
        notice: "In case of exchange of more than 20,000 USD or equivalent currency, the transaction is approved at the Bank's discretion and exchange rate. For transactions exceeding 100,000 AMD or equivalent foreign currency, an identification document is required.",
        currency: "Currency",
        buy: "Buy",
        sell: "Sell",
        updatedAt: "Updated at:",
        more: "Other currencies",
        have: "I have",
        get: "I will get",
        tabs: {
          cash: "Cash",
          "non-cash": "Non-cash",
          gold: "Gold Rate"
        },
        codes: {
          USD: "USD",
          AMD: "AMD",
          EUR: "EUR",
          RUB: "RUB",
          XAU: "XAU"
        }
      },

      // Addresses Section (English)
      addresses: {
        title: "Our Branches",
        subtitle: "Bank addresses, working hours, ATMs",
        btn: "View on map"
      },

      // Footer Section (English)
      footer: {
        updatedAt: "Updated at: {{date}}",
        cbaNotice: "The Bank is regulated by the Central Bank of Armenia",
        allRightsReserved: "All rights reserved",
        disclaimer: "The Bank is not responsible for the accuracy and reliability of the content of other websites linked on this website, for the advertisements placed there, and does not bear responsibility for the possible consequences of using the information placed on those websites.",
        address: {
          city: "Yerevan",
          street: "44/2 Hanrapetutyan St."
        },
        sections: {
          aboutBank: "About Bank",
          usefulLinks: "Useful Links",
          otherLinks: "Other Links"
        },
        links: {
          aboutUs: "About Us",
          management: "Management",
          shareholders: "Shareholders",
          reports: "Reports",
          legalActs: "Legal Acts",
          tariffs: "Tariffs",
          alienatedProperty: "Alienated Property",
          developers: "Developers",
          partnerSalons: "Partner Showrooms",
          tariffsArchive: "Tariffs Archive",
          clientRights: "Client Rights",
          residentCriteria: "Residency Criteria",
          regulation: "Regulation",
          privacyPolicy: "Privacy Policy",
          finOmbudsman: "Financial System Mediator",
          finCrimePrevention: "Anti-Money Laundering",
          evocaOnline: "Evoca Online",
          safes: "Safe Deposit Boxes",
          faq: "FAQ",
          announcements: "Announcements",
          library: "Library",
          booklets: "Booklets",
          feedback: "Feedback",
          sitemap: "Sitemap"
        },
        contacts: {
          branchesAndHours: "Branches and Working Hours",
          contactUs: "Contact Us"
        }
      },
      services: {
        main_title: "Main Section",
        mobile: "International Mobile Operators",
        utilities: "Utility Payments",
        internet_tv: "Internet & TV",
        police: "Traffic Fines",
        credits: "Credit Organizations",
        events: "Events"
      },
    


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