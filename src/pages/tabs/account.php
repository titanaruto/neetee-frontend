<section class="account">
    <div class="account__wrapper-radio">
        <ul class="account__radio-list">
            <li class="account__radio-item">
                <input type="radio" class="account__radio-input" name="account[]" checked hidden id="individual">
                <label for="individual" class="account__radio-label"><i class="account__radio-icon  far fa-circle"></i>Физическое лицо</label>
            </li>
            <li class="account__radio-item">
                <input type="radio" class="account__radio-input" name="account[]" hidden id="entity">
                <label for="entity" class="account__radio-label"> <i class="account__radio-icon far fa-circle"></i> Юридическое лицо</label>
            </li>
        </ul>
    </div>
    <div class="account__params-created add-advert">
        <div class="account__individual account__params-show params-created">
            <form action="#" class="account__form">
                <div class="params-created__left-side">
                    <label for="name-individual" class="profile-page__params-label">Имя*</label>
                    <input type="text" required id="name-individual" name="name" placeholder="Укажите ваше имя"
                           class="profile-page__params-input">

                    <label for="surname-individual" class="profile-page__params-label">Фамилия</label>
                    <input type="text" id="surname-individual" name="surname" placeholder="Укажите вашу фамилию"
                           class="profile-page__params-input">

                    <label for="nickname-individual" class="profile-page__params-label">Никнейм*</label>
                    <input type="text" required id="nickname-individual" name="nickname"
                           placeholder="Придумайте уникальный никнейм" class="profile-page__params-input">

                    <label for="birthday-individual" class="profile-page__params-label">Дата рождения</label>
                    <input type="date" id="birthday-individual" placeholder="Укажите вашу дату рождения" name="birthday"
                           class="profile-page__params-input profile-page__params-input--date">
                    <div class="params-created__wrapper-place">
                        <div class="params-created__wrapper-place-item">
                            <label for="country-individual" class="profile-page__params-label">Страна*</label>
                            <input type="text" required id="country-individual" placeholder="Укажите вашу страну"
                                   name="country" class="profile-page__params-input">
                        </div>
                        <div class="params-created__wrapper-place-item">
                            <label for="city-individual" class="profile-page__params-label">Город*</label>
                            <input type="text" required id="city-individual" placeholder="Укажите ваш город" name="city"
                                   class="profile-page__params-input">
                        </div>
                    </div>

                </div>
                <div class="params-created__right-side">
                    <label for="site-individual" class="profile-page__params-label">Сайт</label>
                    <input type="text" id="site-individual" name="site" placeholder="Укажите ваш сайт"
                           class="profile-page__params-input">

                    <label for="phone-individual" class="profile-page__params-label">Телефон*</label>
                    <input type="tel" required id="phone-individual" name="phone" placeholder="Укажите телефон компании"
                           class="profile-page__params-input">

                    <label for="email-individual" class="profile-page__params-label">Почта*</label>
                    <input type="email" required id="email-individual" name="email" placeholder="Укажите почту компании"
                           class="profile-page__params-input">

                </div>
            </form>
        </div>
        <div class="account__entity params-created">
            <form action="#" class="account__form">
                <div class="params-created__left-side">
                    <label for="scope" class="profile-page__params-label">Тип компании*</label>
                    <div class="params-created__select-wrapper">
                        <select name="scope" required id="scope" class="profile-page__params-input params-created__select">
                            <option class="sorting-opt" value="1" disabled="" selected="">Сфера деятельности</option>
                            <option class="sorting-opt" value="2">тест</option>
                            <option class="sorting-opt" value="3">тест</option>
                            <option class="sorting-opt" value="4">тест</option>
                        </select>
                    </div>
                    <label for="name_company" class="profile-page__params-label">Название компании*</label>
                    <input type="text" required id="name_company" placeholder="Укажите название компании"
                           name="name_company"
                           class="profile-page__params-input">

                    <label for="inn" class="profile-page__params-label">ИНН*</label>
                    <input type="number" required id="inn" name="inn" placeholder="Укажите ИНН вашей компании"
                           class="profile-page__params-input">

                    <div class="params-created__wrapper-place">
                        <div class="params-created__wrapper-place-item">
                            <label for="country" class="profile-page__params-label">Страна*</label>
                            <input type="text" required id="country" placeholder="Укажите вашу страну" name="country"
                                   class="profile-page__params-input">
                        </div>
                        <div class="params-created__wrapper-place-item">
                            <label for="city" class="profile-page__params-label">Город*</label>
                            <input type="text" required id="city" name="city" placeholder="Укажите ваш город"
                                   class="profile-page__params-input">
                        </div>
                    </div>

                    <label for="register_address" class="profile-page__params-label">Адрес регистрации*</label>
                    <input type="text" required id="register_address" placeholder="Укажите ваш адрес регистрации"
                           name="register_address"
                           class="profile-page__params-input">

                    <label for="actual_address" class="profile-page__params-label">Фактический адрес*</label>
                    <input type="text" required id="actual_address" placeholder="Укажите ваш адрес нахождения"
                           name="actual_address"
                           class="profile-page__params-input">

                    <label class="profile-page__params-label-address">Добавить адрес <i
                                class="profile-page__params-icons fal fa-plus-circle"></i></label>

                    <div class="params-created__list-address">

                    </div>
                </div>
                <div class="params-created__right-side ">
                    <label for="fio" class="profile-page__params-label">ФИО*</label>
                    <input type="text" id="fio" name="fio" placeholder="Укажите ваше имя и фамилию"
                           class="profile-page__params-input">

                    <label for="phone" class="profile-page__params-label">Телефон*</label>
                    <input type="tel" required id="phone" name="phone" placeholder="Укажите ваш номер телефона"
                           class="profile-page__params-input">
                    <div class="params-created__wrapper-place">
                        <div class="params-created__wrapper-place-item">
                            <label for="email-entity" class="profile-page__params-label">Почта*</label>
                            <input type="email" required id="email-entity" name="email" placeholder="Укажите вашу почту"
                                   class="profile-page__params-input">
                        </div>
                        <div class="params-created__wrapper-place-item">
                            <label for="telegram" class="profile-page__params-label">Telegram</label>
                            <input type="text" required id="telegram" placeholder="Укажите ваш аккаунт" name="telegram"
                                   class="profile-page__params-input">
                        </div>
                    </div>
                    <div class="params-created__wrapper-place">
                        <div class="params-created__wrapper-place-item">
                            <label for="whats_app" class="profile-page__params-label">WhatsApp</label>
                            <input type="text" required id="whats_app" placeholder="Укажите ваш аккаунт"
                                   name="whats_app" class="profile-page__params-input">
                        </div>
                        <div class="params-created__wrapper-place-item">
                            <label for="we_chat" class="profile-page__params-label">WeChat</label>
                            <input type="text" required id="we_chat" placeholder="Укажите ваш аккаунт" name="we_chat"
                                   class="profile-page__params-input">
                        </div>
                    </div>
                    <label for="other_info" class="profile-page__params-label">Другие контактные данные</label>
                    <input type="text" id="other_info" name="other_info"
                           placeholder="Укажите название мессенджера и номер аккаунта"
                           class="profile-page__params-input">

                    <label for="site" class="profile-page__params-label">Ваш сайт</label>
                    <input type="text" id="site" name="site" placeholder="Укажите ваш сайт"
                           class="profile-page__params-input">


                </div>
            </form>
        </div>
        <div class="add-advert__submit-wrapper">
            <div class="add-advert__submit">
                <input type="checkbox" hidden class="add-advert__checkbox" name="documents" id="documents">
                <label class="add-advert__label  add-advert__label--submit add-advert__price-check"
                       for="documents"></label>
                <p class="add-advert__document-text">Я соглашаюсь с <a href="#" class="add-advert__link">условиями
                        подачи документов</a></p>
            </div>
            <a href="#" class="seller__btn-message seller__btn-message--advert add-advert__btn-submit">
                Сохранить
            </a>
        </div>

    </div>

</section>