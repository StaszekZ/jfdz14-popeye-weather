function localize() {
    $("[data-i18n]").localize();
}
i18next.init({
    lng: 'pl',
    debug: true,
    resources: {
        en: {
            translation: {
                head: {
                    title: 'Popeye Weather - best weather app ever',
                },
                nav: {
                    home: 'Home',
                    features: 'Features',
                    functionalities: 'Functionalities',
                    form: 'Form',
                    team: 'Team',
                },
                marketing: {
                    header1: 'Our Popeye Weather App',
                    body1: 'Offers a scarily accurate minute-by-minute predictions for precipitation, and pushes alerts right to the front of your phone. A typical push notification from Popeye Weather App might say “Light Rain starting in 12minutes,”. With Our App, you know exactly when it is going to rain, how hard that rain will be, and how long it will last.',
                }
            }

        },
        pl: {
            translation: {
                head: {
                    title: 'Popeye Weather - najlepsza aplikacja pogodowa',
                },
                nav: {
                    home: "Strona główna",
                    features: 'O produkcie',
                    functionalities: 'Funkcjonalności',
                    form: 'Zapis na premierę',
                    team: 'Zespół',
                },
                marketing: {
                    header1: `Nasza aplikacja`,
                    body1: `Oferuje wyjątkowo dokładne prognozy minut po minucie dla opadów atmosferycznych i wyświetla notifikacje w telefonie. Typowe powiadomienie push z aplikacji Popeye Weather może powiedzieć „lekki deszcz, który zaczyna się za 12 minut”. Dzięki naszej aplikacji wiesz dokładnie, kiedy będzie padać, jak mocno będzie padać i jak długo będzie trwać`,
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