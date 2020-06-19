landing page for popeye weather app by WIRUS 2020

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  font-size: 16px;
  font-family: "Baloo 2";
}

html,
body {
  width: 100%;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
}


.gradient {
  height: fit-content;
  width: 100%;
  background: #29c7fb;
  background: linear-gradient(to bottom, #29c7fb, #00ade7 30%, #08538c);
  transform-style: preserve-3d;
}


/* AGA NAVIGATION UPDATE */

.navigation {
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 0px 4px rgba(40, 40, 40, 0.2);
}

.navigation__burger__icon,
.navigation__burger__checkbox {
  display: none;
}

.navigation__menu {
  display: flex;
  margin-right: 16px;
  padding-right: 16px;
}

.navigation__menu__list {
  padding: 8px;
  list-style: none;
}

.navigation__menu__list__link {
  color: var(--main-text-color);
  text-decoration: none;
}

.navigation__menu__list__link:link {
  text-decoration: none;
}

.navigation__menu__list__link:focus,
.navigation__menu__list__link:hover {
  font-weight: bolder;
}

.navigation__menu__list__link:active {
  font-weight: bolder;
  color: rgb(20, 148, 207);
}


/* Aga active navigation element */

.navigation__menu__list__link.active {
  font-weight: bolder;
}

.active2 {
  font-weight: bolder;
}

/*KAsia - language */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/*KAsia - language end */

.navigation__logo {
  position: absolute;
  display: flex;
  align-self: flex-end;
  width: 180px;
  height: auto;
  padding: 0.5rem;
}

.navigation__logo__img {
  width: 100%;
  height: 100%;
}

.nav__short {
  height: 35px;

}

.logo__short {
  padding: 0;
  width: 160px;
}


/* AGA COOKIE INFO */

.cookie.hidden {
  display: none;
}

.cookie {
  margin: 0;
  padding: 0;
}

.cookie {
  position: fixed;
  width: 100vw;
  height: auto;
  z-index: 5;

  font-size: 12px;
  font-family: Arial, Verdana, sans-serif;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(255, 255, 255);
  padding: 20px;
  box-shadow: 2px 0px 14px 17px rgba(0, 0, 0, 0.2);
}

.cookie__container {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
}

.cookie__container__alert {
  margin: 0px;
  padding: 0.5em;
  letter-spacing: 1px;
  justify-content: center;
}

.cookie__container__alert--link {
  text-decoration: none;
  color: var(--main-text-color);
}

.cookie__container__alert--link:hover {
  text-decoration: underline;
}

.cookie__button {
  float: right;
  width: clamp(120px, 10vw, 150px);
  height: 1.75em;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: rgb(8, 64, 167);
  border: none;
  border-radius: 3px;
}

.cookie__button:hover {
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  color: rgb(48, 160, 190);
  border: 1.5px solid rgb(8, 64, 167);
  color: rgb(8, 64, 167);
}


.hero__img {
  background-image: url("../img/742112.webp");
  background-color: var(--bgr-color);
  background-size: cover;
  width: 100%;
  min-height: 55vh;
}

.hero__txt {
  display: flex;
}

.hero__name {
  margin-top: 50px;
  width: 30%;
  height: auto;
}

.hero__boat {
  width: 25vmax;
  height: auto;
  align-self: center;
}

section {
  width: var(--max-width);
}

/*slider*/
.sneak {
  height: 50vh;
  overflow: hidden;
  width: 100%;
}

.sneak__fig {
  display: flex;
  position: relative;
  width: 100%;
  margin: 0;
  left: 0;
}

.slides {
  float: left;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 2% 10%;
  justify-content: center;
  animation: sliderAnimation 1s;

}

.inSlide--hr {
  color: white;
  width: 50%;
}

.button {
  position: absolute;
  display: flex;
  top: calc(50% - 20px);
  height: 70px;
  width: 70px;
  background-color: var(--dots-color);
  border-radius: 50%;
  border: none;
  outline: none;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.fa {
  color: lightgray;
  transition: 0.3s;
  font-size: x-large;
}

.button:hover .fa {
  color: darkslategray;
  transition: 0.3s;
}

.button:hover {
  background-color: var(--dots-color-hover);
  transform: scale(1.2);
  transition: 0.3s;
}

.button__prev {
  left: 2%;
}

.button__next {
  right: 2%;
}

.hidden {
  display: none;
}

.active {
  display: flex;
}


.One {
  background-color: #082e79;

}

.Two {
  background-color: #00477e;
}

.Three {
  background-color: #2a6bcc;
}

.Four {
  background: #373B44;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4286f4, #315ec7);
  background: linear-gradient(to right, #4286f4, #315ec7);
}

.inSlide {
  color: white;
  font-size: 1.5rem;
  text-align: center;
}

.inSlide--header {
  font-size: 3rem;

}

.inSlider--image {
  position: absolute;
  top: 4%;
  width: 15%;
  height: auto;
}

.sliderDots {
  position: absolute;
  top: 90%;
  display: flex;
  justify-content: space-evenly;
  width: 110px;
  justify-content: center;
  align-items: center;
  margin: 0 calc(50% - 50px);
}

.dots {
  background-color: var(--dots-color);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none;
  z-index: 3;
  border: 1px solid var(--second-text-color);
}

.dots--active {
  background-color: var(--dots-color-hover);
}

.count {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #f9f9f9;
}

.summary,
.summaryScore {
  font-size: 30px;
}

.submitCount {
  margin: 25px;
  padding: 10px;
  color: #f9f9f9;
  background-color: #333;
}

@keyframes sliderAnimation {
  0% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

/* Kasia- features */

.features {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
}

.features__question {
  width: 100%;
  text-align: center;
}

.features__title {
  font-size: 3rem;
  color: var(--second-text-color);
  text-shadow: var(--shadow-2);
  opacity: 0.9;
  padding: 1rem 0;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
}


.features__description {
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

.features__box {
  display: flex;
  flex-direction: column;
  background-color: var(--bgr-color);
  padding: 2rem;
  margin: 0 20px;
  width: calc(25% - 40px);
  height: 500px;
  overflow: hidden;
  border-radius: 15px 50px 30px;
  color: var(--main-text-color);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}


.img__fbox {
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 1.5rem;
}


.h__box {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.35;
  margin-bottom: 1rem;
}

.text__box {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  text-align: center;
}

/* functionality */
.functionality {
  display: flex;
  flex: 0 50%;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  min-height: 100vh;
  padding-top: 2.5rem;
}

.functionality__box {
  width: 30%;
  height: 250px;
  border-radius: 1rem;
  transition: 0.5s;
  background-size: cover;
  text-align: center;
  background-color: var(--bgr-color);
  overflow: hidden;
  margin: 1rem 5%;
}

.functionality__title {
  width: 100%;
  align-items: flex-start;
  text-align: center;
}

.f__title {
  font-size: 3rem;
  color: var(--second-text-color);
  text-shadow: var(--shadow-2);
  opacity: 0.9;
  padding: 1rem 0;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
}

.functionality__image {
  display: block;
  margin: 0 auto;
}

.f__box {
  margin: 0 auto;
}

.functionality__description {
  width: 90%;
  height: 3rem;
  margin: 0 auto;
  font-family: var(--content-font);
  text-overflow: ellipsis;
  /* margin-bottom: 2rem; */
  cursor: pointer;
  overflow: hidden;
  /* white-space: nowrap; */
}

.active3 {
  height: fit-content;
  position: fixed;
  top: 50%;
  height: fit-content;
  width: 60%;
  margin: 1%;
  z-index: 99;
  transition: width 0.5s;
}

.back {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
}

.active__description {
  height: fit-content;
  overflow: visible;
}

.img__box {
  width: 98%;
  height: 98%;
  padding: 0.5rem;
  align-self: center;
}

.functionality__button {
  padding: 0 0.5rem;
  background-color: rgba(173, 216, 230, 0.5);
  border: 0.5px solid cadetblue;
}

/* form *************************************************************/

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  width: var(--max-width);
  height: 70vh;
}

.form__title {
  font-size: 3rem;
  color: var(--second-text-color);
  text-shadow: var(--shadow-2);
  opacity: 0.9;
  padding: 1rem 0;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
}

.container__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--bgr-color);
  border-radius: 15px 50px 30px;
  box-shadow: 5px 5px 5px lightblue;
  opacity: 0.9;
}

.form__img__wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.form__input__wrap {
  display: flex;
  flex-direction: column;
  /* width: 100%; */
}

.form__img {
  height: 19vh;
  width: auto;
  align-self: flex-end;
}



input[type=email],
input[type=submit] {
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}


/* Style the submit button */

input[type=submit] {
  background-color: rgb(8, 64, 167);
  color: var(--second-text-color);
  border: 1px solid rgb(8, 64, 167);
  border-radius: 3px;
}

input[type=submit]:hover {
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  color: rgb(48, 160, 190);
  border: 1.5px solid rgb(8, 64, 167);
  color: rgb(8, 64, 167);
}

.header__inForm {
  margin: 0 auto;
  font-size: larger;
}

.form__notification {
  font-style: italic;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}

/* team */

.team {
  display: flex;
  flex-direction: column;
  /* width: var(--max-width); */
  width: 80vw;
  height: 100vh;
  display: flex;
  padding-top: 2.5rem;
}

.team-img {
  display: flex;
  flex-wrap: wrap;
}

.team__title {
  font-size: 3rem;
  color: var(--second-text-color);
  text-shadow: var(--shadow-2);
  opacity: 0.9;
  padding: 1rem 0;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
}


.card-bcg {
  margin-top: 38%;
}

/*

.team-img>h2 {
  font-size: 40px;
  padding: 20px;
  text-transform: uppercase;
}
*/
.team-img>p {
  font-size: 30px;
  text-transform: uppercase;
}

.team-card {
  width: 20vw;
  height: 20vw;
  transition: 0.5s;
  cursor: pointer;
  background-size: cover;
}


.team-card:hover {
  transform: scale(1.1);
}

.card-info>a>i {
  list-style: none;
  color: var(--second-text-color);
  font-size: 2.75rem;
  padding: 10px;
  transition: color 0.5s;
  padding-left: 10%;
  margin-top: 25%;
  margin-left: 20%;
}

.card-info>a>i:hover {
  color: rgb(112, 201, 236);
}

/*
.card-photo {
  height: 200px;
  background-position: center;
  background-size: cover;
}
*/
.card1 {
  /* position: absolute; */
  background-image: url(../img/teamphoto/agnieszka.png);

}

.card2 {
  /* position: absolute; */
  background-image: url(../img/teamphoto/kasia.png);
}


.card3 {
  /* position: absolute; */
  background-image: url(../img/teamphoto/mateusz.png);
}

.card4 {
  /* position: absolute; */
  background-image: url(../img/teamphoto/staszek.png);
}

.card5 {
  /* position: absolute; */
  background-image: url(../img/teamphoto/lukasz.png);
}


.card-name {
  margin-left: 45%;
  font-weight: bold;
  font-size: 1.45rem;
  color: var(--second-text-color);
  text-transform: uppercase;
}

.team_bubble-water {
  display: none;
  top: 20%;
  left: 50%;
  position: absolute;
  height: 35%;
  width: 35%;
  background-image: url(../img/FAVPNG_drop-bubble-water-clip-art_hM2P80xR.png);
  background-size: cover;
  background-position: center;
  z-index: -100;
}



.footer {
  width: 100%;
  color: var(--second-text-color);
  background-color: #c2b280;
  font-size: 1.5rem;
  text-align: center;
  text-shadow: var(--shadow-3);
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  line-height: 10vh;
}

/*ustawienie obrazków ryb w gradiencie*/
.fish {
  position: absolute;
  width: 12rem;
  z-index: -1;
}

.fish--right {
  right: 5%;
}

.fish--left {
  left: 8%;
}

.fish--form {
  top: 70%;
}

.fish--diver {
  top: 35%;
}

.fish--sneak {
  left: 0;
  top: 14%;
}

.fish--footer {
  top: 94.7%;
  left: 0;
}

.fish--crab {
  top: 93.7%;
  right: 3%;
  transform: rotate(275deg);
}

.fish--team {
  top: 80%;
}

.fish--functionality {
  top: 27%;
}

.fish--anchor {
  left: 10%;
  top: 94.3%;
  transform: rotate(30deg);
}

.underwater {
  background-image: url(../img/FAVPNG_underwater_19mmkDgZ.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 32%;
  position: absolute;
  top: 67%;
  z-index: -3;
}

.boat {
  position: absolute;
  width: 10%;
  height: 10%;
  background-image: url(../img/FAVPNG_underwater-diving-scuba-diving-deep-diving-clip-art_g2ztRJYt.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

.seafish {
  background-image: url(../img/FAVPNG_sea-fish-euclidean-vector_aH0TcY0K.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 28%;
  z-index: -2;

}


.toTop {
  display: none;
  position: fixed;
  left: 91%;
  bottom: 7%;
  border: 1px solid darkblue;
  border-radius: 50%;
  font-size: 2rem;
  padding: 1rem;
  background-color: lightblue;
  color: darkblue;
  opacity: 0.6;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  line-height: 2rem;
}

.toTop:hover {
  transform: rotate(360deg);
  transition: transform .8s;
}

/* Media Queries */


@media (max-width: 996px) {
  /* .team {
    display: flex;
    flex-wrap: wrap;
  }

  .team-card {
    width: 16rem;
    height: 16rem;
    transition: 0.5s;
    cursor: pointer;
    background-size: cover;
  }

  .card-name {
    font-size: 1rem;
  }

  .card-info>a>i {
    font-size: 1.2rem;
    margin-left: 20%;
  }

  .boat {
    width: 50%;
    height: 10%;

  } */

  .button {
    height: 50px;
    width: 50px;
  }

  .fa {
    font-size: medium;
  }

  .inSlide {
    font-size: 1.2rem;

  }

  .inSlide--header {
    font-size: 2rem;
  }

}




@media (max-width: 1300px) {

  .sneak,
  .navigation,
  .features,
  .functionality,
  .form,
  .team,
  .footer,
  section {
    width: 100%;
  }

  .fish {
    position: absolute;
    width: 12rem;
  }

  .fish--right {
    right: -4%;
  }

  .fish--left {
    left: -8%;
  }

  .features__box {
    width: calc(50% - 60px);
    margin-bottom: 60px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .text__box {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    align-items: flex-start;
    height: 50px !important;
  }

  .toTop {
    display: none !important;
  }

  .navigation__burger {
    font-size: 1em;
    font-style: normal;
    margin: 16px;
    margin-bottom: 0px;
  }

  .navigation__burger__icon {
    display: flex;
    width: 24px;
    height: 24px;
  }

  .navigation__burger__checkbox {
    display: block;
    position: absolute;
    margin: -100;
    top: 0px;
    left: 0px;
    opacity: 0;
  }

  .navigation__burger__checkbox:checked~.navigation__menu {
    display: block;
    width: 200px;
    padding-left: 3px;
    margin-top: 0px;
    margin-left: 0px;
    background: rgba(255, 255, 255, 0.9);
  }

  .navigation__logo__img {
    display: none;
  }

  .navigation__menu {
    display: none;
  }

  .hero__img {
    height: 30%;
  }

  .hero__name {
    width: 60%;
  }

  .hero__boat {
    display: none;
  }

  .button:hover,
  .dots:hover {
    background-color: var(--dots-color);
    transition: none;
    transform: none;
  }

  .button:hover .fa {
    color: lightgray;
    transition: none;
    transform: none;

  }

  .container__form {
    margin: 1rem auto;
    width: 90%;
  }

  .features__box {
    width: 100%;
    max-width: 400px;
    margin: 1rem;
  }

  .features__title {
    font-size: 2rem;
    margin: 0.2rem;
  }

  .f__title {
    font-size: 2rem;
    margin: 0.2rem;
  }

  .features__title {
    font-size: 2.5rem;
    margin: 0.2rem;
  }


  .f__title {
    font-size: 2.5rem;
    margin: 0.2rem;
  }

  .form__title {
    font-size: 2.5rem;
    margin: 0.2rem;
    margin-top: 1rem;
  }

  .features__description {
    max-width: 97%;
    margin: auto;
  }

  .form__title {
    font-size: 2rem;
    margin: 0.2rem;
  }

  .fish--right {
    display: none;
  }

  .fish--left {
    left: -18%;
  }

  @media screen and (max-width: 767px) and (orientation: landscape) {
    .img__fbox {
      display: none;
    }

    .features__box {
      width: 100%;
    }
  }

  .slides {
    padding: 1% 3%;
  }

  .button {
    height: 30px;
    width: 30px;
  }

  .fa {
    font-size: small;
  }

  .inSlide {
    font-size: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .inSlide--header {
    font-size: 1.4rem;
  }

}

@media (max-width: 420px) {
  .hero__description {
    font-size: 5vw;
  }

  .features__description {
    flex-direction: column;
  }

  .description {
    flex: 0 100%;
  }

  .functionality__box {
    width: 80%;
  }

  .logo {
    height: 1.75rem;
    margin-left: 40%;
  }

  .form__title {
    font-size: 1.5rem;
    margin: 0.2rem;
  }

  .form__img {
    display: none;
  }

  .features__title {
    font-size: 1.5rem;
    margin: 0.2rem;
  }

  .f__title {
    font-size: 1.5rem;
    margin: 0.2rem;
  }


  .features__box {
    width: auto;
    height: auto;
    padding: 1rem;
  }

  .img__fbox {
    width: 100%;
    height: auto;
  }

  .fish {
    display: none;
  }

  .dots {
    display: none;
  }

}

@media (min-width: 0px) {
  .team {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .team-card {
    width: 8rem;
    height: 8rem;

  }

  .card-name {
    font-size: 0.8rem;
    margin-left: 35%;
    padding-top: 35%;
  }

  .card-info>a>i {
    font-size: 0.8rem;
    margin-left: 17%;
    margin-top: 15%;
  }

  .card-bcg {
    margin: auto;
  }


  .team__title {
    font-size: 2rem;
  }
}

@media (min-width: 389px) {
  .team {
    height: 100vh;
  }

  .team-card {
    width: 200px;
    height: 200px;
  }

  .card-name {
    font-size: 1rem;
    padding-top: 35%;
    margin-left: 38%;
  }

  .card-info>a>i {
    font-size: 1.2rem;
    margin-top: 18%;
    margin-left: 17%;
  }

  .card-bcg {
    margin: auto;
  }


  .team__title {
    font-size: 2rem;
  }

}

@media (min-width: 576px) {
  .team {
    height: 100vh;
  }

  .team-card {
    width: 250px;
    height: 250px;
  }

  .team__title {
    font-size: 2.5rem;
  }

  .card-name {
    font-size: 1.2rem;
    padding-top: 37%;
    margin-left: 40%;
  }

  .card-info>a>i {
    font-size: 1.3rem;
    margin-top: 18%;
    margin-left: 20%;
  }
}

@media (min-width: 768px) {
  .team-card {
    width: 18rem;
    height: 18rem;
  }

  .team__title {
    font-size: 2.8rem;
  }

  .card-name {
    font-size: 1.2rem;
    padding-top: 37%;
    margin-left: 40%;
  }

  .card-info>a>i {
    font-size: 1.5rem;
    margin-top: 23%;
    margin-left: 20%;
  }

}

@media (min-width: 992px) {
  .team {
    height: 120vh;
  }

  .team-card {
    width: 15rem;
    height: 15rem;
  }

  .team__title {
    font-size: 2.8rem;
  }

  .card-name {
    font-size: 1.2rem;
    padding-top: 37%;
    margin-left: 40%;
  }

  .card-info>a>i {
    font-size: 1.5rem;
    margin-top: 23%;
    margin-left: 20%;
  }

}

@media (min-width: 1200px) {
  .team-img {
    display: flex;
    justify-content: center;
  }

  .team-card {
    width: 21rem;
    height: 21rem;
    margin: 15px;
  }

  .team__title {
    font-size: 3rem;
  }

  .card-name {
    font-size: 1.4rem;
    padding-top: 37%;
    margin-left: 40%;
  }

  .card-info>a>i {
    font-size: 1.7rem;
    margin-top: 25%;
    margin-left: 20%;
  }

}

.lang-picker {
  border: 0;
  background: transparent;
  color: var(--main-text-color);
  margin-left: 50px;
}
