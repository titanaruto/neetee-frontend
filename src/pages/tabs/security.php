<section class="account security">
    <div class="account__params-created add-advert">
        <div class="account__entity account__params-show params-created">
            <form action="#" class="account__form">
                <div class="params-created__left-side">
                    <div class="security__password-wrapper">
                        <p class="security__title">Изменение пароля</p>
                        <label for="current_password" class="profile-page__params-label">Текущий пароль</label>
                        <div class="security__password-icon">
                            <input type="password" id="current_password" class="profile-page__params-input"
                                   placeholder="Введите текущий пароль" name="password">
                            <a href="#" class="security__password-show-pass" onclick="return show_hide_password(this);"><i
                                        class="fas fa-eye-slash"></i></a>
                        </div>
                        <label for="new_password" class="profile-page__params-label">Новый пароль</label>
                        <div class="security__password-icon">
                            <input type="password" id="new_password" class="profile-page__params-input"
                                   placeholder="Введите новый пароль" name="new_password">
                            <a href="#" class="security__password-show-pass" onclick="return show_hide_password(this);"><i
                                        class="fas fa-eye-slash"></i></a>
                        </div>
                        <label for="new_repeat_password" class="profile-page__params-label">Повторите пароль</label>
                        <div class="security__password-icon">
                            <input type="password" id="new_repeat_password" class="profile-page__params-input"
                                   placeholder="Повторите новый пароль" name="new_repeat_password">
                            <a href="#" class="security__password-show-pass" onclick="return show_hide_password(this);"><i
                                        class="fas fa-eye-slash"></i></a>
                        </div>

                    </div>
                    <div class="security__password-wrapper">
                        <p class="security__title">Изменение e-mail</p>

                        <label for="current_email" class="profile-page__params-label">Текущий e-mail</label>
                        <input type="email" required id="current_email" name="current_email"
                               placeholder="Введите текущий e-mail"
                               class="profile-page__params-input">

                        <label for="new_email" class="profile-page__params-label">Новый e-mail</label>
                        <input type="email" required id="new_email" name="new_email" placeholder="Введите новый e-mail"
                               class="profile-page__params-input">
                    </div>
                </div>
                <div class="params-created__right-side ">
                    <div class="security__password-wrapper">
                        <p class="security__title">Установите секретный вопрос</p>

                        <label for="question" class="profile-page__params-label">Вопрос 1</label>
                        <div class="params-created__select-wrapper">
                            <select name="question" required id="question"
                                    class="profile-page__params-input params-created__select">
                                <option class="sorting-opt" value="1" disabled="" selected="">Выберите</option>
                                <option class="sorting-opt" value="2">тест</option>
                                <option class="sorting-opt" value="3">тест</option>
                                <option class="sorting-opt" value="4">тест</option>
                            </select>
                        </div>
                        <label for="answer" class="profile-page__params-label">Ответ 1</label>
                        <input type="text" required id="answer" name="answer"
                               placeholder="Введите ответ на вопрос"
                               class="profile-page__params-input">
                    </div>
                    <div class="security__password-wrapper">
                        <p class="security__title">Изменение номера телефона</p>

                        <label for="current_phone" class="profile-page__params-label">Текущий номер телефона</label>
                        <input type="tel" required id="current_phone" name="current_phone"
                               placeholder="Введите текущий номер телефона"
                               class="profile-page__params-input">
                        <label for="new_phone" class="profile-page__params-label">Новый номер телефона</label>
                        <input type="tel" required id="new_phone" name="new_phone"
                               placeholder="Введите новый номер телефона"
                               class="profile-page__params-input">
                    </div>
                </div>
            </form>
        </div>
        <div class="add-advert__submit-wrapper">
            <a href="#" class="seller__btn-message seller__btn-message--advert add-advert__btn-submit">
                Сохранить
            </a>
        </div>

    </div>

</section>