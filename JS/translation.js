function localize() {
    $("[data-i18n]").localize();
}
i18next.init({
    lng: 'pl',
    debug: true,
    resources: {
        en: {
            translation: {
                nav: {
                    home: 'Home',
                    features: 'Features',
                    functionalities: 'Functionalities'
                },
                marketing: {
                    header: 'Our Popeye Weather App'
                }
            }

        },
        pl: {
            translation: {
                nav: {
                    home: "Strona główna",
                    features: 'Po polsku "features"'
                },
                marketing: {
                    header: `Nasz papaj`
                }
            }
        }
    }
})
    .then(function () {
        jqueryI18next.init(i18next, $, {
            tName: 't',
            i18nName: 'i18n',
            handleName: 'localize',
            selectorAttr: 'data-i18n',
            targetAttr: 'i18n-target',
            optionsAttr: 'i18n-options',
            useOptionsAttr: false,
            parseDefaultValueFromContent: true
        });

        localize();

    });


$('.lang-picker')
    .on('change', function() {
       i18next.changeLanguage(this.value)
           .then(function() {
               localize();
           });
    });