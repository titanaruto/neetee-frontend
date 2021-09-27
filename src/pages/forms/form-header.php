<form method="post" class="form-header">
    <i class="form-header__icon--close fal fa-times"></i>
    <div class="form-header__btn-wrapper">
        <a href="#" class="form-header__btn form-header__btn-login ">Вход</a>
        <a href="#" class="form-header__btn form-header__btn-registration">Регистрация</a>
    </div>
    <input type="text" required class="form-header__inputs" id="nickname" name="nickname" placeholder="Ваш никнейм">
    <input type="email" hidden required class="form-header__inputs" id="email" name="email" placeholder="Ваша почта">
    <input type="password" required class="form-header__inputs" id="password" name="password" placeholder="Пароль">
    <input type="password" hidden required class="form-header__inputs" id="repeatPassword" name="repeatPassword"
           placeholder="Повторите пароль">
    <input type="text" hidden class="form-header__inputs" id="nameRefer" name="nameRefer"
           placeholder="Имя спонсора(необязательно)">
    <div class="form-header__socials">
        <h4 class="socials__title">
            Войти через соц. сети
        </h4>
        <ul class="socials__list">
            <li class="socials__item">
                <a href="#" class="socials__link">
                    <svg class="socials__icon">
                        <use href="assets/img/icons/sprite.svg#facebook"></use>
                    </svg>
                </a>
            </li>
            <li class="socials__item">
                <a href="#" class="socials__link">
                    <svg class="socials__icon">
                        <use href="assets/img/icons/sprite.svg#telegram"></use>
                    </svg>
                </a>
            </li>
            <li class="socials__item">
                <a href="#" class="socials__link">
                    <svg class="socials__icon">
                        <use href="assets/img/icons/sprite.svg#google"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
    <div class="form-header__captcha-wrapper">
        <div id="form-header__captcha" class="form-header__captcha"></div>
        <input type="button" class="form-header__inputs form-header__submit form-header__submit-login " value="Войти">
        <input type="button" class="form-header__inputs form-header__submit form-header__submit-registration"
               value="Регистрация">
    </div>
    <div class="form-header__btn-wrapper form-header__btn-wrapper-info">
        <div class="form-header__btn-checkbox-wrapper">
            <input type="checkbox" id="saveMe" class="form-header__btn-save-me">
            <label for="saveMe" class="form-header__btn-text">Запомнить меня</label>
        </div>
        <a href="#" class="form-header__forgot-your-password form-header__btn-text">Забыли пароль?</a>
    </div>
</form>
<script type="text/javascript">
    var onloadCallback = function () {
        grecaptcha.render('form-header__captcha', {
            'sitekey': '6LdB-uEZAAAAABB_u1McpCFtb2xe713s6Jr1QWbn',
            'data-size': 'compact',
        });
    };
</script>