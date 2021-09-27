<footer class="main-footer">
    <div class="container">
        <header class="footer-header">
            <nav class="footer-header__lang">
                <label class="footer-header__label choose-lang" for="footer-header__dropdown">Язык:</label>

                <ul class="footer-header__content">
                    <li class="footer-header__flag">
                        <input type="radio" hidden name="flag-site[]" checked id="ru" class="flag-radio">
                        <label for="ru" class="flag-label">
                            <svg class="footer-header__icon footer-header__icon--bell">
                                <use href="assets/img/icons/sprite.svg#flag-ru"></use>
                            </svg>
                        </label>

                    </li>
                    <li class="footer-header__flag">
                        <input type="radio" hidden name="flag-site[]" id="chine" class="flag-radio">
                        <label for="chine" class="flag-label">
                            <svg class="footer-header__icon footer-header__icon--bell">
                                <use href="assets/img/icons/sprite.svg#flag-chine"></use>
                            </svg>
                        </label>
                    </li>
                    <li class="footer-header__flag">
                        <input type="radio" hidden name="flag-site[]" id="america" class="flag-radio">
                        <label for="america" class="flag-label">
                            <svg class="footer-header__icon footer-header__icon--bell">
                                <use href="assets/img/icons/sprite.svg#flag-america"></use>
                            </svg>
                        </label>

                    </li>
                </ul>
                <i class="footer-header__btn fas fa-chevron-down"></i>
            </nav>
            <div class="footer-header__logo">
                <img src="img/logo.svg" alt="test" class="footer-header__logo-img">
            </div>

        </header>
        <section class="footer-info">
            <p class="footer-info__description">
                Целью компании является создание общей доверительной и безопасной базы,
                оболочку которой составляет совокупность многогранных направлений, каждое
                из которых нацелено на формирование единой системы.
            </p>

            <nav class="footer-info__navigation">
                <ul class="footer-info__list">
                    <li class="footer-info__item"><a href="#" class="footer-info__link">Главная</a></li>
                    <li class="footer-info__item"><a href="#" class="footer-info__link">Оферта</a></li>
                    <li class="footer-info__item"><a href="#" class="footer-info__link">Поиск</a></li>
                    <li class="footer-info__item"><a href="#" class="footer-info__link">Партнерам</a></li>
                    <li class="footer-info__item"><a href="#" class="footer-info__link">Контакты</a></li>
                    <li class="footer-info__item"><a href="#" class="footer-info__link">Документация</a></li>
                </ul>
                <a href="#" class="footer-info__link"></a>
            </nav>
            <div class="footer-info__cards">
                <h3 class="cards__title">Мы принимаем:</h3>
                <ul class="cards__list">
                    <li class="cards__item"><img src="assets/img/minific/maestro.png" alt="test"></li>
                    <li class="cards__item"><img src="assets/img/minific/visa.png" alt="test"></li>
                </ul>
            </div>
            <div class="footer-info__add-navigation">
                <ul class="footer-info__add-list">
                    <li class="footer-info__add-item"><a href="#" class="footer-info__add-link">Связь</a></li>
                    <li class="footer-info__add-item"><a href="#" class="footer-info__add-link">Мы поможем</a></li>
                    <li class="footer-info__add-item"><a href="#" class="footer-info__add-link">Поддержка</a></li>
                </ul>
            </div>


        </section>
    </div>
    <div class="overlay"></div>
    <script src="assets/js/scripts.min.js?ver=<?=$version?>"></script>
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=ru" async
            defer></script>
</footer>
</body>
</html>

