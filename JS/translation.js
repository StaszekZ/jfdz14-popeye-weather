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
                    header2: 'Popeye Weather App reports, forecast and statistics:',
                    body2: '✔ Wind map, accurate wind compass, wind meter, wind gusts and wind directions. It’s very useful for extreme wind sports.<br> ✔ Wind alert: Set up windalert and be aware of wind, storm and tornado warning via push-notifications',
                    header3: 'Why our App you may ask?',
                    body3: 'You can be fairly sure that the weather will do what Popeye Weather App says and you can use it to plan a cruise with a fair degree of confidence Popeye offers high levels of detail and, the highest resolution and most accurate forecasts on the internet.',
                },

                features: {
                    title: 'Why Popeye Weather App?',
                    box1: 'Up-to-date weather prognosis',
                    descr1: 'In our application you will find the most up-to-date weather details. All you need to decide if this is a time for sailing!',
                    box2: 'Free and accesible through majority of mobile devices',
                    descr2: 'You can download our application into any devices that works on Android or iOS.',
                    box3: 'Safety alerts for weather conditions',
                    descr3: 'Our application will give you warning whenever you will be reaching areas in dangerous weather conditions.',
                    box4: 'Hints for sailor equipments',
                    descr4: 'Our application will give you some hints what kind of equipment you need to prepare for different weather condition that you`re planning to sail',
                },

                func: {
                    box1: 'Air temperature',
                    fun1: 'We want you to be well informed and be able to plan your activities in longer intervals that is why we prepare for you the most reliable forecast in the whole internet !!! Air temperature is one of the basic meteorological elements determining the thermal state of the atmosphere. Data on air temperature are collected by meteorological stations. The measurement is made at a height of 2 m above the ground using a thermometer, sheltered from direct solar radiation in a meteorological cage. Maximum and minimum temperature are measured using separate thermometers - maximum and minimum thermometers, respectively.',
                    box2: 'Atmospheric pressure',
                    fun2: 'Not only does it have a great impact on our well-being, but it is also a basis for predicting other weather ingredients. Atmospheric pressure, also known as barometric pressure (after the barometer), is the pressure within the atmosphere of Earth. The standard atmosphere (symbol: atm) is a unit of pressure defined as 101,325 Pa (1,013.25 hPa; 1,013.25 mbar), which is equivalent to 760 mm Hg, 29.9212 inches Hg, or 14.696 psi.[1] The atm unit is roughly equivalent to the mean sea-level atmospheric pressure on Earth, that is, the Earth`s atmospheric pressure at sea level is approximately 1 atm.',
                    box3: '',
                    fun3: '',
                    box4: '',
                    fun5: '',
                    box5: '',
                    fun5: '',
                    box6: '',
                    fun6: '',
                    box7: '',
                    fun7: '',
                    box8: '',
                    fun8: '',

                },
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
                    header2: 'Aplikacja Popeye Weather gwarantuje raporty, prognozy i ostrzeżenia:',
                    body2: '✔ Mapa wiatru, kierunek wiatru, prędkość wiatru, charakterystyka wiatru. Jest to bardzo przydatne w ekstremalnych sportach morskich ✔ Alarm wiatru: Ustaw windalert i bądź świadomy ostrzeżenia o zmieniających się warunkach pogodowych oraz zbliżających się burz i haraganów',
                    header3: 'Dlaczego nasza aplikacja?',
                    body3: 'Możesz być całkiem pewien, że pogoda zrobi to, co mówi aplikaja Popeye Weather i ze spokojem możesz użyć jej do zaplanowania rejsu z pewnym stopniem pewności. Aplikacja Popeye Weather oferuje wysoki poziom szczegółowości oraz najwyższą rozdzielczość i najdokładniejsze prognozy w Internecie.',
                },

                features: {
                    title: 'Dlaczego aplikacja Popeye Weather?',
                    box1: 'Aktualna prognoza pogody',
                    descr1: 'W naszej aplikacji znajdziesz najbardziej aktualną prognozę pogody. Wszystko, co musisz wiedzieć, żeby upewnić się, że to czas na żeglowanie!',
                    box2: 'Bezpłatne i dostępne na większości urządzeń mobilnych',
                    descr2: 'Możesz pobrać naszą aplikację na dowolne urządzenia działające na Androidzie lub iOS.',
                    box3: 'Alerty bezpieczeństwa dla warunków pogodowych',
                    descr3: 'Nasza aplikacja wyświetli ostrzeżenie za każdym razem, gdy dotrzesz do obszarów gdzie panują niebezpieczne warunki pogodowe.',
                    box4: 'Wskazówki dotyczące potrzebnego ekwipunku',
                    descr4: 'Nasza aplikacja podpowie Ci, jakiego sprzętu potrzebujesz, aby przygotować się na różne warunki pogodowe',
                },

                func: {
                    box1: "Temperatura powietrza",
                    fun1: 'Chcemy, abyś był dobrze poinformowany i mógł planować swoje działania w dłuższych odstępach czasu, dlatego przygotowujemy dla Ciebie najbardziej wiarygodną prognozę w całym Internecie !!! Temperatura powietrza jest jednym z podstawowych elementów meteorologicznych determinujących stan termiczny atmosfery. Dane dotyczące temperatury powietrza są gromadzone przez stacje meteorologiczne. Pomiaru dokonuje się na wysokości 2 m nad ziemią za pomocą termometru osłoniętego przed bezpośrednim promieniowaniem słonecznym w klatce meteorologicznej. Temperaturę maksymalną i minimalną mierzy się za pomocą oddzielnych termometrów - odpowiednio termometry maksymalne i minimalne.',
                    box2: 'Ciśnienie atmosferyczne',
                    fun2: 'Ma to nie tylko duży wpływ na nasze samopoczucie, ale jest również podstawą do przewidywania innych składników pogody. Ciśnienie atmosferyczne, znane również jako ciśnienie barometryczne (po barometrze), jest ciśnieniem w atmosferze Ziemi. Atmosfera standardowa (symbol: atm) to jednostka ciśnienia zdefiniowana jako 101 325 Pa (1 013,25 hPa; 1 013,25 mbar), co odpowiada 760 mm Hg, 29,9212 cali Hg lub 14,969 psi. [1] Jednostka atm jest w przybliżeniu równa średniemu ciśnieniu atmosferycznemu na poziomie morza na Ziemi, to znaczy, że ciśnienie atmosferyczne Ziemi na poziomie morza wynosi około 1 atm',
                    box3: '',
                    fun3: '',
                    box4: '',
                    fun4: '',
                    box5: '',
                    fun5: '',
                    box6: '',
                    fun6: '',
                    box7: '',
                    fun7: '',
                    box8: '',
                    fun8: '',
                }
            
            },
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