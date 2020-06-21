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
                        header4: 'PRO Version licenses',
                        body4: '',
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
                        box3: 'Wind',
                        fun3: 'Wind is the flow of gases on a large scale. On the surface of the Earth, wind consists of the bulk movemen of air. In outer space, solar wind is the movement of gases or charged particles from the Sun through space, while planetary wind is the outgassing of light chemical elements from a planet atmosphere into space. Winds are commonly classified by their spatial scale, their speed, the types of forces that cause them, the regions in which they occur, and their effect. The strongest observed winds on a planet in the Solar System occur on Neptune and Saturn. Winds have various aspects: velocity (wind speed); the density of the gas involved; energy content or wind energy. Wind is also an important means of transportation for seeds and small birds; with time things can travel thousands of miles in the wind.',
                        box4: 'Wave height',
                        fun4: 'In physical oceanography, the significant wave height (SWH or Hs) is defined traditionally as the mean wave height (trough to crest) of the highest third of the waves (H1/3). Nowadays it is usually defined as four times the standard deviation of the surface elevation – or equivalently as four times the square root of the zeroth-order moment(area) of the wave spectrum. The symbol Hm0 is usually used for that latter definition. The significant wave height may thus refer to Hm0 or Hs; the difference in magnitude between the two definitions is only a few percent.',
                        box5: 'Cloud cover',
                        fun5: 'Cloud cover (also known as cloudiness, cloudage, or cloud amount)refers to the fraction of the sky obscured by clouds when observed from a particular location. Okta is the usual unit of measurement of the cloud cover. The cloud cover is correlated to the sunshine duration as the least cloudy locales are the sunniest ones while the cloudiest areas are the least sunny places. The global cloud cover averages around 0.68 when analyzing clouds with optical depth larger than 0.1. This value is lower (0.56) when considering clouds with an optical depth larger than 2, and higher when counting subvisible cirrus clouds.',
                        box6: 'Precipitation',
                        fun6: 'In meteorology, precipitation is any product of the condensation of atmospheric water vapour that falls under gravity from clouds. The main forms of precipitation include drizzle, rain, sleet, snow, ice pellets, graupel and hail. Precipitation occurs when a portion of the atmosphere becomes saturated with water vapor (reaching 100% relative humidity), so that the water condenses and "precipitates". Thus, fog and mist are not precipitation but suspensions,because the water vapor does not condense sufficiently to precipitate. Two processes, possibly acting together, can lead to air becoming saturated: cooling the air or adding water vapor to the air. Precipitation forms as smaller droplets coalesce via collision with other rain drops or ice crystals within a cloud. Short, intense periods of rain in scattered locations are called "showers".',
                        box7: 'Sea surface temperature',
                        fun7: 'Sea surface temperature (SST) is the water temperature close to the ocean`s surface. The exact meaning of surface varies according to the measurement method used, but it is between 1 millimetre (0.04 in) and 20 metres (70 ft) below the sea surface. Air masses in the Earth1`s atmosphere are highly modified by sea surface temperatures within a short distance of the shore. Localized areas of heavy snow can form in bands downwind of warm water bodies within an otherwise cold air mass. Warm sea surface temperatures are known to be a cause of tropical cyclogenesis over the Earth`s oceans. Tropical cyclones can also cause a cool wake, due to turbulent mixing of the upper 30 metres (100 ft) of the ocean. SST changes diurnally, like the air above it, but to a lesser degree. There is less SST variation on breezy days than on calm days. In addition, ocean currents such as the Atlantic Multidecadal Oscillation (AMO), can effect SST`s on multi-decadal time scales,[4] a major impact results from the global thermohaline circulation, which affects average SST significantly throughout most of the world`s oceans.',
                        box8: 'Humidity',
                        fun8: 'Humidity is the concentration of water vapour present in the air. Water vapour, the gaseous state of water, is generally invisible to the human eye. Humidity indicates the likelihood for precipitation, dew, or fog to be present. The amount of water vapour needed to achieve saturation increases as the temperature increases. As the temperature of a parcel of air decreases it will eventually reach the saturation point without adding or losing water mass. The amount of water vapour contained within a parcel of air can vary significantly. For example, a parcel of air near saturation may contain 28 grams of water per cubic metre of air at 30 °C, but only 8 grams of water per cubic metre of air at 8 °C.',

                    },

                    form: {
                        header: 'Do you want to sign up for premiere?',
                        h3: 'Tell us your email and you can be sure that you will not miss premiere',
                        noti: 'You will be notified of successful enrollment only once. Please be aware that we protect your data.'
                    },
                    team: {
                        header: 'Team Members are:'
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
                        header2: 'Aplikacja gwarantuje raporty, prognozy i ostrzeżenia:',
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
                        box3: 'Wiatr',
                        fun3: 'Wiatr to przepływ gazów na dużą skalę. Na powierzchni Ziemi wiatr składa się z masywnego ruchu powietrza. W przestrzeni kosmicznej wiatr słoneczny to ruch gazów lub naładowanych cząstek ze Słońca w przestrzeni kosmicznej, podczas gdy wiatr planetarny to odgazowanie lekkich pierwiastków chemicznych z atmosfery planety w przestrzeń kosmiczną. Wiatry są zwykle klasyfikowane według ich skali przestrzennej, prędkości, rodzajów sił, które je powodują, regionów, w których występują i ich wpływu. Najsilniejsze obserwowane wiatry na planecie w Układzie Słonecznym występują na Neptunie i Saturnie. Wiatry mają różne aspekty: prędkość (prędkość wiatru); gęstość gazu; zawartość energii lub energia wiatru. Wiatr jest również ważnym środkiem transportu nasion i małych ptaków; z czasem rzeczy mogą pokonywać tysiące mil na wietrze.',
                        box4: 'Wysokość fali',
                        fun4: 'W oceanografii fizycznej znaczna wysokość fali (SWH lub Hs) jest tradycyjnie definiowana jako średnia wysokość fali (od szczytu do szczytu) najwyższej trzeciej fali (H1 / 3). Obecnie jest zwykle definiowany jako czterokrotność standardowego odchylenia rzędnej powierzchni - lub równoważnie jako czterokrotność pierwiastka kwadratowego momentu (pola) rzędu zerowego widma falowego. Symbol Hm0 jest zwykle używany w tej ostatniej definicji. Znacząca wysokość fali może zatem odnosić się do Hm0 lub Hs; różnica wielkości między dwiema definicjami wynosi zaledwie kilka procent.',
                        box5: 'Zachmurzenie',
                        fun5: 'Zachmurzenie (znane również jako zachmurzenie, zachmurzenie lub ilość chmur) odnosi się do części nieba zasłoniętej przez chmury, gdy obserwuje się je z określonej lokalizacji. Okta jest zwykłą jednostką miary zachmurzenia. Zachmurzenie jest skorelowane z czasem nasłonecznienia, ponieważ miejsca o najmniejszym zachmurzeniu są najbardziej nasłonecznione, a obszary najbardziej zachmurzone - najmniej słoneczne. Globalne zachmurzenie średnio wynosi około 0,68 podczas analizy chmur o głębokości optycznej większej niż 0,1. Ta wartość jest niższa (0,56) przy rozważaniu chmur o głębokości optycznej większej niż 2 i wyższa przy liczeniu niewidocznych chmur cirrus.',
                        box6: 'Opad atmosferyczny',
                        fun6: 'W meteorologii opady to każdy produkt kondensacji atmosferycznej pary wodnej, która spada pod wpływem grawitacji z chmur. Główne formy opadów to mżawka, deszcz, deszcz ze śniegiem, śnieg, granulki lodu, graupel i grad. Opady występują, gdy część atmosfery nasyca się parą wodną (osiągając 100% wilgotności względnej), tak że woda kondensuje się i „wytrąca”. Zatem mgła i mgła nie są opadami, lecz zawiesinami, ponieważ para wodna nie skrapla się wystarczająco, aby się wytrącić. Dwa procesy, prawdopodobnie działające razem, mogą doprowadzić do nasycenia powietrza: chłodzenie powietrza lub dodawanie do niego pary wodnej. Opady powstają, gdy mniejsze kropelki łączą się w wyniku zderzenia z innymi kroplami deszczu lub kryształkami lodu w chmurze. Krótkie, intensywne okresy deszczu w rozproszonych miejscach nazywane są „prysznicami”.',
                        box7: 'Temperatura powierzchni morza',
                        fun7: 'Temperatura powierzchni morza (SST) to temperatura wody zbliżona do powierzchni oceanu. Dokładne znaczenie powierzchni różni się w zależności od zastosowanej metody pomiaru, ale leży między 1 milimetr (0,04 cala) a 20 metrów (70 stóp) pod powierzchnią morza. Masy powietrza w atmosferze ziemskiej są silnie modyfikowane przez temperatury powierzchni morza w niewielkiej odległości od brzegu. Zlokalizowane obszary silnego śniegu mogą tworzyć się w pasmach pod wiatr jednolitych części wód w obrębie masy zimnego powietrza. Wiadomo, że ciepłe temperatury powierzchni morza są przyczyną tropikalnej cyklogenezy w oceanach Ziemi. Cyklony tropikalne mogą również powodować chłodne pobudki z powodu turbulentnego mieszania górnych 30 metrów (100 stóp) oceanu. SST zmienia się dobowo, podobnie jak powietrze nad nim, ale w mniejszym stopniu. Istnieje mniej zmian SST w wietrzne dni niż w spokojne dni. Ponadto prądy oceaniczne, takie jak Atlantic Multidecadal Oscillation (AMO), mogą wpływać na SST w wielodekadowych skalach czasowych [4], duży wpływ wynika z globalnej cyrkulacji termohalinowej, która znacząco wpływa na średni SST na całym świecie oceany.',
                        box8: 'Wilgotność',
                        fun8: 'Wilgotność to stężenie pary wodnej obecnej w powietrzu. Para wodna, gazowy stan wody, jest na ogół niewidoczna dla ludzkiego oka. Wilgotność wskazuje prawdopodobieństwo wystąpienia opadów, rosy lub mgły. Ilość pary wodnej potrzebna do osiągnięcia nasycenia rośnie wraz ze wzrostem temperatury. Gdy temperatura paczki powietrza spada, ostatecznie osiągnie punkt nasycenia bez dodawania lub utraty masy wody. Ilość pary wodnej zawartej w paczce powietrza może się znacznie różnić. Na przykład paczka powietrza w pobliżu nasycenia może zawierać 28 gramów wody na metr sześcienny powietrza w temperaturze 30 ° C, ale tylko 8 gramów wody na metr sześcienny powietrza w temperaturze 8 ° C.',
                    },

                    form: {
                        header: 'Czy chcesz zapisać się na premierę',
                        h3: 'Podaj swój adres e-mail, aby mieć pewność, że nie umknie Ci premiera',
                        noti: 'O udanej rejestracji zostaniesz powiadomiony tylko raz. Pamiętaj, że chronimy Twoje dane.'
                    },

                    team: {
                        header: 'Członkami zespołu są:'
                    },

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
    .on('change', function () {
        i18next.changeLanguage(this.value)
            .then(function () {
                localize();
            });
    });